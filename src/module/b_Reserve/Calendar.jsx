import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

const BarberBooking = ({ onBooking, showbooking, bookingData, unavaiableTime }) => {
  const [selectedServe, setSelectedServe] = useState({ name: bookingData?.[0]?.name, price: bookingData?.[0]?.price, id:bookingData?.[0]?._id });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (selectedServe && selectedDate && selectedTime) {
      onBooking({
        serve: selectedServe,
        date: selectedDate,
        time: selectedTime
      });
    }
  }




  // useEffect(() => {
  //   // ตรวจสอบว่ามีการตั้งค่าทั้งสามค่าแล้วค่อยเรียก onBooking

  //   // ตรวจสอบ dependency array ให้มีเฉพาะสิ่งที่จำเป็นในการอัปเดต
  // }, [selectedService, selectedDate, selectedTime]);


  const timeSlots = [
    "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00", "21:00"
  ];

  return (
    <div className="ml-4">
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            <a href="https://www.blackbox.ai/?q=Barber+A">Barber A</a>
          </h2>
        </div>
        {!showbooking &&
          <div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-left font-medium text-gray-900">บริการ</label>
              <select
                id="serve"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={JSON.stringify(selectedServe)}
                onChange={(e) => setSelectedServe(JSON.parse(e.target.value))}
              >
                {bookingData.map((serve, index) => (
                  <option key={serve._id} value={JSON.stringify({name: serve.name, price: serve.price, id:serve._id})}>{serve.name}</option>
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

            {/* Display Selected Time */}
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
                    disabled={unavaiableTime.find((time) => time.time === slot && selectedDate === time.date)}
                  />
                  {unavaiableTime.find((time) => time.time === slot && selectedDate === time.date) ?<label
                    className={`inline-flex items-center rounded-md justify-center w-full p-6 text-sm font-medium text-center border cursor-not-allowed bg-gray-200 text-gray-500`}
                  >
                    {slot}
                  </label>:<label
                    htmlFor={`slot-${index}`}
                    className={`inline-flex items-center rounded-md justify-center w-full p-6 text-sm font-medium text-center border cursor-pointer ${selectedTime === slot ? "bg-white text-black" : "bg-gray-900 text-white"} hover:bg-orange-500 hover:text-black`}
                  >
                    {slot}
                  </label>}
                </div>
              ))}
            </ul>
            <div className='flex justify-end mt-[20px]'>
              <button onClick={handleSubmit} className='border p-[5px] rounded-[10px] text-black'>
                Confirm Booking
              </button>
            </div>
          </div>

        }
        {showbooking &&
          <div className="container mx-auto p-4">
            <table className="table-auto w-full text-left border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Serve</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">{bookingData.date}</td>
                  <td className="px-4 py-2 border">{bookingData.serve.name}</td>
                  <td className="px-4 py-2 border">{bookingData.serve.price}</td>
                  <td className="px-4 py-2 border">{bookingData.time}</td>
                </tr>
              </tbody>
            </table>
          </div>

        }

      </div>
    </div>
  );
};

export default BarberBooking;
