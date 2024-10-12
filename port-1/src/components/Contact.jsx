/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);

  // Variants for animating input focus
  const inputVariants = {
    focused: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 128, 255, 1)" },
    blurred: { scale: 1, boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="flex items-center justify-center p-12 mt-5" id="contact">
      <div className="mx-auto w-full max-w-[550px] shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] p-5">
        <form action="https://getform.io/f/ajjeynla" method="POST">
          <h1 className="font-bold text-center text-2xl sm:text-4xl md:text-5xl mb-5">
            Contact <span>Me</span>
          </h1>

          {/* Full Name Input */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block  font-medium text-[#f3f3f3] text-xl"
            >
              Full Name
            </label>
            <motion.input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
              variants={inputVariants}
              initial="blurred"
              animate={focusedField === "name" ? "focused" : "blurred"}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block  font-medium text-[#f3f3f3] text-xl"
            >
              Email Address
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
              variants={inputVariants}
              initial="blurred"
              animate={focusedField === "email" ? "focused" : "blurred"}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {/* Subject Input */}
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block  font-medium text-[#f3f3f3] text-xl"
            >
              Subject
            </label>
            <motion.input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
              variants={inputVariants}
              initial="blurred"
              animate={focusedField === "subject" ? "focused" : "blurred"}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block  font-medium text-[#f3f3f3] text-xl"
            >
              Message
            </label>
            <motion.textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
              variants={inputVariants}
              initial="blurred"
              animate={focusedField === "message" ? "focused" : "blurred"}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            ></motion.textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button className="hover:shadow-form rounded-md bg-[#550c62] hover:bg-black transition duration-500 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
