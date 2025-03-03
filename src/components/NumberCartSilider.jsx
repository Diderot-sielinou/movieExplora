import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
// import Swiper core and required modules
import { Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
import { imgPatch } from "../constant";
import { useNavigate } from "react-router-dom";

export default function NumberCartSilider({ treding }) {
  const navigate = useNavigate();
  const handleNavigation = (movie) => {
    navigate(`/detail/${movie.id}`, { replace: true });
  };

  return (
    <div className=" w-full  text-white pl-12 h-auto">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left mb-6"
      >
        <h2 className=" text-base font-inter md:text-[26px] font-[500] ">
          Latest & Trendings
        </h2>
      </motion.div>
      <div className="flex">
        <Swiper
          key={treding}
          // install Swiper modules
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          modules={[Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          scrollbar={{ draggable: true }}
          centeredSlides={false}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          className=" w-full flex items-center mb-10 md:pl-12 h-full"
        >
          {treding?.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <div className=" relative text-right w-auto h-[250px] flex items-center cursor-pointer  ">
                <span className="font-Roboto text-[250px] font-[1000] z-1 ">
                  {index + 1}
                </span>
                <img
                  onClick={()=> handleNavigation(movie)}
                  className="w-[136px] h-[178px] object-cover object-center border-1 border-white/70 rounded-[12px] absolute z-2 top-[46px] left-[80px] "
                  src={`${imgPatch}${movie.poster_path}`}
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
  treding: PropTypes.array,
};
