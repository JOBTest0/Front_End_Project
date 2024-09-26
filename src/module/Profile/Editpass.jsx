import React, { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img_Profile from "../../assets/MainImage/profile.png";
const Editpass = () => {
    useEffect(() =>{
        AOS.init({
            offset: 200,
            duration: 400,
            easing: "ease-in-sine"
        });
    }, [])
  return (
    <div className="bg-gray-500 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div data-aos="fade-right" data-aos-delay="400" className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12 text-white">
            <h2 className="pl-3 mb-4 text-2xl font-semibold text-white">
              Settings
            </h2>
            <Link
              to="/profile"
              className="flex items-center px-3 py-2.5 font-bold bg-white  text-[#000] border rounded-full"
            >
             Profile
            </Link>
            <Link
              to="/account_security"
              className="flex items-center px-3 py-2.5 font-bold bg-white  text-[#000] border rounded-full"
            >
              เปลี่ยนรหัสผ่าน
            </Link>
          </div>
        </aside>
         <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div data-aos="fade-up" data-aos-delay="400" className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl text-white text-center">
              เปลี่ยนรหัสผ่าน
              </h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                </div>
                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        รหัสผ่านปัจจุบัน
                      </label>
                      <input
                        // value={name}
                        type="text"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="กรอกรหัสผ่านปัจจุบัน"
                        // onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      รหัสผ่านใหม่
                    </label>
                    <input
                    //   value={email}
                      type="email"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="กรอกรหัสผ่านใหม่"
                    //   onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      ยืนยันรหัสผ่านใหม่
                    </label>
                    <input
                    //   value={email}
                      type="email"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="กรอกยืนยันรหัสผ่านใหม่"
                    //   onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="text-whitetext-base text-white focus:outline-none border border-indigo-200  focus:z-10 focus:ring-4 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800  hover:bg-limegreen "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}

export default Editpass
