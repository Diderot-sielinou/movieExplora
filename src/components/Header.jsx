import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HerroBanner from "../assets/hero.jpg";

export default function Header() {
  const src="https://s3-alpha-sig.figma.com/img/5909/0ea8/b488be9c50166f91c91c010eec13fd2e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=StU9gLKeReZqAL3556HA2AB8dqzH0eLyFsuDEPuP1hIoXDNG4cWwi-xx-MvC-ORjWJ-F8UiQoxmC~lB87U9Dn~82ZWHs6qqrYVl~C5plNd7qkN5dljngvLXWmsBWjzmcSFFDEd-7mEBsRAW6H0~UR0Q4kXF2OnE9eqTZhuDLWB5Oin0Of7Izji4b6nWHuejMi4tMJ5Ks0jOu8RQaOgiVnnaC5qve3d8ROF7kWzRLGyb1ajkhLw4cy9ZXLMEhj-aY6aSr-yhAmY8hDc0R2Gg3Z1pGiTC3ajhwEk06lglNxTQoSPEdRs7X8l29lGHn-m9OeFEeO13Vm6ufTszdmtOaGQ__";
  const img = "https://s3-alpha-sig.figma.com/img/dffb/b860/559f834e0275c009608027ccae5ee787?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rkpO0pLndEZ7dHynMJtiO9nZc99PuLuk24zTVIUT0MRQscYgwziIDSruNUsKcB9UqDNlHZUJqUC04E9WCs7kZg6jC1AC03vSYMBX1lGNvQYsvHGpHPyKzBBx7JtMVI8Vl0jMzhAN5Ha3CDWP-mNKGJgraDO6IQLyQnh4l5A0ASPvLjuKjVte4awXJu9XvPTBnkihWYkEW~yqnHtTzbIThNcRpkKZfExR5AnD-h8xsa3F8DaqE3rBzP6uA2Aw7BFz~Vp7AIkV62inMC26DGLemANIx9ibBrVEsDyaBbHdZAR7OmvXszESGSKES4oAyYIAFkLStffuJaweSH9z8PolvA__"
  return (
    <div className="relative h-screen banner ">
      {/* Image d'arrière-plan */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 shadow  "></div>
      </div>

      {/* Contenu */}
      <div className=" w-full relative z-10 h-full flex items-center">
        <div className="w-[436px] h-[332px] border-2 border-amber-50 mx-auto px-4  text-white text-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[357px] h-[137.53px] mx-auto">
              <img className="object-cover " src={img} alt="ee"/>
            </div>
            <div className="w-[401px] h-[36px] mx-auto flex items-baseline space-x-1 justify-between px-5">
              <spa className="font-Roboto text-[20px] text-amber-50 rounded-full border border-amber-100 p-0.5" >CBFC:U/A.</spa>
              <spa className="font-Roboto text-[20px] text-amber-50  p-0.5" >Action.</spa>
              <spa className="font-Roboto text-[20px] text-amber-50 p-0.5" >Adventure.</spa>
              <spa className="font-Roboto text-[20px] text-amber-50 p-0.5" >2h 28m</spa>
            </div>
            <div className=""></div>
            {/* <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Découvrez le Luxe à l&aposÉtat Pur
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Voyagez dans les destinations les plus exclusives du monde avec un
              service sur mesure et des expériences uniques.
            </p> */}

            {/* <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 text-lg font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
