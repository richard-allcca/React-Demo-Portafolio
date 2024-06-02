import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react";
import { themeContext } from "../../context/Context";
import "./Contact.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_83vyu48",
        "template_r6oe4tk",
        form.current,
        "_NGr64Q8N6epgbbES"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contacto">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="user_message"
            className="user message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Save" className="button" />
          {done && "Thanks for contacting me"}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          >Hola</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
