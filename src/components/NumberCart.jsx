import PropTypes from 'prop-types';
import { imgPatch } from '../constant';

export default function NumberCart({movie,number}) {
  console.log(movie,number)
  return (
    <div className=" relative text-left w-[250px] h-[250px] mx-2.5 flex items-center ">
      <h1>{movie.name}</h1>
      <span className="font-Roboto text-[250px] font-[1000] z-1 ">{number}</span>
      <img
        className="w-[136px] h-[178px] object-cover object-center border-1 border-white/70 rounded-[12px] absolute z-2 top-[46px] left-[80px] "
        src={ `${imgPatch}${movie.poster_path}` }
        alt={movie.name}
      />
    </div>
  );
}

NumberCart.propTypes = {
  movie : PropTypes.object, 
  number : PropTypes.number
}
