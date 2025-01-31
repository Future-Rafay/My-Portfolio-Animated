import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const text = "Say Hello";

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
          console.error("EmailJS Error:", error.text);  
        }
      );
  };

  return (
    <motion.div
      className="h-full flex items-center justify-center p-8 bg-light dark:bg-dark"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 w-full max-w-6xl">
        {/* TEXT CONTAINER */}
        <div className="flex items-center justify-center text-5xl lg:text-6xl text-center text-dark dark:text-light">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
        action="https://fabform.io/f/xxxxx" method="post"
          onSubmit={sendEmail}
          ref={form}
          className="bg-red-50 dark:bg-gray-800 rounded-xl text-xl flex flex-col gap-6 p-8 shadow-lg"
        >
          <span className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base">Dear Abdul Rafay,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black dark:text-light dark:border-b-white outline-none resize-none w-full"
            name="user_message"
          />

          <span className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base">My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black dark:text-light dark:border-b-white outline-none w-full"
          />
          <span className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base">Regards</span>
          <button className="bg-purple-400 dark:bg-purple-600 rounded font-semibold text-dark dark:text-gray-200 p-4 mt-4">
            Send
          </button>

          {success && (
            <span className="text-green-600 dark:text-green-400 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            console.error("EmailJS Error:", error),
            <span className="text-red-600 dark:text-red-400 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;


