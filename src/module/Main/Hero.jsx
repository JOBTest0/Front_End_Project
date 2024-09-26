import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect  , useState} from "react";
import Slider from "react-slick";
import Image1 from "../../assets/MainImage/111.jpg";
import Image2 from "../../assets/MainImage/222.jpg";
import Image3 from "../../assets/MainImage/333.jpg";
import axios from "axios";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "REBORN BARBER",
    description:
      "รับสมัครช่างตัดผมประจำร้าน",
  },
  {
    id: 2,
    img: Image2,
    title: "THE HAIR",
    description:
      "สนใจจองคิวตัดผม ติดต่อ 0851234567 หรือ facebook THE HAIR",
  },
  {
    id: 3,
    img: Image3,
    title: "BARBER TATTOO",
    description:
      "ช่างหล่อ มาด เข้ม ตัดได้ตามสั่ง",
  },
];

export default function Hero() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section
      id="hero"
      className="w-[100%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28  sm:px-20 bg-gray-100"
    >
      <div className="container pb-8 sm:pd-0">
        <Slider {...settings}>
          {ImageList.map((data, index) => (
            <div key={index} className="">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 z-10  text-gray-900">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl
                 lg:text-7xl font-bold "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className=" ml-2 bg-orange-500/90 font-ubuntu hover:bg-white text-black px-8 py-2 rounded-full  transform hover:scale-105 transition duration-300 cursor-pointer outline-none ">
                      เพิ่มเติม
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[325px] h-[325px] sm:h-[400px] sm:w-[470px] sm:scale-105
                                  lg:scale-120  object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
