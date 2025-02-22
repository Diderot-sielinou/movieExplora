import PropTypes from "prop-types";
// import {useContext} from 'react'
// import { DataContext } from "../context/context";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { imgPatch } from "../constant";

export default function NumberCartSilider({treding}) {
  // const  {treding} = useContext(DataContext)
  // console.log(treding)
  return (
    <div className=" w-full  text-white pl-12 h-auto">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left mb-6"
      >
        <h2 className=" text-base font-inter md:text-[26px] font-[500] ">
          Latest & Trending{" "}
        </h2>
      </motion.div>
      <div className="flex">
        <Swiper
        key={treding}
          // install Swiper modules
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4.7,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={40}
          slidesPerView={4.7}
          scrollbar={{ draggable: false }}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className=" w-full flex items-center mb-10 md:pl-12 h-full"
        >
           {treding?.map((movie,index) => (
          <SwiperSlide key={movie.id}>
            <div className=" relative text-right w-[250px] h-[250px] mx-3 flex items-center " >
                  <span className="font-Roboto text-[250px] font-[1000] z-1 ">{index+1}</span>
                  <img
                    className="w-[136px] h-[178px] object-cover object-center border-1 border-white/70 rounded-[12px] absolute z-2 top-[46px] left-[80px] "
                    src={ `${imgPatch}${movie.poster_path}` }
                    alt={movie.name}
                  />
                </div>
  
          </SwiperSlide>
        ))}
          
        </Swiper>
      </div>
    </div>
  );
}
NumberCartSilider.propTypes = {
  treding: PropTypes.array
}

