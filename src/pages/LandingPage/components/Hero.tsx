import React from "react";

function Hero() {
  return (
    <div className="flex p-page flex-col h-screen justify-center">
      <div className="flex flex-row justify-between mobile:flex-col mobile:text-center">
      <div className="widescreen:hidden">
          <img
            src="/monitor.svg"
            alt="monitor"
            className="object-cover rounded-[10vh]"
          />
        </div>
        <div className="flex justify-center items-start flex-col basis-1/2 ">
          <div className="text-7xl font-extrabold mobile:text-4xl">
            Student Activity Council
          </div>
          <div className="py-2 text-xl font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            voluptas similique. Quae consequatur aliquam odit, perferendis
            asperiores deserunt odio reprehenderit,
          </div>
          <div className="flex-row flex gap-4 mt-4">
            <button className="border rounded-[4rem] px-14 py-4 text-xl bg-[#9090DC]">
              Button-1
            </button>
            <button className="border-2 rounded-[4rem] px-14 py-4 text-xl">
              Button-2
            </button>
          </div>
        </div>
        <div className="mobile:hidden">
          <img
            src="/monitor.svg"
            alt="monitor"
            className="object-cover rounded-[10vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
