import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Services() {
  
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    
    <section id="services" className="w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-5">
        {/* <h1 data-aos="zoom-in" data-aos-delay="400" className="font-bold lg:text-[50px] text-[50px] lg:leading-[70px] leading-[50px] text-center text-black">Select Your Sport</h1>
        <div data-aos="zoom-in" data-aos-delay="600" className="w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-3">
          {pricingplan.map((item, index) => (
            <Link key={index} to={`/about${index + 1}`} className="relative w-full  lg:w-[35%] h-[300px] p-5 flex flex-col rounded-xl  overflow-hidden hover:scale-105 transition duration-300 cursor-pointer drop-shadow-md ">
            <div className="absolute inset-0 z-0 bg-cover bg-no-repeat drop-shadow-md " style={{ backgroundImage: `url(${item.img})` }}></div>    
            <div className="absolute inset-0 bg-black opacity-35 rounded-xl">  </div> 
              <h1 className="absolute top-2 text-white text-5xl font-bold  font-ubuntu">{item.type}</h1>
             
          </Link>
          
          ))}
        </div> */}
      </section>

      
  );
}
