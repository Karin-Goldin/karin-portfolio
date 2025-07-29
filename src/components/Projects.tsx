import React from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    name: "Rimon fund website",
    year: "May 2024",
    align: "right",
    image: "/Rimon.png",
    link: "https://karin-goldin.github.io/Rimon-project/",
    description:
      "A modern website for Rimon fund, featuring a clean design and responsive layout.",
    tech: ["React.js", "TypeScript", "SASS", "HTML"],
  },
  {
    name: "Whats in the fridge? (recipes app)",
    year: "June 2025",
    align: "left",
    image: "/Whats-in-the-fridge.png",
    link: "https://whats-in-the-fridge-eta.vercel.app/",
    description:
      "An innovative app that helps users find recipes based on ingredients they have in their fridge.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 px-4 md:px-20">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            My{" "}
            <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
              Projects
            </span>
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            I have worked on a variety of web development projects, ranging from
            responsive websites for small businesses to full-stack applications
            and complex front-end interfaces.
          </p>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.name}>
                <div className="group">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 items-center`}
                  >
                    {/* Project Image */}
                    <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
                      <div className="relative aspect-[16/10] max-w-xl">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 md:p-6 text-white w-full">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
                              View Project
                              <span className="text-xl">→</span>
                            </div>
                            <div className="text-white/80 text-sm">
                              {project.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-bold group-hover:text-amber-800 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-700">{project.description}</p>
                      <div className="md:hidden flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-amber-800/10 rounded-full text-sm text-amber-800"
                          >
                            {tech}
                          </span>
                        ))}
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
