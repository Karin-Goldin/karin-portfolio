import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Lottie from "lottie-react";
import emailAnimation from "../animations/email.json";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    emailjs
      .sendForm("service_11hxjn8", "template_xyh8dw8", form.current, {
        publicKey: "A_klM6ZfQSxKBXw4u",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully!");
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("Failed to send message. Please try again.");
          setTimeout(() => setSuccess(""), 5000);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 lg:py-32 flex items-center">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-black">
            Contact{" "}
            <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
              Me
            </span>
          </h2>

          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-0">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-white/80 border border-amber-800/20 text-black placeholder-gray-500 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-white/80 border border-amber-800/20 text-black placeholder-gray-500 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 rounded-lg bg-white/80 border border-amber-800/20 text-black placeholder-gray-500 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800 resize-none"
              />
              <button className="w-full py-4 px-8 bg-amber-800 text-white font-bold rounded-lg hover:bg-amber-900 transition-colors duration-300">
                Send Message
              </button>
            </div>
            <div className="flex justify-center">
              <Lottie
                animationData={emailAnimation}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
