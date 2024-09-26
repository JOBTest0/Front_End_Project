import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

const Info = ({ data }) => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: "ease-in-sine",
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center p-4">
            <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="font-bold lg:text-[50px] text-[30px] lg:leading-[70px] leading-[40px] text-black"
            >
                รายละเอียด
            </h1>

            <div className="mt-8 w-full max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-x-4 text-left">
                    <div className="font-semibold text-gray-700">ชื่อช่าง:</div>
                    <div className="text-gray-900">{data.nameMBarber}</div>

                    <div className="font-semibold text-gray-700">เวลาเปิด-ปิดร้าน:</div>
                    <div className="text-gray-900">{data.dateOpen} - {data.dateClose}</div>

                    <div className="font-semibold text-gray-700">เบอร์โทร:</div>
                    <div className="text-gray-900">{data.phone}</div>

                    <div className="font-semibold text-gray-700">ที่ตั้งร้าน:</div>
                    <div className="text-gray-900">{data.address}</div>


                </div>
            </div>

            <div className="flex justify-center space-x-7 mt-8">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={50} className="text-blue-600 hover:text-blue-800 transition duration-300" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={50} className="text-pink-600 hover:text-pink-800 transition duration-300" />
                </a>
                <a href="https://line.me" target="_blank" rel="noopener noreferrer">
                    <FaLine size={50} className="text-green-600 hover:text-green-800 transition duration-300" />
                </a>
            </div>
        </div>
    );
};

export default Info;
