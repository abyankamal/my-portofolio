import Image, { StaticImageData } from "next/image";

interface SkillCardProps {
  src: StaticImageData;
  alt: string;
}
export const SkillCard: React.FC<SkillCardProps> = ({ src, alt }) => {
  return (
    <div className="bg-white-800 rounded-lg shadow-md p-4">
      {" "}
      {/* Card styling */}
      <Image src={src} alt={alt} className="w-8 h-8 mx-auto" />{" "}
      {/* Adjust size as needed */}
      <p className="text-center text-sm text-black mt-2">{alt}</p>{" "}
      {/* Skill name */}
    </div>
  );
};
