import "./main.css";
// shadcn
import { Button } from "../ui/button";
// assets
import img_lg from "/image-hero-desktop.png";
import client_1 from "/client-databiz.svg";
import client_2 from "/client-audiophile.svg";
import client_3 from "/client-meet.svg";
import client_4 from "/client-maker.svg";

export default function Main() {
  let clients: string[] = [client_1, client_2, client_3, client_4];
  return (
    <>
      <main className="px-[1rem] max-w-[52rem] mt-[1rem] mx-auto items-end border-2  border-green-400 grid grid-cols-2">
        <article className="flex flex-col justify-between h-[22rem]">
          <section className="flex flex-col h-[15rem] justify-between  ">
            <h1 className="text-[3rem] font-bold leading-[3.2rem]">
              Make <br /> remote work
            </h1>
            <p className="text-[0.7rem] max-w-[18rem] text-MediumGray">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <Button className="font-bold w-[7rem] text-[0.8rem] text-white bg-AlmostBlack hover:bg-white hover:text-AlmostBlack border-black hover:border-2">
              Learn more
            </Button>
          </section>
          <section>
            <ul className="flex justify-between items-center">
              {clients.map((e, i) => {
                return (
                  <li key={i}>
                    <img src={e} alt="logo" />
                  </li>
                );
              })}
            </ul>
          </section>
        </article>
        <section className="h-full flex justify-end">
          <img src={img_lg} alt="image" className="lg:w-[20rem] " />
        </section>
      </main>
    </>
  );
}
