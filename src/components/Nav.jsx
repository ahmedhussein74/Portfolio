import React, { useState } from "react";

const Nav = () => {
  const [view, setView] = useState(false);
  const [icon, setIcon] = useState("fa-solid fa-bars");
  const changeHeight = () => {
    if (window.screen.width < 1024) {
      if (view) {
        setView(false);
        setIcon("fa-solid fa-bars");
        document.querySelector("nav").style.height = "60px";
      } else {
        setView(true);
        setIcon("fa-solid fa-xmark");
        document.querySelector("nav").style.height = "360px";
      }
    }
  };
  const routes = [
    {
      url: "/",
      display: "home",
    },
    {
      url: "/#services",
      display: "services",
    },
    {
      url: "/#projects",
      display: "projects",
    },
    {
      url: "/#skills",
      display: "skills",
    },
    {
      url: "/#about",
      display: "about",
    },
  ];
  return (
    <nav className="w-full px-[5%] lg:px-[10%] h-[60px] bg-stone-100 flex flex-col lg:flex-row justify-between lg:items-center overflow-hidden duration-500 absolute shadow">
      <header className="w-full lg:w-fit text-[#292F36] flex justify-between items-center">
        <div className="h-[60px] flex items-center text-fuchsia-800 font-bold text-[20px] lg:text-[30px] select-none">
          {"{"}
          <span className=" text-black mx-1">Ahmed Hussein</span>
          {"};"}
        </div>
        <i
          onClick={changeHeight}
          className={`${icon} block lg:hidden text-[20px]`}
        ></i>
      </header>
      <aside className="w-full lg:w-fit flex flex-col lg:flex-row gap-0 lg:gap-[50px]">
        {routes.map((link, index) => (
          <a
            key={index}
            href={link.url}
            onClick={changeHeight}
            className="h-[60px] lg:h-fit capitalize text-[18px] flex items-center justify-center border-b-[3px] border-b-transparent hover:border-b-fuchsia-800"
          >
            {link.display}
          </a>
        ))}
      </aside>
    </nav>
  );
};

export default Nav;
