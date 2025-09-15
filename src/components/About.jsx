import React from "react";
import "./About.css";

import avatar from "../assets/img/profile.png";

const About = () => {
    return (
        <section id="about" className="about container">
            <div className="about__content">
                    <h3 className="about__greeting">
                        Chào, tôi là <span className="text__accent">Hoàng Mỹ</span> <span className="wave">👋</span>
                    </h3>
                <div className="about__left">
                    <div className="about__avatar">
                        <img src={avatar} alt="Ly Thi Hoang My" />
                    </div>
                </div>

                <div className="about__right">
                    <p>Tôi là một <strong>Frontend Developer</strong> mới tốt nghiệp ngành Công nghệ Thông tin,
                    đam mê xây dựng giao diện web hiện đại, tối ưu trải nghiệm người dùng.
                    </p>
                    <p>Tôi thành thạo <strong>HTML, CSS, JavaScript, ReactJS</strong>, và quan tâm đến UX/UI,
                    với mong muốn phát triển thành một lập trình viên frontend chuyên nghiệp.
                    </p>
                    <a href="#contact" className="btn btn--primary">Liên hệ với tôi</a>
                </div>
            </div>
        </section>
    );
};

export default About;