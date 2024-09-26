//import testimonials from "../../assets/MainImage/testimonial.png"
import Slider from "react-slick";
//import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { testidata } from "../../export";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: "ease-in-sine"
        });
    }, [])
    return (
        
        <Slider {...settings}>
            {
                testidata.map((item, index) => (
                    <div key={index}>

                    </div>
                ))
            }
        </Slider>



    );
}
