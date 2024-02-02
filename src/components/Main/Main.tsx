import "./main.css";
// shadcn
import { Button } from "../ui/button";
// assets
import img_lg from "/image-hero-desktop.webp";
import img_sm from "/image-hero-mobile.webp";
import client_1 from "/client-databiz.svg";
import client_2 from "/client-audiophile.svg";
import client_3 from "/client-meet.svg";
import client_4 from "/client-maker.svg";

export default function Main() {
  let clients: string[] = [client_1, client_2, client_3, client_4];
  return (
    <>
      <main className="lg:px-[1rem] max-w-[52rem] max-lg:flex-col-reverse mt-[1rem] mx-auto items-center lg:items-end  flex justify-between">
        <article className="flex  flex-col max-lg:max-w-[30rem]  lg:w-[50%] justify-between h-[17rem] lg:h-[22rem] ">
          <section className="flex flex-col h-[10rem] max-lg:mt-[2rem] lg:h-[15rem] max-lg:px-[0.6rem] justify-between max-lg:text-center max-lg:items-center">
            <h1 className="lg:text-[3rem] lg:w-[18rem] text-[1.6rem] font-bold lg:leading-[3.2rem]">
              Make remote work
            </h1>
            <p className="text-[0.7rem] max-w-[18rem]  text-MediumGray max-lg:my-[1rem]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <Button className="max-lg:rounded-xl font-bold w-[7rem] text-[0.8rem] text-white bg-AlmostBlack hover:bg-white hover:text-AlmostBlack border-black hover:border-2">
              Learn more
            </Button>
          </section>
          <section>
            <ul className="flex max-w-[23rem] max-lg:mx-auto justify-between items-center max-lg:px-2 ">
              {clients.map((e, i) => {
                return (
                  <li key={i}>
                    <img
                      src={e}
                      alt="logo"
                      draggable={false}
                      className="max-lg:w-[3.1rem]"
                      width="100%"
                      height="100%"
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        </article>
        <section className="h-full flex justify-end max-lg:max-w-[20rem]">
          <img
            src={img_lg}
            alt="image"
            draggable={false}
            className="max-lg:hidden "
            width={450}
            height="100%"
          />
          <img
            draggable={false}
            src={img_sm}
            alt="image"
            width="100%"
            height="100%"
            className="lg:hidden"
          />
        </section>
      </main>
    </>
  );
}
