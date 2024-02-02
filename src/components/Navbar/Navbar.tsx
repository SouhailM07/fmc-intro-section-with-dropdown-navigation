import "./navbar.css";
// shadcn
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// assets
import nav_logo from "/logo.svg";
import select_img_1 from "/icon-todo.svg";
import select_img_2 from "/icon-calendar.svg";
import select_img_3 from "/icon-reminders.svg";
import select_img_4 from "/icon-planning.svg";

export default function Navbar() {
  return (
    <>
      <header className="max-w-[64rem] mx-auto">
        <nav className="flex justify-between text-[18px] px-[2rem] items-center py-[0.7rem]">
          <div className="flex space-x-[2rem] items-center justify-between">
            <img src={nav_logo} alt="logo" width="84" height="27" />
            <ul className=" items-center flex justify-between w-[22rem] *:cursor-pointer">
              <li>
                <Features_select />
              </li>
              <li>
                <Company_select />
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>
          <div className="text-MediumGray space-x-[2rem]">
            <button>Login</button>
            <button className="border-2 border-MediumGray px-[1.3rem] py-[0.4rem] rounded-lg">
              Register
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

let Features_select = () => {
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
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Features" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selectItems.map((e, i) => {
              return (
                <SelectItem key={i} value="apple" className="pl-2">
                  <div className="flex space-x-3 items-center">
                    <img src={e.img} alt="logo" />
                    <p>{e.select}</p>
                  </div>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

let Company_select = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Company" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">history</SelectItem>
            <SelectItem value="banana">Our Team</SelectItem>
            <SelectItem value="blueberry">Blog</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
