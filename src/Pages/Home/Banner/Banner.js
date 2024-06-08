import React from "react";
import sakir from "../../../Asset/Cover/sakir.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Web Developer and"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });
  return (
    <div className="hero-content flex-col-reverse lg:flex-row justify-around items-center">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Hi! I'm
          <br />
          Sakir Hossain <br />
          Faruque
        </h1>
        <p className="my-10 text-2xl font-semibold">
          {text} <br />
          {text === "Professional Web Developer and" && <>Content Writer</>}
        </p>
      </div>
      <div>
        <img src={sakir} alt="sakir" className="sm:h-48 lg:h-full" />
      </div>
    </div>
  );
};

export default Banner;
