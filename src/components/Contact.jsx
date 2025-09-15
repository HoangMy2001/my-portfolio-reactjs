import React from "react";
import { FaMailBulk, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact container">
            <h3 className="contact__title">
                Liên Hệ 📩
            </h3>
            <div className="contact__card">
                <p>Bạn có thể liên hệ với tôi qua các kênh sau:</p>
                <div className="contact__links">
                    <a href="mailto:yourmail@example.com" target="_blank" rel="noreferrer">
                    <FaEnvelope />
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                    <FaGithub />
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
                    <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Contact;