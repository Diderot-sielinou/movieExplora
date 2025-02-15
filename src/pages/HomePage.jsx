import Header from "../components/Header";
import MovieSilider from "../components/MovieSilider";
import NumberCartSilider from "../components/NumberCartSilider";

export default function HomePage() {
  return (
    
    <div>
      <Header/>
      <NumberCartSilider/>
      <div className="mb-2.5">
        <MovieSilider/>
      </div>
      <div className="mb-2.5">
        <MovieSilider/>
      </div>
      <div className="mb-2.5">
        <MovieSilider/>
      </div>
      <div className="mb-2.5">
        <MovieSilider/>
      </div>
    </div>
    
  )
}
