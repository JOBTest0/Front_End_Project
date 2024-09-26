import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/MainImage/barber3.png";

import AOS from "aos";
import Img2 from "../../assets/MainImage/222.jpg";
import Img3 from "../../assets/MainImage/barber2.png"
import "aos/dist/aos.css";
import api from "../../utils/api";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Sompomg Barber",

  },
  {
    id: 2,
    img: Img2,
    title: "Sompomg Barber",

  },
  {
    id: 3,
    img: Img3,
    title: "Sompomg Barber",

  },
  {
    id: 4,
    img: Img1,
    title: "Sompomg Barber",

  },
  {
    id: 5,
    img: Img2,
    title: "Sompomg Barber",

  },
  {
    id: 6,
    img: Img3,
    title: "Sompomg Barber",

  },
];

export default function About() {

  const [testdata, settestdata] = useState([])
  useEffect(() => {
    api.get('getall')
      .then(response => {
        console.log(response.data.data)
        settestdata(response.data.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
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
          {testdata.map((data) => (
            <div
              key={data._id}
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


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
