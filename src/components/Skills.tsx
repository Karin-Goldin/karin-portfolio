import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { IconType } from "react-icons";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaNode,
  FaGithub,
  FaNpm,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiAntdesign,
} from "react-icons/si";
import {
  BsLightbulb,
  BsChatDots,
  BsPeople,
  BsClock,
  BsArrowsMove,
} from "react-icons/bs";
import { VscCode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: IconType;
  proficiency?: number; // Made optional since it's not used in the current implementation
}

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-16 h-16 rounded-lg bg-white/50 flex items-center justify-center relative overflow-hidden"
        whileHover={{
          boxShadow: "0 0 20px rgba(146, 64, 14, 0.3)",
        }}
      >
        <Icon className="w-8 h-8 text-amber-800 relative z-10" />
        <motion.div
          className="absolute inset-0 bg-amber-800/10"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
    </motion.div>
  );
};

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "VS Code", icon: VscCode },
      { name: "Cursor", icon: FaCode },
      { name: "GitHub", icon: FaGithub },
      { name: "NPM", icon: FaNpm },
      { name: "Ant Design", icon: SiAntdesign },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: BsLightbulb },
      { name: "Communication", icon: BsChatDots },
      { name: "Team Work", icon: BsPeople },
      { name: "Time Management", icon: BsClock },
      { name: "Adaptability", icon: BsArrowsMove },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center"
        >
          My{" "}
          <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
            Skills
          </span>
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-gray-700 mb-16 max-w-3xl mx-auto"
        >
          I not only work with these technologies but also excel at using them
          according to best practices to deliver high-quality results.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={fadeIn("up", 0.3 + categoryIndex * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-6 p-6 bg-white/50 rounded-lg">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
