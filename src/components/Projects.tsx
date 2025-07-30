import React from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { GithubIcon } from "lucide-react";

const projects = [
  {
    name: "Rimon fund website",
    year: "May 2024",
    image: "/Rimon.png",
    link: "https://karin-goldin.github.io/Rimon-project/",
    github: "https://github.com/Karin-Goldin/Rimon-project",
    description:
      "A modern website for Rimon fund, featuring a clean design and responsive layout.",
    tech: ["React.js", "TypeScript", "SASS", "HTML"],
  },
  {
    name: "Whats in your fridge? (recipes app)",
    year: "June 2025",
    image: "/Whats-in-the-fridge.png",
    link: "https://whats-in-the-fridge-eta.vercel.app/",
    github: "https://github.com/Karin-Goldin/whats-in-the-fridge",
    description:
      "An innovative app that helps users find recipes based on ingredients they have in their fridge.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 px-2 sm:px-4 md:px-20">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            My{" "}
            <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
              Projects
            </span>
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            I have worked on a variety of web development projects, ranging from
            responsive websites for small businesses to full-stack applications
            and complex front-end interfaces.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <AnimateOnScroll key={project.name}>
                <div className="group bg-white/50 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    {/* Project Image */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-2 sm:p-4 text-white w-full">
                          <div className="flex items-center justify-between">
                            <div className="hidden sm:inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                              View Project
                              <span className="text-lg">→</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-3 sm:p-6 space-y-2 sm:space-y-4 flex-1 flex flex-col">
                      <div className="text-amber-800 font-medium text-xs sm:text-sm">
                        {project.year}
                      </div>
                      <h3 className="text-sm sm:text-xl font-bold group-hover:text-amber-800 transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-base flex-1 line-clamp-2 sm:line-clamp-none hidden sm:block">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="px-1.5 sm:px-3 py-0.5 sm:py-1 bg-amber-800/10 rounded-full text-[10px] sm:text-sm text-amber-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {/* GitHub Link */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center border-2 border-amber-800 rounded-full text-amber-800 hover:bg-amber-800 hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(109,67,0,0.5)] transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        >
                          <GithubIcon size={14} className="sm:w-4 sm:h-4" />
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Projects;
