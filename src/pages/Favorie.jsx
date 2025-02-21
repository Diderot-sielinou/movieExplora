import MoviesCart from "../components/MoviesCart";
import {useEffect} from 'react'
export default function Favorie() {
  const favorieData = JSON.parse(localStorage.getItem("localtabFavorie")) || []
  
  useEffect(()=>{
  },[favorieData])
  return (
    <div className="text-white min-h-screen">
          <main className="container mx-auto px-4 pt-20 mb-6">
            <h2 className="text-center text-3xl text-white font-Roboto mb-2.5" >favotrie list</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favorieData?.map((movie) => (
                <MoviesCart key={movie.id} movie={movie} />
              ))}
            </div>
          </main>
        </div>
  )
}
