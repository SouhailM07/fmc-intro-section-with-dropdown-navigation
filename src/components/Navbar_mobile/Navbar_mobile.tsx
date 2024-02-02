import "./navbar_mobile.css";
// assist
import close_logo from "/icon-close-menu.svg";
// context
import { ToggleContext } from "../Navbar/Navbar";
import { useContext } from "react";

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
            <li>Features</li>
            <li>Company</li>
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
