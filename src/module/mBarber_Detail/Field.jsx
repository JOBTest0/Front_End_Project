import Img2 from "../../assets/img_Detail/ImageField/field2.jpg";
import Img3 from "../../assets/img_Detail/ImageField/field3.jpg";
import Img4 from "../../assets/img_Detail/ImageField/field4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Field() {
  const ImageList = [
    {
      id: 1,
      img: Img2,
    },
    {
      id: 2,
      img: Img3,
  
    },
    {
      id: 3,
      img: Img4,
  
    },
  ]
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section>
      <div className=" container  flex lg:flex-row flex-col justify-items-center items-center  gap-5 mt-5 mb-[8rem]">
      {ImageList.map((data,index) => ( 
         <div key={index} className=" lg:m-auto  lg:w-[35%]     Lg:w-full    flex flex-col   justify-between  mb-3">
          <img
            src={data.img}
            data-aos="zoom-in"
            data-aos-delay="300"
            alt=""
            className=" w-[450px] h-[300px]  object-cover rounded-xl bg-cover bg-no-repeat drop-shadow-md"
          />
        </div>
         ))}
      </div>
     
    </section>
  );
  
}
