import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import React from "react";
import api from "../../utils/api";
import CommentContextProvider from "./CommentContext";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
export default function CommentMain({data}) {
  const [reveiw, setReview] = useState([])

  const {_id} = data
  useEffect(()=>{
    api.get(`getReview/${_id}`).then(v=>{
      setReview(v.data)
    }
    )
  }, [_id])
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <CommentContextProvider>
      <div data-aos="zoom-in" data-aos-delay="400" className="mt-[5rem] container mx-auto p-4 bg-white rounded-xl ">
        <h1 className="text-3xl font-bold mb-4 text-black">Comments</h1>
        <div className="block rounded-xl border border-gray-300 p-4 font-medium text-md">
        
          <CommentForm id={_id} />
          <CommentList reveiw={reveiw}/>
        </div>
      </div>
    </CommentContextProvider>
  );
}
