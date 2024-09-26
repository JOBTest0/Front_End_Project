import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Location(){
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 400,
          easing: "ease-in-sine",
        });
      }, []);
    return(
       <section>
        <div data-aos="fade-up"  data-aos-delay="300"  className="container my-4">
          <h1 className=" border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl  shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14957.686612414765!2d99.43500659213954!3d18.31392413194955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96f95be20c0a7%3A0xdc872e08780cc698!2z4Liq4LiZ4Liy4Lih4Lif4Li44LiV4Lia4Lit4Lil4Lir4LiN4LmJ4Liy4LmA4LiX4Li14Lii4LihIEdHVA!5e0!3m2!1sth!2sth!4v1723889036750!5m2!1sth!2sth" 
              width="100%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "15px" }}

            ></iframe>
          </div>
        </div>
      </section>
    );
}
