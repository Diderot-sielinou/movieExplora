import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion"; 
import { useNavigate,Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue , setSearchValue] = useState("")
  let navigate = useNavigate();

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const onChange =(value)=>{
    setSearchValue(value)
  }

  const search = (event)=>{
    event.preventDefault();

    navigate(`/search/${searchValue}`)

  }

  return (
    <nav
      className={`fixed  w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="px-5 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center space-x-0.5">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="ml-2 text-xl font-bold text-white">STREAM</span>
              <X className="w-6 h-6 font-bold text-red-600 " />
            </motion.div>

            {/* Navigation desktop */}
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-8">
                {[ {name:"Home",path:"/"},{name:"Movies",path:"#"},{name:"Series",path:"#"},{name:"favorie",path:"/favorie"},{name:"Trending",path:"#"}].map(
                  (item) => (
                    <motion.div
                      initial={{ opacity: 0, y: -70 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      key={item}
                      className="text-lg text-white transition-colors duration-200 font-Roboto hover:text-red-400 not-only:"
                    >
                      <Link to={item.path} >{item.name}</Link>
                    </motion.div>
                  )
                )}
                
              </div>
            </div>
            {/* search visible sur mobile */}
            <div className="mr-6 md:hidden" >
              <div className="flex items-baseline ml-10 space-x-8 ">
                <form className="relative flex items-center">
                  <input
                    value={searchValue}
                    onChange={(e) => onChange(e.target.value)}
                    required
                    placeholder="search movie  tv"
                    className="relative h-6 py-2 text-sm text-white border-2 rounded-full w-4xs indent-4 border-amber-50 focus:outline-0 focus:border-red-400"
                    type="text"
                  />
                  <button onClick={(e)=>search(e)} type="submit" className="absolute cursor-pointer right-4">
                    <Search size={16} className="text-white hover:bg-black" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Navigation input */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-8 ">
              <form className="relative flex items-center">
                <input
                  required
                  value={searchValue}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="search movie  tv"
                  className="relative border-2 rounded-full t-ext-white h te7xt-sm p-y-2 h- w-4xs indent-4 border-amber-50 focus:outline-0 focus:border-red-400 placeholder:text-gray-500 placeholder:italic"
                  type="text"
                  key="22"
                />
                <button disabled={!searchValue} onClick={(e)=>search(e)} className={`absolute right-4 cursor-pointer disabled hover:bg-red-500 `}>
                  <Search size={16} className="text-white hover:bg-red-600" />
                </button>
              </form>
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black shadow-lg sm:px-3">
            { {name:"Home",path:"/"},{name:"Movies",path:"#"},{name:"Series",path:"#"},{name:"/favorie",path:"favorie"},{name:"Trending",path:"#"}.map(
              (item,index) => (
               
                <Link key={index}   className="block px-3 py-2 text-white hover:text-red-500" to={item.path}>{item.name}
                </Link>
              )
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
