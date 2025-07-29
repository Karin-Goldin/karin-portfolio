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
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            Contact{" "}
            <span className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)]">
              Me
            </span>
          </h2>

          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-0">
            {/* Contact Form */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              className="w-full order-2 md:order-1"
            >
              {success && (
                <p className="text-amber-800 mb-4 font-medium text-lg text-center">
                  {success}
                </p>
              )}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col w-full max-w-[90%] md:max-w-full mx-auto gap-6"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <input
                    name="from_name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="flex-1 h-14 rounded-lg bg-white/10 border border-amber-800/20 px-4 transition-colors duration-200 focus:border-amber-800 outline-none"
                    value={name}
                    onChange={handleName}
                  />
                  <input
                    name="from_email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="flex-1 h-14 rounded-lg bg-white/10 border border-amber-800/20 px-4 transition-colors duration-200 focus:border-amber-800 outline-none"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={8}
                  className="w-full rounded-lg bg-white/10 border border-amber-800/20 p-4 transition-colors duration-200 focus:border-amber-800 outline-none resize-none"
                  value={message}
                  onChange={handleMessage}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  className={`h-14 rounded-lg bg-amber-800 text-white font-bold text-lg hover:bg-transparent hover:text-amber-800 hover:border-2 hover:border-amber-800 hover:shadow-[0_0_40px_rgba(109,67,0,0.5)] transition-all duration-200 ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Lottie Animation */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              className="w-full max-w-md mx-auto order-1 md:order-2"
            >
              <Lottie
                animationData={emailAnimation}
                loop={true}
                className="w-full h-auto max-w-[300px] md:max-w-[600px] mx-auto"
                style={{ cursor: "default" }}
                onComplete={() => {
                  setTimeout(() => {}, 1000);
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
