import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Image from "next/image";
import Lottie from "lottie-react";
import dotAnimation from "../animations/dotBackground.json";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-16 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 w-[150%] h-[150%] -translate-x-[25%] -translate-y-[25%]">
        <Lottie
          animationData={dotAnimation}
          loop={true}
          className="w-full h-full"
          style={{ opacity: 0.8 }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About{" "}
          <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
            Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              Hello there! I&apos;m a front-end developer, specializing in
              ReactJS. <br />I have a deep passion for creating interactive and
              dynamic user interfaces that provide seamless user experiences.
              <br /> My love for coding began during my studies and since then,
              I&apos;ve been committed to continuously learning and growing my
              skill set. I&apos;m constantly on the lookout for new challenges
              and opportunities to apply my expertise in developing web
              applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              One of the things that made me fall in love with front-end
              development is the combination of immediacy and creativity. <br />{" "}
              I love how my ideas come to life on the screen, step by step, with
              every line of code shaping something visual and meaningful. <br />{" "}
              The real-time feedback, the elegance of minimalism, and that
              satisfying &quot;wow&quot; effect when everything comes
              together—these are the moments that remind me exactly why I chose
              to become a front-end developer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I&apos;m not coding, you can find me training in
              calisthenics, spending quality time with my family and friends, or
              hanging out with Sandy, my dog and favorite sidekick.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/karin&sandy.png"
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
    </section>
  );
};

export default About;
