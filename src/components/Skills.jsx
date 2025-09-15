import React from "react";
import { FaRocket, FaCode, FaPalette } from "react-icons/fa";

import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills" className="skills container">
            <h3 className="skills__title">
                Bộ Kỹ Năng 🚀
            </h3>

            <div className="skills__card">
                <div className="skills__left">
                    <div className="skills__sub-title">
                        <FaCode /> Front-end Development
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="skills__right">
                    <div className="skills__sub-title">
                        <FaPalette /> UX/UI Design
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;