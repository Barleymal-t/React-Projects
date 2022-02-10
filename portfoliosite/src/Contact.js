import React from 'react';
import { FaGithub,FaLinkedin,FaTwitter,} from 'react-icons/fa'
import { SiGmail} from 'react-icons/si'
import { IoCloseOutline } from 'react-icons/io5'



const Contact = () => {
  return (
    <section id="contact" className="hide">
      <i>
        <IoCloseOutline
          id="close"
          onClick={() => {
            document.getElementById("contact").classList.toggle("hide");
            document.getElementById("app").classList.toggle("hide");
          }}
        />
      </i>
      <h1>contact</h1>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/nii-odartey-lamptey-b427a41b5/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Odarteyy">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/Barleymal-t/">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="niiodartey10@gmail.com">
            <SiGmail />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
