import { Icon } from '@iconify/react';

import Proficiencies from "./proficiencies";
import ButtonLink from "./button-link";
import HeadingWithBorder from "./HeadingWithBorder";



export default function Home() {
  return (
    <>
<div className="relative flex flex-col align-center snap-y snap-mandatory ">
  <div className="items-center justify-center my-3 min-h-screen snap-always snap-start sm:pt-16">
    <div className=" flex flex-col align-items-center">
      <div className="text-6xl md:text-8xl font-bold px-6 flex flex-col md:flex-row justify-around items-center md:items-end animate__animated animate__fadeInDown">
        <div className="text-center md:text-left">
          <h1 className="text-blue ">Blue</h1>
          <h1 className="text-rose ">Rose&apos;s</h1>
          <h1 className="text-garden ">Garden</h1>
        </div>
        <img
          src="img/rose3.svg"
          className=" w-3/12 md:w-[12rem] inline text-right md:mb-4 mb-8 order-first md:order-none"
    alt=""
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
      <ol className="font-bold gap-8 flex flex-col sm:flex-row navigate justify-center text-lg sm:text-2xl mt-10">
        <li>
          <a
            className="rounded-full text-white bg-magic hover:border-magic hover:border-4 hover:text-magic hover:bg-transparent p-3 transition-all hover:ease-in-out hover:text-3xl"
            href="https://flowerbed.bluerose.garden/"
          >
            Digital Garden
          </a>
        </li>
        <li>
          <a
            className="rounded-full text-white bg-magic hover:border-magic hover:border-4 hover:text-magic hover:bg-transparent p-3 transition-all hover:ease-in-out hover:text-3xl"
            href="https://bookmarks.bluerose.garden/"
          >
            Bookmarks
          </a>
        </li>
      </ol>
    </div>
  </div>
<div
className="relative px-10 lg:px-40 top-40  leading-5 text-xl/7  snap-always snap-start pt-8 min-h-screen"
    id="about"
>
 <HeadingWithBorder color="rose" text="About" heading_size="h2"/>
  <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row">
    <div className=" text-xl lg:text-2xl">
      <p className=" pb-3">
        Hello! My name is Blue Rose. I&apos;m a <b>BIPOC fullstack developer</b> with a love for design,
          scripting, and reading books. Due to my father&apos;s job growing up, I&apos;ve
          lived everywhere from Mississippi to Alaska, Maryland to California,
          and as a result I&apos;ve experienced a wide breadth of locations.
      </p>
      <p className=" pb-3">
        I&apos;ve been programming since I was 14 years old, running linux servers
          off of old second-hand computers that my family was no longer using.
          It was only a few years later that I built my own, and not that much
          longer that I became accustomed to running server applications right
          from digitalocean droplets.
      </p>
      <p>I hope you enjoy your time around this site!</p>
    </div>
    <div className=" flex flex-row gap-2 justify-center content-center order-first lg:order-none mb-5">
        <ButtonLink icon="github" link="https://github.com/bluerosegarden"/>
        <ButtonLink icon="email" link="mailto:mail@bluerose.garden"/>
    </div>
  </div>

  </div>

  <div
    className="relative px-10 lg:px-40 top-40 leading-5 text-xl/7  snap-always snap-start pt-8 min-h-screen"
    id="portfolio"
  >
      <HeadingWithBorder color="rose" text="Portfolio" heading_size="h2"/>

<HeadingWithBorder color="blue" text="Proficiencies" heading_size="h3"/>
      <Proficiencies />

<HeadingWithBorder color="rose" text="Projects" heading_size="h3"/>
  <div className="text-blue text-xl stroke-blue flex flex-col md:flex-row justify-center items-center">

      <Icon icon="maki:construction" width="60" />

      <p className="inline font-bold text-3xl self-center text-center">
        Under Construction
      </p>

      <Icon icon="maki:construction" width="60" />

  </div>


  </div>
  <div
    className="relative px-10 top-40 leading-5 text-xl/7 lg:px-40 snap-always snap-start pt-8 min-h-screen"
    id="credits"
  >
      <HeadingWithBorder text="Credits" color="garden" heading_size="h2"/>
    <ul className="text-2xl mx-18 mx-auto w-fit list-inside list-image-even">
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
