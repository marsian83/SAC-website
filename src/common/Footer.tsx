import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-tertiary mt-14 pt-16 px-8 pb-4 flex flex-col widescreen:w-[96%] widescreen:rounded-tr-[5rem] mobile:pt-8">
      <div className="flex flex-row justify-around">
        <div className="mobile:hidden">
          <img
            src="/iiitmLogo.svg"
            alt="iiitmLogo"
            className="object-cover w-40"
          />
        </div>
        <div className="flex flex-col gap-3 mobile:hidden">
          <div className="font-bold">Browse</div>
          <div>About</div>
          <div>Event</div>
          <div>Team</div>
          <div>Contact Us</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">General</div>
          <div>Home</div>
          <div>Admin</div>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <div className="font-bold">Contact Us</div>
          <div className="">Email: contact@sac.org</div>
          <div className="">Phone No: 9876543210</div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
          <div className="font-bold">Socials</div>
          <div>Instagram</div>
          <div>LinkedIn</div>
          </div>
        </div>
        <div className="text-6xl font-extrabold flex flex-start mobile:hidden">
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
