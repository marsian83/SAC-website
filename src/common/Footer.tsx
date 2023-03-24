import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-tertiary mt-14 pt-16 px-8 pb-4 flex flex-col w-[96%] rounded-tr-[5rem]">
      <div className="flex flex-row  justify-around">
        <div>
          <img
            src="/iiitmLogo.svg"
            alt="iiitmLogo"
            className="object-cover w-40"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Browse</div>
          <div className="italic">About</div>
          <div className="italic">Event</div>
          <div className="italic">Team</div>
          <div className="italic">Contact Us</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">General</div>
          <div className="italic">Home</div>
          <div className="italic">Admin</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Contact Us</div>
          <div className="">Email: contact@sac.org</div>
          <div className="">Phone No: 9876543210</div>
        </div>
        <div>
          <div className="font-bold">Socials</div>
        </div>
        <div className="text-6xl font-extrabold flex flex-start">
          SAC<span className="text-[#9090DC] ">.</span>
        </div>
      </div>
      <div className="flex flex-col items-center border-t-2 mt-8 pt-4">
        © All rights Reserved 2023 SAC
      </div>
    </div>
  );
};

export default Footer;
