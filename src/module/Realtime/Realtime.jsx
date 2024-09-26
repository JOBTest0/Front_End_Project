import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { io } from 'socket.io-client';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// กำหนดไอคอนสำหรับ Marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const socket = io('http://localhost:3000');

// Component สำหรับ Routing
function Routing({ locations }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: locations.map((loc) => L.latLng(loc.lat, loc.lng)),
      lineOptions: {
        styles: [{ color: 'blue', weight: 4 }],
      },
      createMarker: function() { return null; }, // ไม่แสดง marker เพิ่มเติม
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, locations]);

  return null;
}

function App() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    // ขออนุญาตผู้ใช้เพื่อเข้าถึงตำแหน่ง
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setLocation(newLocation);
        socket.emit('sendLocation', newLocation);
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }

    // รับตำแหน่งจาก server
    socket.on('updateLocation', (location) => {
      setAllLocations((prev) => [...prev, location]);
    });

    // ทำความสะอาดการเชื่อมต่อเมื่อ component ถูกปิด
    return () => {
      socket.off('updateLocation');
    };
  }, []);

  return (
    <div>
      <h1>Realtime Location Tracker with Route</h1>
      <MapContainer center={location} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location} icon={customIcon}>
          <Popup>Your Location: Latitude: {location.lat}, Longitude: {location.lng}</Popup>
        </Marker>
        {allLocations.map((loc, index) => (
          <Marker key={index} position={loc} icon={customIcon}>
            <Popup>Latitude: {loc.lat}, Longitude: {loc.lng}</Popup>
          </Marker>
        ))}
        {allLocations.length > 1 && <Routing locations={allLocations} />}
      </MapContainer>
    </div>
  );
}

export default App;
