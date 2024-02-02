import "./navbar_mobile.css";
// assist
import close_logo from "/icon-close-menu.svg";
import select_img_1 from "/icon-todo.svg";
import select_img_2 from "/icon-calendar.svg";
import select_img_3 from "/icon-reminders.svg";
import select_img_4 from "/icon-planning.svg";
import arrowLogo from "/icon-arrow-up.svg";
// context
import { ToggleContext } from "../Navbar/Navbar";
import { useContext, useState } from "react";

export default function Navbar_mobile() {
  let { setToggleMenu }: any = useContext(ToggleContext);
  return (
    <>
      <div className="bg-[#000000bf] h-full text-[0.7rem] flex justify-end  top-0 fixed w-full text-MediumGray">
        <div className="bg-AlmostWhite h-full w-[11rem]">
          <div className="flex justify-end p-3">
            <img
              src={close_logo}
              alt="close menubar logo"
              role="button"
              onClick={() => setToggleMenu(false)}
            />
          </div>
          {/*  */}
          <ul className="space-y-[1rem] pl-[1rem] my-[1rem]">
            <Features_dropdown />
            <Company_dropdown />
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className=" flex flex-col items-center">
            <button className="py-[0.5rem]">Login</button>
            <button className="border-2 border-MediumGray w-[90%] tex-center py-[0.4rem] rounded-xl">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

let Features_dropdown = () => {
  interface selectItem_type {
    img: string;
    select: string;
  }
  let selectItems: selectItem_type[] = [
    { img: select_img_1, select: "Todo List" },
    { img: select_img_2, select: "Calendar" },
    { img: select_img_3, select: "Reminders" },
    { img: select_img_4, select: "Planning" },
  ];
  let [toggleDD, setToggleDD] = useState<boolean>(false);
  return (
    <>
      <li>
        <button
          className="flex space-x-[0.8rem] items-center"
          onClick={() => setToggleDD(!toggleDD)}
        >
          <span>Features</span>
          <img
            src={arrowLogo}
            alt="logo"
            className={`${toggleDD ? "rotate-180" : ""}`}
          />
        </button>
        {toggleDD && (
          <ul className="space-y-[0.7rem] my-[1rem] pl-[1rem]">
            {selectItems.map((e, i) => {
              return (
                <li key={i} className="flex space-x-[0.7rem] items-center">
                  <img src={e.img} alt="" />
                  <p>{e.select}</p>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
};

let Company_dropdown = () => {
  let selectItems: string[] = ["History", "Our Team", "Blog"];
  let [toggleDD, setToggleDD] = useState<boolean>(false);
  return (
    <li>
      <button
        className="flex space-x-[0.8rem] items-center"
        onClick={() => setToggleDD(!toggleDD)}
      >
        <span>Company</span>
        <img
          src={arrowLogo}
          alt="logo"
          className={`${toggleDD ? "rotate-180" : ""}`}
        />
      </button>
      {toggleDD && (
        <ul className="space-y-[0.7rem] my-[1rem] pl-[1rem]">
          {selectItems.map((e, i) => {
            return (
              <li key={i} className="flex space-x-[0.7rem] items-center">
                <p>{e}</p>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
