import React from "react";
import sakir from "../../../Asset/about/sakir.png";

const About = () => {
  return (
    <div id="about_me_id">
      <div className="my-10 text-center">
        <h3 className="text-xl font-bold text-cyan-800 uppercase text-center">
          About Me
        </h3>
      </div>
      <div className="hero min- bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={sakir}
            alt="sakir"
            className=" w-full lg:w-1/3 rounded-lg shadow-2xl"
          />
          <div className="w-full lg:w-1/2 mx-0 lg:mx-5">
            <h1 className="text-2xl font-bold text-center lg:text-left text-slate-400">
              Person love to create
            </h1>
            <h1 className="text-3xl font-bold text-center lg:text-left">
              Modern Technology
            </h1>
            <p className="pt-6 pb-3 text-center lg:text-left">
              I like to call myself “a professional computer science student &
              Web developer”. As a computer science student I have good
              knowledge in various programming language such as C, Java, Python,
              Data structure etc. But my core skill in web developing.
            </p>
            <p className="pb-6 text-center lg:text-left">
              I made lot of creative activities. My first priority is to
              understand anything from heart. So that I can use that thing in
              future practically. I love to create new things or technology by
              properly using my skill. As a CSE student I created some
              technologies by the help programming language.
            </p>
            <p className="pb-6 text-center lg:text-left">
              I have also done some UI/UX activities. Take a look my Behance
              album
            </p>
            <a href="https://www.behance.net/sakirhossain104" target="_blank">
              <button className="btn bg-blue-600 hover:bg-blue-800">
                Visit Behance
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
