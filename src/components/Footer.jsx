import { X } from "lucide-react";

export default function Footer() {
  return (
    <div className="text-white md:py-3.5 w-full h-[248px] mb-2 ">
      <div className="pl-12 pr-12 flex flex-col justify-between md:flex-row ">
        <div className="flex flex-col gap-1.5">
          <h2 className=" font-inter text-[18px] font-[500] mb-1.5 ">
            Company
          </h2>
          <a className="text-white/50" href="#">
            About Us
          </a>
          <a className="text-white/50" href="#">
            Careers
          </a>
        </div>
        <div className="flex flex-col gap-1.5">
          <h2 className=" font-inter text-[18px] font-[500] mb-1.5 ">
            Need Help
          </h2>
          <a className="text-white/50" href="#">
            Visit Help Center?{" "}
          </a>
          <a className="text-white/50" href="#">
            Share Feedback
          </a>
        </div>
        <div className="flex flex-col gap-1.5">
          <h2 className=" font-inter text-[18px] font-[500] mb-1.5 ">
            View Website in
          </h2>
          <button className=" bg-white/20 md:w-[169px] md:h-[44px] rounded-[40px] border-1 border-white ">
            <span>English</span>
          </button>
        </div>
        <div className="flex flex-col gap-1.5">
          <h2 className=" font-inter text-[18px] font-[500] mb-1.5 ">
            Social Media
          </h2>
          <a className="text-white/50" href="#">
            About Us
          </a>
          <a className="text-white/50" href="#">
            Careers
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className=" font-inter text-[18px] font-[500] mb-1.5 ">
            Download Our App
          </h2>
          <img
            className="w-[157px] h-[41px] rounded-[40px] object-cover object-center mb-3 "
            src="https://s3-alpha-sig.figma.com/img/cf18/6980/94a751f8807f1a09fda23ebba204049e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GR-YcDcKRcNyUGRweFHPZ8VUoj8pEktf1fbGjIsCyohyNN8oRQ2iu2S5QSU3MYev-jlh6k85OkHrWWlIf53laJQoqq9B85QNimlbobqK1NpsBpZTaw4ovrb7FQLq2vGzWV2s96RHnfuIT54BEsjRnJOsCjl297nrocSuHuLz0dvwud1fdcF9cNEKQR~rWQnb8wYca~QrkBR1WFdJzlo2hLBKiRZoONsHy6ICsh-TD8xOOumgMvqfTQaUoRnZqj0OqCtDtINl8yftBgDs8P8oWAF~TdF~ve9CwVjeJATOgxLMeLgzeY2zsQq3tgR6-hmxTfJIVUvgxiDbnuZRXa~BdA__"
            alt=""
          />
          <img
            className="w-[157px] h-[41px] rounded-[40px] object-cover object-center "
            src="https://s3-alpha-sig.figma.com/img/4964/ede4/f6653f3d9cc07e357246e29963db2fc5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=npL2YaEvsEGZ1-X27hO1Hq9RtORerIG3fapfGSfB6c2r3XzwXLqG7D4cNhr9goMq35ohRoakXk~GXZeQktI0oFtdHM5de2TKWppEwDyuttU81g-Ozx66uE3BZJ6kzjMQflKr~cZUH~2sHNyc0W6OhMs29se8KVQwFAjLpoAlB8dB-5Q9fnoEdPgna22Td3y7PLhk8~Pnhbiv0qavoqF01SYqJjGANFPi0Ir4H0JH6hf7PhQa3a6lxOqWqZaORSH4R4VRI5fop3VRpz1VmiXrv-xYUOx41yZdKiypv~iswbDYmiYYQkRHIgFcpxP9BSUNcr9Lb2ijx7mOK2fch0indg__"
            alt=""
          />
        </div>
      </div>
      <hr className="my-7" />
      <div className="pl-12 pr-12 flex flex-col justify-between md:flex-row">
        <div className="flex justify-around gap-3">
          <p>© 2023 STREAM X. All Rights Reserved.</p>
          <span>Terms Of Use </span>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className="flex items-center">
          <span className="ml-2 text-xl font-bold text-white">STREAM</span>
          <X className="h-6 w-6 text-red-600 font-bold   " />
        </div>
      </div>
    </div>
  );
}
