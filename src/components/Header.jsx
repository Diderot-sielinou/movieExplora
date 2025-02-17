import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";

export default function Header() {
  const src =
    "https://s3-alpha-sig.figma.com/img/5909/0ea8/b488be9c50166f91c91c010eec13fd2e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=StU9gLKeReZqAL3556HA2AB8dqzH0eLyFsuDEPuP1hIoXDNG4cWwi-xx-MvC-ORjWJ-F8UiQoxmC~lB87U9Dn~82ZWHs6qqrYVl~C5plNd7qkN5dljngvLXWmsBWjzmcSFFDEd-7mEBsRAW6H0~UR0Q4kXF2OnE9eqTZhuDLWB5Oin0Of7Izji4b6nWHuejMi4tMJ5Ks0jOu8RQaOgiVnnaC5qve3d8ROF7kWzRLGyb1ajkhLw4cy9ZXLMEhj-aY6aSr-yhAmY8hDc0R2Gg3Z1pGiTC3ajhwEk06lglNxTQoSPEdRs7X8l29lGHn-m9OeFEeO13Vm6ufTszdmtOaGQ__";
  const img =
    "https://s3-alpha-sig.figma.com/img/dffb/b860/559f834e0275c009608027ccae5ee787?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rkpO0pLndEZ7dHynMJtiO9nZc99PuLuk24zTVIUT0MRQscYgwziIDSruNUsKcB9UqDNlHZUJqUC04E9WCs7kZg6jC1AC03vSYMBX1lGNvQYsvHGpHPyKzBBx7JtMVI8Vl0jMzhAN5Ha3CDWP-mNKGJgraDO6IQLyQnh4l5A0ASPvLjuKjVte4awXJu9XvPTBnkihWYkEW~yqnHtTzbIThNcRpkKZfExR5AnD-h8xsa3F8DaqE3rBzP6uA2Aw7BFz~Vp7AIkV62inMC26DGLemANIx9ibBrVEsDyaBbHdZAR7OmvXszESGSKES4oAyYIAFkLStffuJaweSH9z8PolvA__";
  return (
    <div className=" relative h-screen banner ">
      {/* Image d'arrière-plan */}
      <div
        className="absolute inset-0 z-0 w-full"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 shadow  "></div>
      </div>

      {/* Contenu*/}
      <div className="relative w-full  z-10 h-full flex items-center ">
        <div className="  w-[436px] h-[332px]  mx-auto px-4  text-white text-center pt-5 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[357px] h-[137.53px] mx-auto">
              <img className="object-cover " src={img} alt="ee" />
            </div>
            <div className="w-[401px] h-[36px] mx-auto flex items-baseline space-x-1 justify-between px-5 my-1.5">
              <span className="font-Roboto text-[20px] text-amber-50 rounded-full border border-amber-100 p-0.5">
                CBFC:U/A.
              </span>
              <span className="font-Roboto text-[20px] text-amber-50  p-0.5">
                Action.
              </span>
              <span className="font-Roboto text-[20px] text-amber-50 p-0.5">
                Adventure.
              </span>
              <span className="font-Roboto text-[20px] text-amber-50 p-0.5">
                2h 28m
              </span>
            </div>
            <div className="w-[436px]h-auto mx-auto text-center my-3">
              <p className="font-inter font-normal text-[16px]">
                When a spell goes wrong, dangerous foes from other worlds start
                to appear, forcing Peter to discover what it truly means to be
                Spider-Man.
              </p>
            </div>
            <div className="w-[436px] flex items-center space-x-2.5 ">
              <button className="w-[206px] h-[54px] space-x-2 flex items-center border-1 border-white/20 text-center justify-center rounded-[30px] text-black bg-blue-100">
                <Play size={16} className="text-white bg-black rounded-full " />
                <span>Watch Now</span>
              </button>
              <button className="w-[206px] h-[54px] flex items-center space-x-2 border-1 border-white/20 text-center justify-center rounded-[30px] bg-black/30">
                <ChevronRight
                  size={16}
                  className="text-black bg-white rounded-full "
                />
                <span>More Info</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
