import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MoviesCart from "./MoviesCart";

export default function MovieSilider() {
  return (
    <div className=" w-full  text-white pl-12 h-auto">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left mb-6"
      >
        <h2 className=" text-base font-inter md:text-[26px] font-[500] ">
          Top Searches
        </h2>
      </motion.div>
      <div className="flex">
        <Swiper
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
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4.7}
          scrollbar={{ draggable: true }}
          centeredSlides={false}
          className=" w-full flex items-center mb-10 md:pl-12 h-full"
        >
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
          <SwiperSlide><MoviesCart /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
