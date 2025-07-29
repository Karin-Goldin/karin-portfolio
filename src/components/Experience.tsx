import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const experiences = [
  {
    id: "now",
    badge: "NOW",
    role: "Front Developer",
    company: "Cybereason",
    period: "2023-NOW",
    responsibilities: [
      "Implementing reusable components.",
      "Developed user-friendly web interfaces.",
      "Collaborated with designers to implement UI/UX best practices.",
      "Optimized applications for maximum speed and scalability.",
    ],
  },
  {
    id: "2023",
    badge: "2023",
    role: "NOC Engineer",
    company: "Cybereason",
    period: "2021-2023",
    responsibilities: [
      "Monitored and managed network operations.",
      "Troubleshot and resolved network issues.",
      "Collaborated with cross-functional teams.",
      "Maintained network security protocols.",
    ],
  },
  {
    id: "2021",
    badge: "2021",
    role: "The Academic College of Tel Aviv-Yaffo - BSc in Information Systems",
    period: "2019-2022",
    responsibilities: [
      "Gained strong foundation in databases, networking, and software engineering.",
      "Completed hands-on projects in web development and system analysis.",
      "Applied analytical thinking to solve real-world tech challenges.",
      "Worked with tools such as SQL, Python, and web technologies.",
      "Collaborated on group assignments simulating real-life IT environments.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 px-4 md:px-20">
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
            Experience
          </span>
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-amber-800/30" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-amber-800 rounded-full border-4 border-orange-100 z-10" />

                {/* Badge */}
                <div className="absolute left-8 md:left-[52%] top-[-2px] bg-amber-800 text-white text-sm px-3 py-1 rounded-full">
                  {exp.badge}
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-[52%]" : "md:ml-[52%]"
                  }`}
                >
                  <div className="bg-white/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-amber-800">
                      {exp.role}
                    </h3>
                    {exp.company && (
                      <div className="text-lg font-semibold mb-2">
                        {exp.company}
                      </div>
                    )}
                    <div className="text-gray-600 mb-4">{exp.period}</div>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: false }}
                        >
                          <span className="w-1.5 h-1.5 mt-2 bg-amber-800 rounded-full flex-shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
