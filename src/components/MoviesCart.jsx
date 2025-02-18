import PropTypes from "prop-types";
import { Bookmark } from "lucide-react";
import { imgPatch } from "../constant";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function MoviesCart({ movie }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/detail/${movie.id}`, { replace: true });
  };

  return (
    <div className=" relative ">
      <div className="absolute top-1 left-1">
        <Bookmark
          style={movie.favorie ? { color: "red" } : { color: "white" }}
        />
      </div>
      <img
        onClick={handleNavigation}
        className="w-[250px] h-[171px] rounded-[12px] border-1 border-white/80 object-cover object-center "
        src={`${imgPatch}${movie.poster_path}`}
        alt="fff"
      />
    </div>
  );
}
MoviesCart.propTypes = {
  movie: PropTypes.object,
};
