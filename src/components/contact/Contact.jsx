import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xjca95t", "template_pdc7l3r", formRef.current, {
        publicKey: "weAmbei8mexWQCIyO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          setError(false);
          formRef.current.reset(); // ← clear the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Lets work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>harshmodi134@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Hello street New York </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 551 260 8493</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 179 170"
            width="300"
            height="300"
          >
            <motion.circle
              cx="81"
              cy="79"
              r="79"
              stroke="orange"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
            />
            <g transform="translate(17,17)">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 7 }}
                d="M96.131 123.433c-13.342 0-38.082-3.982-62.831-28.733C4.67 66.071 3.829 37.453 4.8 26.478a19.431 19.431 0 0 1 4.445-10.735l6.973-8.4a7.716 7.716 0 0 1 11.394-.528L50.205 29.41a7.717 7.717 0 0 1-.528 11.4l-15.424 12.8a82.706 82.706 0 0 0 16.712 23.425 82.726 82.726 0 0 0 23.426 16.712L87.2 78.322a7.718 7.718 0 0 1 11.4-.527l22.593 22.593a7.716 7.716 0 0 1-.528 11.394l-8.4 6.973a19.438 19.438 0 0 1-10.735 4.448 61.91 61.91 0 0 1-5.399.23zM22.164 8.057h-.2a4.171 4.171 0 0 0-3.05 1.52l-6.973 8.4a15.945 15.945 0 0 0-3.655 8.807c-.924 10.486-.1 37.853 27.491 65.44s54.958 28.415 65.441 27.491a15.936 15.936 0 0 0 8.8-3.656l8.4-6.972a4.218 4.218 0 0 0 .289-6.227L96.115 80.27a4.216 4.216 0 0 0-6.226.288l-13.66 16.454a1.752 1.752 0 0 1-2.056.481A85.615 85.615 0 0 1 48.49 79.51a85.615 85.615 0 0 1-17.983-25.683 1.75 1.75 0 0 1 .481-2.056l16.453-13.66a4.215 4.215 0 0 0 .289-6.226L25.138 9.292a4.166 4.166 0 0 0-2.974-1.235zm-4.6.406zM111.752 61.86A1.749 1.749 0 0 1 110 60.11 42.161 42.161 0 0 0 67.89 18a1.75 1.75 0 1 1 0-3.5 45.664 45.664 0 0 1 45.61 45.61 1.749 1.749 0 0 1-1.748 1.75z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M101.442 61.86a1.75 1.75 0 0 1-1.75-1.75 31.838 31.838 0 0 0-31.8-31.8 1.75 1.75 0 0 1 0-3.5 35.343 35.343 0 0 1 35.3 35.3 1.749 1.749 0 0 1-1.75 1.75z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M91.132 61.86a1.749 1.749 0 0 1-1.75-1.75A21.517 21.517 0 0 0 67.89 38.618a1.75 1.75 0 0 1 0-3.5A25.021 25.021 0 0 1 92.882 60.11a1.749 1.749 0 0 1-1.75 1.75z"
              />
            </g>
          </motion.svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
