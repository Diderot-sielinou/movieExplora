import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <X className="h-6 w-6 text-red-600 font-bold  " />
            </motion.div>

            {/* Navigation desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Movies", "Series", " Trending", "Categories"].map(
                  (item) => (
                    <motion.a
                      initial={{ opacity: 0, y: -70 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-white font-Roboto hover:text-red-400 transition-colors duration-200 text-lg not-only:"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </div>
            {/* search visible sur mobile */}
            <div className="md:hidden mr-6" >
              <div className="ml-10 flex items-baseline space-x-8 ">
                <form className="flex items-center relative">
                  <input
                    placeholder="search movie  tv"
                    className=" w-4xs h-6 py-2 relative text-sm text-white indent-4 rounded-full border-2 border-amber-50 focus:outline-0 focus:border-red-400 "
                    type="text"
                  />
                  <button className="absolute right-4 cursor-pointer">
                    <Search size={16} className=" text-white  hover:bg-black" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Navigation input */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 ">
              <form className="flex items-center relative">
                <input
                  placeholder="search movie  tv"
                  className=" w-4xs h-6 py-2 relative text-sm text-white indent-4 rounded-full border-2 border-amber-50 focus:outline-0 focus:border-red-400 "
                  type="text"
                />
                <button className="absolute right-4 cursor-pointer">
                  <Search size={16} className=" text-white  hover:bg-black" />
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {["Home", "Movies", "Series", " Trending", "Categories"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white hover:text-red-500"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
