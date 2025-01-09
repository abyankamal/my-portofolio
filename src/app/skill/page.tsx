import { SkillCard } from "../components/SkillCard";
import Laravel from "@/app/public/laravel.png";
import Python from "@/app/public/python.png";
import NextJS from "@/app/public/nextjs.png";
import Tailwind from "@/app/public/tailwind.png";
import Vue from "@/app/public/vue.png";
import Bootstrap from "@/app/public/bootstrap.png";
import Adonis from "@/app/public/adonis.png";
import Page from "../page";

export default function Skill() {
  return (
    <Page title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mx-auto p-5">
        <SkillCard src={Laravel} alt="Laravel" />
        <SkillCard src={Python} alt="Python" />
        <SkillCard src={NextJS} alt="Next.js" />
        <SkillCard src={Vue} alt="Vue.js" />
        <SkillCard src={Tailwind} alt="Tailwind CSS" />
        <SkillCard src={Bootstrap} alt="Bootstrap" />
        <SkillCard src={Adonis} alt="Adonis" />
      </div>
    </Page>
  );
}
