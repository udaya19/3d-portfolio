import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <div data-aos="fade-up">
      <SectionHeading title="Contact" />
      <div className="-mt-8 lg:flex md:flex md:gap-10 lg:gap-20">
        <p className="text-navColor md:w-[80%] lg:w-[60%]">
          If you are new to Computer Science Engineering and looking for
          mentorship please feel free to contact me. I will guide you through
          right steps and procedure in order to suceed in your career. You can
          DM me on LinkedIn or Instagram. Also you can send me WhatsApp message.
        </p>
        <div className="flex gap-5 mt-3 justify-center">
          <a
            href="https://www.instagram.com/udaya_kiran_gonuguntla/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram color="red" size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/gonuguntla-udaya-kiran-469751202/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin color="blue" size={25} />
          </a>
          <a href={`https://wa.me/9160891919}`}>
            <AiOutlineWhatsApp color="green" size={25} />
          </a>
          <a href="mailto:gudaya2002@gmail.com">
            <AiOutlineMail color="orange" size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
