// import Header from "./components/Headers";
import Image from "next/image";
import Typewriter from "./components/Typewriter";
import UK from "@/app/public/english.png";
import Laravel from "@/app/public/laravel.png";
import Python from "@/app/public/python.png";
import NextJS from "@/app/public/nextjs.png";
import Tailwind from "@/app/public/tailwind.png";
import Vue from "@/app/public/vue.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-purple-500 max-w-7xl scroll-smooth">
      {/* header */}
      {/* <Header /> */}
      <h1 className="text-2xl font-extrabold text-white text-center pt-8">
        Muhammad Abyan Kamal
      </h1>
      <Typewriter
        texts={["Programmer", "Web Developer"]}
        className="text-white text-2xl text-center mt-2 mb-5"
      />
      {/* about */}
      <h1 className="text-2xl font-semibold text-white text-center pt-8">
        About Me
      </h1>
      <p className="text-wrap text-white mx-auto p-5 text-justify mb-5">
        Hello, my name is Muhammad Abyan Kamal. I am a graduate from Institut
        Teknologi Garut who has a passion for technology, especially
        programming.
      </p>
      {/* skills */}
      <h1 className="text-2xl font-semibold text-white text-center pt-8">
        Skills
      </h1>
      <div className="grid grid-cols-5 gap-4 mx-auto p-5">
        <Image src={Laravel} alt="uk" />
        <Image src={Python} alt="uk" />
        <Image src={NextJS} alt="uk" />
        <Image src={Vue} alt="uk" />
        <Image src={Tailwind} alt="uk" />
      </div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Git</li>
        <li>Figma</li>
        <li>Laravel</li>
      </ul>
      {/* projects */}
      <p className="text-2xl font-semibold text-white text-center pt-8">
        Here are some of my projects
      </p>
      {/* contact */}
      <p>You can contact me at Below</p>
      {/* footer */}
    </div>
  );
}
