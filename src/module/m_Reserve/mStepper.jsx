import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import api from '../../utils/api';
import MBarberBooking from './mCalendar';
import MPayment from './mPayment';



// คอมโพเนนต์เนื้อหาของแต่ละขั้นตอน
const StepContent = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <div className="">
          <h3 className="text-gray-500 dark:text-neutral-400"><MBarberBooking /></h3>
        </div>
      );
      case 2:
        return (
          <div className="">
            <h3 className="text-gray-500 dark:text-neutral-400"><MPayment/></h3>
          </div>
        );
  
    default:
      return null;
  }
};

StepContent.propTypes = {
  step: PropTypes.number.isRequired,
};

// คอมโพเนนต์หลักสำหรับ Stepper
const Stepper = ({user}) => {
  const location = useLocation()
  const {data:barber} = location.state
  const navigate = useNavigate();
  console.log(barber)

  const [currentStep, setCurrentStep] = useState(1);
  
  const [selectedService, setSelectedService] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [manualMapLink, setManualMapLink] = useState(''); // State for manual Google Maps link


  const [bookingData, setBookingData] = useState([]);
  const [handleclick, sethandleclick] = useState(false)
  console.log(user)
  const submitData=()=>{
    if (!user?.user) {
      alert('Please login to continue');
      navigate('/login');
      return;
    }
    const dataBody  = {
      iduser: user?.user._id,
      idBarber: barber._id,
      namehaircut: barber.name,
      imghaircut: barber.img,
      time: selectedTime,
      date: selectedDate,
      nameserve: selectedService?.name,
      price:selectedService?.price,
      location: `${selectedLocation?.lat},${selectedLocation?.lng}` || manualMapLink,
    }
    api.post('createbooking', dataBody)
      .then((response) => {
        navigate('/Bookinghis', {
          state: { data: response.data.data },
        } );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(()=>{
    if (!barber?.idBarber) return
    api.get(`getService/${barber.idBarber}`).then(response => {
      setBookingData(response.data)
      if(response.data.length > 0)
      {
        setSelectedService({
          name: response.data[0].name,
          price: response.data[0].price,
          id: response.data[0]._id
        })
      }
  })
  },[barber])

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const timeSlots = [
    "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00",   
    "18:00", "19:00", "20:00", "21:00"
  ];

  const mapStyles = {
    height: "300px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 16.244884, 
    lng: 103.249101
  };

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    setManualMapLink(''); // Clear manual link when a location is selected on the map
  };

  const generateGoogleMapsLink = () => {
    if (!selectedLocation) return '';
    const { lat, lng } = selectedLocation;
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  };
  const goToNextStep = () => {
    setCurrentStep(prevStep => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  const goToPreviousStep = () => {
    setCurrentStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <section className="bg-white sm:py-16">
      <div className="mx-auto lg:px-8 max-w-[90rem]">
        <div className="flex justify-center">
          <ul className="relative flex gap-x-4 w-full max-w-xl justify-center">
            {[1, 2].map((step, index) => (
              <li
                key={step}
                className={`flex items-center gap-x-2 ${currentStep === step ? 'hs-stepper-active' : ''}`}
                aria-current={currentStep === step ? 'step' : undefined}
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                  <span className={`size-7 flex justify-center items-center shrink-0 rounded-full ${currentStep >= step ? 'bg-orange-500/90 text-white' : 'bg-gray-100 text-gray-800'} font-medium`}>
                    {step}
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white">
                    Step
                  </span>
                </span>
                {index < 1 && (
                  <div className={`w-80 h-px ${currentStep > step ? 'bg-orange-500/90' : 'bg-gray-200'}`}></div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          {currentStep === 1 ?
          <div className="ml-4">
          <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
              {
                barber?.nameBarber}
              </h2>
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-left font-medium text-gray-900">บริการ</label>
              <select
                id="service"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedService?.id}
                onChange={(e) => {
                  const selectedService = bookingData.find((service) => service._id === e.target.value);
                  setSelectedService({
                  name: selectedService.name,
                  price: selectedService.price,
                  id: selectedService._id
                })}}
              >
                {bookingData.map((serve, index) => (
                  
                <option value={serve?._id} key={serve._id}>{serve.name}</option>
                  ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-left font-medium text-gray-900">วันที่</label>
              <input
                type="date"
                id="date"
                className="mt-1 block rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
    
            {selectedTime && (
              <div className="mt-4">
                <h3 className="text-left font-medium text-gray-900">เวลา</h3>
                <div className="mt-1 block w-[10%] rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  {selectedTime}
                </div>
              </div>
            )}
    
            <ul className="grid w-full border grid-cols-3 gap-4">
              {timeSlots.map((slot, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`slot-${index}`}
                    value={slot}
                    className="hidden peer"
                    checked={selectedTime === slot}
                    onChange={() => handleTimeChange(slot)}
                  />
                  <label
                    htmlFor={`slot-${index}`}
                    className={`inline-flex items-center rounded-md border justify-center w-full p-6 text-sm font-medium text-center border cursor-pointer ${selectedTime === slot ? "bg-white text-black" : "bg-gray-900 text-white"} hover:bg-orange-500/90 hover:text-black`}
                  >
                    {slot}
                  </label>
                </div>
              ))}
            </ul>
    
            {/* Google Map Component */}
            <div className="mt-4">
              <label htmlFor="location" className="block text-left font-medium text-gray-900">สถานที่</label>
              <LoadScript googleMapsApiKey="AIzaSyCRpO7cFdZjC-6qV4W38qJDHw5BqAo75wc">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={defaultCenter}
                  onClick={handleMapClick}
                >
                  {selectedLocation && <Marker position={selectedLocation} />}
                </GoogleMap>
              </LoadScript>
            </div>
    
           
            {/* Display Selected Location Link */}
            {selectedLocation && (
              <div className="mt-4">
                <h3 className="text-left font-medium text-gray-900">Selected Location</h3>
                <a
                  href={generateGoogleMapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View on Google Maps
                </a>
              </div>
            )}
    
             {/* Input Field for Manual Google Maps Link */}
             <div className="mt-4">
              <label htmlFor="mapLink" className="block text-left font-medium text-gray-900">Paste Google Maps Link</label>
              <input
                type="url"
                id="mapLink"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="https://www.google.com/maps/..."
                value={manualMapLink}
                onChange={(e) => {
                  setManualMapLink(e.target.value);
                  setSelectedLocation(null); // Clear selected location when a manual link is entered
                }}
              />
            </div>
    
          </div>
        </div>
          : <></>
          }

          <div className="mt-5 flex justify-between items-center gap-x-2">
            <button
              type="button"
              aria-label="Go to previous step"
              className="relative inline-flex items-center cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
              onClick={goToPreviousStep}
              disabled={currentStep === 1}
            >
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Back
            </button>
            <button
              type="button"
              aria-label="Next step"
              className="relative inline-flex items-center cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
              onClick={submitData}
              disabled={currentStep === 2}
            >
              Finish
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
