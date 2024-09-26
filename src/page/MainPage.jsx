import AOS from "aos";
import { useEffect, } from "react";
import "aos/dist/aos.css";
import About from "../module/Main/About";
import Clients from "../module/Main/Clients";
//import Header from "../module/Main/Header";
import Hero from "../module/Main/Hero";



export default function MainPage() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      
      {/* <Header /> */}
      <Hero />
      <About />
    </>
  );
}