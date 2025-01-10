import Image from "next/image"; // Correctly import the Image component
import bwajobhunt from "@/app/public/bwajobhunt.png";
import thewildoasis from "@/app/public/thewildoasis.png";

import { StaticImageData } from "next/image";

export default function ProjectList() {
  type ProjectList = {
    name: string;
    description: string;
    image: StaticImageData;
    techStack: string[];
  };

  const projectList: ProjectList[] = [
    {
      name: "JobHuntly",
      description: "This is a Job Hunting Website when you can find some jobs",
      image: bwajobhunt,
      techStack: ["React", "NextJS", "TailwindCSS", "Prisma", "PostgreSQL"],
    },
    {
      name: "The Wild Oasis",
      description: "This is a website for booking hotel with many features",
      image: thewildoasis,
      techStack: [
        "React",
        "NextJS",
        "TailwindCSS",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "NextAuth",
      ],
    },
  ];

  return (
    <div className="grid grid-flow-row gap-4 mx-auto p-5 mb-10">
      {projectList.map((project, index) => (
        <div
          key={index} // Add a unique key for each element in the list
          className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow"
        >
          <div className="px-4 py-5 sm:px-6">
            {/* Header Content */}
            <p className="text-2xl font-medium text-center">{project.name}</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            {/* Image Content */}
            <Image
              src={project.image}
              alt={project.name} // Use the project name as alt text// Specify dimensions explicitly
              className="mx-auto"
            />
          </div>
          <div className="px-4 py-5 sm:p-6">
            {/* Image Content */}
            <p className="text-md font-normal text-center">
              {project.description}
            </p>
          </div>
          <div className="px-4 py-4 sm:px-6">
            {/* Footer Content */}
            <p>Tech Stack: {project.techStack.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
