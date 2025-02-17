import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";

export default function Detailbanner() {
  const src =
    "https://s3-alpha-sig.figma.com/img/5909/0ea8/b488be9c50166f91c91c010eec13fd2e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=StU9gLKeReZqAL3556HA2AB8dqzH0eLyFsuDEPuP1hIoXDNG4cWwi-xx-MvC-ORjWJ-F8UiQoxmC~lB87U9Dn~82ZWHs6qqrYVl~C5plNd7qkN5dljngvLXWmsBWjzmcSFFDEd-7mEBsRAW6H0~UR0Q4kXF2OnE9eqTZhuDLWB5Oin0Of7Izji4b6nWHuejMi4tMJ5Ks0jOu8RQaOgiVnnaC5qve3d8ROF7kWzRLGyb1ajkhLw4cy9ZXLMEhj-aY6aSr-yhAmY8hDc0R2Gg3Z1pGiTC3ajhwEk06lglNxTQoSPEdRs7X8l29lGHn-m9OeFEeO13Vm6ufTszdmtOaGQ__";
  return (
    <div>
      <div className="relative h-screen banner">
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
      </div>
      <div className="h-[240px] w-[80%] mx-auto md:w-[1189px]">
        <div className="w-full grid md:grid-cols-1 gap-3">
          <div className=" flex ">

          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
