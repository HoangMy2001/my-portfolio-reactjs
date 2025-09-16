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
                        <li>Front-end Technologies: HTML5, CSS3, JavaScript, ReactJS</li>
                        <li>Responsive Design: Responsive Web Design (RWD)</li>
                        <li>Tooling & Version Control: GitHub</li>
                    </ul>
                </div>

                <div className="skills__right">
                    <div className="skills__sub-title">
                        <FaPalette /> UX/UI Design
                    </div>
                    <ul>
                        <li>User Persona</li>
                        <li>User Journey</li>
                        <li>Wireframe</li>
                        <li>Tool: Figma</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;