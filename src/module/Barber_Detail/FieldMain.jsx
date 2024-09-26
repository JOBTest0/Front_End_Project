
import Img1 from "../../assets/img_Detail/ImageField/field1.jpg";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function FieldMain() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section  className="">
      <div className="container">
      <h1 data-aos="zoom-in" data-aos-delay="100" className="font-bold lg:text-[50px] text-[50px] lg:leading-[70px] leading-[50px] text-center text-black">About</h1>
      <div data-aos="zoom-in" data-aos-delay="100"  className="grid grid-cols-1 lg:grid-cols-1 ">
            <div className="relative lg:h-[560px] h-[300px] ">
                <img src={Img1} alt="" className="rounded-xl w-full h-full object-cover shadow-xl" />
            </div>
      </div>
      </div>
    </section>
  );
}
