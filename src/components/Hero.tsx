import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Lottie from "lottie-react";
import blobAnimation from "../animations/wv4EKk1kSI.json";

const TypewriterText: React.FC = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const words = ["Frontend Developer.", "Web Developer."];
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText((currentText) =>
          isDeleting
            ? currentText.slice(0, -1)
            : words[wordIndex].slice(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="text-xl md:text-4xl font-semibold text-black">
      I&apos;m a{" "}
      <span className="text-amber-800 relative">
        {text}
        <span className="absolute -right-2 top-0 w-0.5 h-full bg-black animate-pulse"></span>
      </span>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-5rem)] flex items-center relative z-0"
    >
      <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center px-4 py-8 gap-8">
        {/* Profile Image */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 max-w-xl flex justify-center relative"
        >
          <div className="relative w-[280px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <Lottie
                animationData={blobAnimation}
                loop={true}
                className="w-full h-full"
                style={{ opacity: 0.6 }}
              />
            </div>
            <Image
              src="/KarinGoldin.png"
              alt="Karin Goldin"
              width={600}
              height={600}
              className="w-full h-auto relative"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-2/5 text-black space-y-4 md:space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-6xl font-bold">
            Hey I&apos;m{" "}
            <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
              Karin
            </span>
          </h1>

          <TypewriterText />

          <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
            Frontend developer based in Tel Aviv, building fast, beautiful, and
            accessible web experiences for the modern web.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            {[
              { Icon: GithubIcon, href: "https://github.com/karingoldin" },
              {
                Icon: LinkedinIcon,
                href: "https://www.linkedin.com/in/karin-goldin/",
              },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-amber-800 rounded-full text-amber-800 hover:bg-amber-800 hover:text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(109,67,0,0.5)] transition-all duration-200"
              >
                <Icon size={18} className="md:w-5 md:h-5" />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <div>
            <a
              href="/cvkaringoldin.pdf"
              download="KarinGoldin_CV.pdf"
              className="inline-flex items-center px-6 md:px-8 py-2 md:py-3 bg-amber-800 text-white font-bold rounded-md hover:scale-110 hover:bg-transparent hover:text-amber-800 hover:border-2 hover:border-amber-800 hover:shadow-[0_0_40px_rgba(109,67,0,0.5)] transition-all duration-200 text-sm md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
