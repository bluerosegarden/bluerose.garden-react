import Image from "next/image";

import Proficiencies from "./proficiencies";
import ButtonLink from "./button-link";

let proficiencies = [
  "html",
  "css",
  "linux",
  "rust",
  "python",
  "git",
  "javascript",
  "webserver",
  "c++",
 // "",
];


export default function Home() {
  return (
    <>
<div className="relative flex flex-col align-center snap-y snap-mandatory ">
  <div className="items-center justify-center my-3 min-h-screen snap-always snap-start sm:pt-16">
    <div className=" flex flex-col align-items-center">
      <div className="text-6xl md:text-8xl font-bold px-6 flex flex-col md:flex-row justify-around items-center md:items-end animate__animated animate__fadeInDown">
        <div className="text-center md:text-left">
          <h1 className="text-blue ">Blue</h1>
          <h1 className="text-rose ">Rose's</h1>
          <h1 className="text-garden ">Garden</h1>
        </div>
        <img
          src="img/rose3.svg"
          className=" w-3/12 md:w-[12rem] inline text-right md:mb-4 mb-8 order-first md:order-none"
        />
      </div>
      <div className="h-2 bg-magic my-1 rounded w-5/6 lg:w-6/6 self-center" />
    </div>
    <div className="mt-8 ">
      <ol className="font-bold gap-8 flex flex-col sm:flex-row navigate justify-center text-lg sm:text-2xl">
        <li>
          <a
            className="rounded-full text-white bg-blue hover:border-blue hover:border-4 hover:text-blue hover:bg-transparent p-3 transition-all hover:ease-in-out hover:text-3xl"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="rounded-full bg-rose text-white  hover:text-rose hover:border-rose hover:border-4 hover:bg-transparent p-3 transition-all hover:ease-in-out hover:text-3xl"
            href="#portfolio"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="rounded-full bg-garden text-white hover:border-garden hover:text-garden hover:border-4 hover:bg-transparent p-3 transition-all hover:ease-in-out hover:text-3xl"
            href="#credits"
          >
            Credits
          </a>
        </li>
      </ol>
      <ol className="font-bold gap-8 flex flex-col sm:flex-row navigate justify-center text-sm sm:text-md mt-10">
        <li>
          <a
            className="rounded-full text-white bg-magic hover:border-magic hover:border-4 hover:text-magic hover:bg-transparent p-3 transition-all hover:ease-in-out hover:text-lg"
            href="https://flowerbed.bluerose.garden/"
          >
            Digital Garden
          </a>
        </li>
        <li>
          <a
            className="rounded-full text-white bg-magic hover:border-magic hover:border-4 hover:text-magic hover:bg-transparent p-3 transition-all hover:ease-in-out hover:text-lg"
            href="https://bookmarks.bluerose.garden/"
          >
            Bookmarks
          </a>
        </li>
      </ol>
    </div>
  </div>
  <div
    className="top-40 px-10 lg:px-40 leading-5 text-xl/7 h-fit snap-always snap-start pt-8 min-h-screen"
    id="about"
  >
    <div className="flex sm:flex-row flex-col justify-center align-items-center mb-10">
      <div className="h-2 w-3/6  bg-blue rounded justify-self-center self-center" />
      <h2 className="text-center font-bold my-5 lg:my-0 text-4xl text-blue justify-self-center mx-4 ">
        About
      </h2>
      <div className="h-2 bg-blue rounded w-3/6  justify-self-center self-center" />
    </div>
    <div className="flex flex-col lg:flex-row">
      <div className="w-6/6 lg:w-4/6 text-xl">
        <p>
          Hello! I'm a <b>BIPOC fullstack developer</b> with a love for design,
          scripting, and reading books. Due to my father's job growing up, I've
          lived everywhere from Mississippi to Alaska, Maryland to California,
          and as a result I've experienced a wide breadth of locations.
        </p>
        <p>
          I've been programming since I was 14 years old, running linux servers
          off of old second-hand computers that my family was no longer using.
          It was only a few years later that I built my own, and not that much
          longer that I became accustomed to running server applications right
          from digitalocean droplets.
        </p>
        <p>I hope you enjoy your time around this site!</p>
      </div>
      <div className="w-6/6 lg:w-2/6 flex flex-row gap-2 justify-center order-first lg:order-none mb-5">
      <ButtonLink icon="github" link="https://github.com/bluerosegarden"/>
      <ButtonLink icon="email" link="mailto:contact@bluerose.garden"/>
      </div>
    </div>
    <div className=" mb-10 flex sm:flex-row flex-col justify-center align-items-center">
      <div className="h-1 w-3/6 bg-blue rounded justify-self-center self-center" />
      <h2 className="text-center font-bold my-5 lg:my-0 text-4xl text-blue justify-self-center mx-4 ">
        Proficiencies
      </h2>
      <div className="h-1 bg-blue rounded w-3/6  justify-self-center self-center" />
    </div>

      <Proficiencies />
  </div>
  <div
    className="relative px-10 lg:px-40 top-40 px-40 leading-5 text-xl/7  snap-always snap-start pt-8 min-h-screen"
    id="portfolio"
  >
    <div className="flex sm:flex-row flex-col justify-center align-items-center mb-10 ">
      <div className="h-2 w-3/6  bg-rose rounded justify-self-center self-center" />
      <h2 className="text-center font-bold my-5 lg:my-0 text-4xl text-rose justify-self-center mx-4 ">
        Portfolio
      </h2>
      <div className="h-2 bg-rose rounded w-3/6 justify-self-center self-center" />
    </div>
    <div className="text-blue text-xl stroke-blue flex flex-col md:flex-row justify-center align-items-center">
      <svg
        className="inline self-center"
        xmlns="http://www.w3.org/2000/svg"
        width={96}
        height={96}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <rect width={20} height={8} x={2} y={6} rx={1} />
          <path d="M17 14v7M7 14v7M17 3v3M7 3v3m3 8L2.3 6.3M14 6l7.7 7.7M8 6l8 8" />
        </g>
      </svg>
      <p className="inline font-bold text-3xl self-center text-center">
        Under Construction
      </p>
      <svg
        className="inline self-center"
        xmlns="http://www.w3.org/2000/svg"
        width={96}
        height={96}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <rect width={20} height={8} x={2} y={6} rx={1} />
          <path d="M17 14v7M7 14v7M17 3v3M7 3v3m3 8L2.3 6.3M14 6l7.7 7.7M8 6l8 8" />
        </g>
      </svg>
    </div>
  </div>
  <div
    className="relative px-10 top-40 px-40 leading-5 text-xl/7 lg:px-40 snap-always snap-start pt-8 min-h-screen"
    id="credits"
  >
    <div className="flex sm:flex-row flex-col justify-center align-items-center mb-10">
      <div className="h-2 w-3/6 bg-garden rounded justify-self-center self-center" />
      <h2 className="text-center font-bold my-5 lg:my-0 text-4xl text-garden justify-self-center mx-4 ">
        Credits
      </h2>
      <div className="h-2 bg-garden rounded w-3/6  justify-self-center self-center" />
    </div>
    <ul className="text-2xl mx-18 sm:mx-28 mb-40">
      <li>
        <a className="font-bold" href="https://tailwindcss.com/">
          Tailwind
        </a>
        <ul>
          <li> A handy CSS framework</li>
        </ul>
      </li>
      <li>
        <a className="font-bold" href="https://iconify.design/">
          Iconify
        </a>
        <ul>
          <li>A fantastic SVG icon repository.</li>
        </ul>
      </li>
      <li>
        <a className="font-bold" href="https://www.svgrepo.com/">
          SVGrepo
        </a>
        <ul>
          <li> Another fantastic SVG repository.</li>
        </ul>
      </li>
      <li>
        <a className="font-bold" href="https://animate.style/">
          animate.css
        </a>
        <ul>
          <li>A great little CSS animation library</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

   </>
  );
}
