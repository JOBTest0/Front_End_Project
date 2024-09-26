import AOS from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import api from "../../utils/api.js";
// import Hero from "../module/Main/Hero.jsx";
// import About from "../module/Main/About.jsx";
import Clients from "../Main/Clients.jsx";

// import { testidata } from "../../export.js";
const Barber = () => {
  const [testidata , settestdata] = useState([])


  useEffect(()=>{
    api.get('getall')
    .then(response => {
      settestdata((response.data.data || []) || [])
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  // const [visibleSection, setVisibleSection] = useState(() => {
  //   return localStorage.getItem('visibleSection') || 'about';
  // });

  // const handleButtonClick = (section) => {
  //   setVisibleSection(section);
  //   localStorage.setItem('visibleSection', section);
  // };
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  const handleCardClick = () => {
    navigate('/haircut');
  };

  const handleClick = (path , data) => {
    navigate(path , {state:{data}});
    window.scrollTo(0, 0);
  };

  return (
    <>
    {/* <Hero /> */}
    <section
      id="about"
      className="w-[100%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20"
    >
      <div className="container">
        <div className="text-left mb-[160px]">
          <p data-aos="fade-up" className="text-sm text-primary">
            foy you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            ร้านตัดผม
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[100px] md:gap-5 place-items-center">
          {testidata.map((data) => (
            
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2x1 px-20 hover:bg-black hover:text-white relative shadow-xl duration-300 group max-w-[400px] mb-[170px]"
            >
              <div className="h-[100px] mb-[150px]">
                <img
                  src={data.imgDetail}
                  alt=""
                  className="max-w-[200px] block transform-translate group-hover:scale-150 duration-300 drop-shadow-md rounded-md"
                /> 
              </div>
              
              <div className="p-10 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-primary" />
                  ))}
                </div>
                <h1 className="text-xl font-bold mb-2">{data.nameBarber}</h1>
                <p
                  className="mt-1 text-left text-primary font-bold group-hover:text-white duration-300 text-sm px-0 mb-2"
                >
                  {data.description}
                </p>
                <button 
                className="bg-orange-500/80 hover:scale-105 duration-300 text-gray-900 font-ubuntu font-semibold py-1 px-5 rounded-md mt-4 group-hover:bg-white group-hover:text-black" 
                onClick={() => handleClick('/haircut' , data)}>
                  Choose
                </button>
                <button 
                className="bg-orange-500/80 hover:scale-105 duration-300 text-gray-900 font-ubuntu font-semibold py-1 px-5 rounded-md mt-4 group-hover:bg-white group-hover:text-black" 
                onClick={() => handleClick('/detail' , data)}>
                  Veiw
                </button>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
       {/* <About/> */}
      
      
    </>
  )
}

export default Barber
