import { motion } from "framer-motion";
import { Play, Bookmark, Heart, Download, Share } from "lucide-react";
import PropTypes from "prop-types"; // ES6
import { imgPatch } from "../constant";

export default function Detailbanner({ movie,addFavorie }) {
  return (
    <div>
      <div className="relative h-screen banner">
        <div
          className="absolute inset-0 z-0 w-full"
          style={{
            backgroundImage: `url(${imgPatch}${movie.backdrop_path?movie.backdrop_path:movie.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 shadow  "></div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-[300px] w-[80%] mx-auto md:w-full"
      >
        <div className="pl-8 w-full justify-start grid grid-cols-1 gap-3.5 text-left ">
          <h2 className="font-Roboto text-[20px] text-amber-50">
            {movie.original_name}
          </h2>
          <div className="flex gap-2.5 justify-between md:w-[401px] h-[37px] overflow-hidden mb-3.5 ">
            <span className="font-Roboto w-[107px] text-[20px] text-amber-50 rounded-full border border-amber-100 p-0.5">
              CBFC:{movie.languages[0]}.
            </span>
            <span className="font-Roboto text-[20px] text-amber-50  p-0.5">
              {movie.genres[0]?.name}.
            </span>
            <span className="font-Roboto text-[20px] text-amber-50 p-0.5">
            {movie.genres[1]?.name}.
            </span>
            <span className="font-Roboto text-[20px] text-amber-50 p-0.5">
              {movie.first_air_date}
            </span>
          </div>
          <div className="  flex justify-between items-center ">
            <div className="md:w-[433px] flex justify-between gap-2.5 items-center">
              <button className="w-[190px] h-[50px] space-x-2 flex items-center border-1 border-white/20 text-center justify-center rounded-[30px] text-black bg-blue-100 cursor-pointer">
                <Play size={16} className="text-white bg-black rounded-full " />
                <span>Watch Now</span>
              </button>
              <button onClick={()=>addFavorie(movie)}  className="w-[206px] h-[50px] flex items-center space-x-2 border-1 border-white/20 text-center justify-center rounded-[30px] bg-white/20 hover:border-red-600 cursor-pointer ">
                <Bookmark size={16} className=" text-white " />
                <span className="text-white">Add Watchlist</span>
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
              className="flex items-center gap-2 text-white w-[212px] justify-center"
            >
              <div className=" w-[54px]  border-1 border-white p-2 bg-white/20  flex justify-center items-center rounded-full ">
                <Heart />
              </div>
              <div className="w-[54px] border-1 border-white p-2 bg-white/20  flex justify-center items-center rounded-full">
                <Download />
              </div>
              <div className="w-[54px] border-1 border-white p-2 bg-white/20 flex justify-center items-center rounded-full">
                <Share />
              </div>
            </motion.div>
          </div>
          <div className="text-left mt-8 ">
            <p className="font-inter font-normal text-[16px] text-white">
              {movie.overview?movie.overview:"no description"}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
Detailbanner.propTypes = {
  movie: PropTypes.object,
  addFavorie : PropTypes.func,
};
