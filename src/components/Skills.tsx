import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { IconType } from "react-icons";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BsCursorFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiNpmjsFill } from "react-icons/ri";
import { BsLightbulb } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbArrowsRandom } from "react-icons/tb";
import { SiAntdesign } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const SkillIcon = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 group"
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
    >
      <motion.div
        className="w-16 h-16 flex items-center justify-center bg-white/50 rounded-xl relative overflow-hidden"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Icon className="w-8 h-8 text-amber-800 relative z-10" />
        <motion.div
          className="absolute inset-0 bg-amber-800/10"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </motion.div>
  );
};

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", icon: RiReactjsFill },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "HTML5", icon: FaHtml5 },
      { name: "SCSS", icon: BsFiletypeScss },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "VS Code", icon: VscVscode },
      { name: "Cursor", icon: BsCursorFill },
      { name: "GitHub", icon: FaGithub },
      { name: "npm", icon: RiNpmjsFill },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "mongoDB", icon: SiMongodb },
      { name: "Node.js", icon: FaNode },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: BsLightbulb },
      { name: "Communication", icon: BiMessageDetail },
      { name: "Team Work", icon: HiUserGroup },
      { name: "Time Management", icon: AiOutlineClockCircle },
      { name: "Adaptability", icon: TbArrowsRandom },
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
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-black"
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
                  <SkillIcon
                    key={skill.name}
                    Icon={skill.icon}
                    name={skill.name}
                  />
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
