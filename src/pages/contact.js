// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactPage = () => {
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const text = "Say Hello";

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setError(false);
//     setSuccess(false);

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_SERVICE_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         form.current,
//         process.env.NEXT_PUBLIC_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           form.current.reset();
//         },
//         () => {
//           setError(true);
//         }
//       );
//   };

//   return (
//     <motion.div
//       className="h-full flex items-center justify-center p-8 bg-light dark:bg-dark"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 w-full max-w-6xl">
//         {/* TEXT CONTAINER */}
//         <div className="flex items-center justify-center text-5xl lg:text-6xl text-center text-dark dark:text-light">
//           <div>
//             {text.split("").map((letter, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 0 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: index * 0.1,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             😊
//           </div>
//         </div>

//         {/* FORM CONTAINER */}
//         <form
//           onSubmit={sendEmail}
//           ref={form}
//           className="bg-red-50 dark:bg-gray-800 rounded-xl text-xl flex flex-col gap-6 p-8 shadow-lg"
//         >
//           <span className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base">Dear Abdul Rafay,</span>
//           <textarea
//             rows={6}
//             className="bg-transparent border-b-2 border-b-black dark:text-light dark:border-b-white outline-none resize-none w-full"
//             name="user_message"
//           />
//           <span className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base">My mail address is:</span>
//           <input
//             name="user_email"
//             type="text"
//             className="bg-transparent border-b-2 border-b-black dark:text-light dark:border-b-white outline-none w-full"
//           />
//           <span className="text-dark dark:text-light text-lg ml-4 underline font-semibold capitalize md:text-base">Regards</span>
//           <button className="bg-purple-200 dark:bg-purple-600 rounded font-semibold text-gray-600 dark:text-gray-200 p-4 mt-4">
//             Send
//           </button>
//           {success && (
//             <span className="text-green-600 dark:text-green-400 font-semibold">
//               Your message has been sent successfully!
//             </span>
//           )}
//           {error && (
//             <span className="text-red-600 dark:text-red-400 font-semibold">
//               Something went wrong!
//             </span>
//           )}
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactPage;

// import React, { useState } from 'react';

// const ContactUs = () => {
//   // State to handle the preferred method of communication
//   const [preferredMethod, setPreferredMethod] = useState('');

//   return (
//     <form action="https://fabform.io/f/xxxxx" method="post">
//       <section id="contact" className="bg-blue-100 py-24">
//       <h2 className="font-manrope text-4xl font-bold mb-6 text-center transition-transform transform hover:scale-110 duration-500 ease-in-out">Contact Us </h2>
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 grid-cols-1">
//             <div className="lg:mb-0 mb-10">
//               <div className="group w-full h-full">
//                 <div className="relative h-full custom-shadow transition-shadow duration-500 ease-in-out hover:custom-hover-shadow hover:border-black hover:border-4">
//                   {/* Custom combined shadow and border */}
//                   <img
//                     src="https://pagedone.io/asset/uploads/1696488602.png"
//                     alt="ContactUs tailwind section"
//                     className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 transition-transform transform hover:scale-105 duration-500 ease-in-out"
//                   />
//                     <div className="absolute bottom-0 w-full lg:p-11 p-5">
//                     <div className="bg-white rounded-lg p-6 block">
//                       <a href="javascript:;" className="flex items-center mb-6">
//                         <svg
//                           width="30"
//                           height="30"
//                           viewBox="0 0 30 30"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
//                             stroke="#4F46E5"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                         <h5 className="text-black text-base font-normal leading-6 ml-5">
//                           470-601-1911
//                         </h5>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl shadow-lg custom-shadow transition-shadow duration-500 ease-in-out hover:custom-hover-shadow">
//               {/* Custom combined shadow */}
//               <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11 transition-transform transform hover:scale-110 duration-500 ease-in-out">
//                 Send Us A Message
//               </h2>
//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Name"
//               />
//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Email"
//               />
//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Phone"
//               />

//               <div className="mb-10">
//                 <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
//                   Preferred method of communication
//                 </h4>
//                 <div className="flex">
//                   <div className="flex items-center mr-11">
//                     <input
//                       id="radio-group-1"
//                       type="radio"
//                       name="radio-group"
//                       value="email"
//                       checked={preferredMethod === 'email'}
//                       onChange={() => setPreferredMethod('email')}
//                       className="hidden"
//                     />
//                     <label
//                       htmlFor="radio-group-1"
//                       className={`flex items-center cursor-pointer text-base font-normal leading-6 ${
//                         preferredMethod === 'email'
//                           ? 'text-indigo-600'
//                           : 'text-gray-500'
//                       }`}
//                     >
//                       <span
//                         className={`border border-gray-300 rounded-full mr-2 w-4 h-4 ${
//                           preferredMethod === 'email' ? 'bg-indigo-500' : ''
//                         }`}
//                       ></span>
//                       Email
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="radio-group-2"
//                       type="radio"
//                       name="radio-group"
//                       value="phone"
//                       checked={preferredMethod === 'phone'}
//                       onChange={() => setPreferredMethod('phone')}
//                       className="hidden"
//                     />
//                     <label
//                       htmlFor="radio-group-2"
//                       className={`flex items-center cursor-pointer text-base font-normal leading-6 ${
//                         preferredMethod === 'phone'
//                           ? 'text-indigo-600'
//                           : 'text-gray-500'
//                       }`}
//                     >
//                       <span
//                         className={`border border-gray-300 rounded-full mr-2 w-4 h-4 ${
//                           preferredMethod === 'phone' ? 'bg-indigo-500' : ''
//                         }`}
//                       ></span>
//                       Phone
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Message"
//               />
//               <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </form>
//   );
// };

// export default ContactUs;

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
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
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


