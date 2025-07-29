import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Image from "next/image";
import Lottie from "lottie-react";
import dotAnimation from "../animations/dotBackground.json";
import AnimateOnScroll from "../components/AnimateOnScroll";

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-20">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            About{" "}
            <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
              Me
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full md:w-1/2"
            >
              <p className="text-gray-700 text-lg leading-relaxed space-y-4">
                I&apos;m a passionate Frontend Developer with a strong
                foundation in web development and a keen eye for creating
                engaging user experiences. My journey in tech began with my
                studies at Sela College, where I honed my skills in modern web
                technologies.
                <br />
                <br />
                I&apos;m particularly drawn to frontend development because it
                allows me to combine my creativity with technical
                problem-solving. I&apos;m constantly learning and staying
                up-to-date with the latest web technologies and best practices.
                <br />
                <br />
                When I&apos;m not coding, you can find me exploring new web
                design trends, experimenting with new technologies, or
                collaborating with other developers. I believe in &quot;learning
                by doing&quot; and always strive to challenge myself with new
                projects.
                <br />
                <br />
                I&apos;m excited about the opportunity to bring my skills and
                enthusiasm to new projects and continue growing as a developer.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-full md:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/karin-and-sandy.png"
                alt="Karin and Sandy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default About;
