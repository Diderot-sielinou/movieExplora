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
import MoviesCart from "./MoviesCart";
import PropTypes from "prop-types";

export default function MovieSilider({ movies ,children }) {
 
  return (
    <div className=" w-full  text-white pl-12 h-auto">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left mb-6"
      >
        <h2 className=" text-base font-inter md:text-[26px] font-[500] ">
          {children}
        </h2>
      </motion.div>
      <div className="flex">
        <Swiper
          // install Swiper modules
          breakpoints={{
            0: {
              slidesPerView: 2,
              
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={15}
          slidesPerView={7}
          scrollbar={{ draggable: true }}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className=" w-full flex items-center mb-10 md:pl-12 h-full"
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MoviesCart movie={movie} />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
MovieSilider.propTypes = {
  movies: PropTypes.array,
  children : PropTypes.node
};
