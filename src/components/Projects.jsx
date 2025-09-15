import React from "react";
import {FaStar, FaGithub} from "react-icons/fa";

import projectImage1 from "../assets/img/project-1.png";

import "./Projects.css";

const projects = [
    {
        id: 1,
        name: "Hệ Thống Quản Lý Phân Phối Dược Phẩm",
        desc: "Đây là website giúp người dùng - với cương vị là nhà phân phối, quản lý quy trình thu mua và phân phối dược phẩm",
        tech: ["HTML5", "CSS3", "JavaScript", "ReactJS", "React Router DOM", "Axios", "Fetch API", "Git"],
        image: projectImage1,
        github: "https://github.com/DA2-2024/da2-frontend"
    },

    {
        id: 2,
        name: "Portfolio Website",
        desc: "Đây là website thể hiện dự án và kỹ năng cá nhân.",
        tech: ["ReactJS", "CSS"],
        image: projectImage1,
        github: "https://github.com/HoangMy2001/my-portfolio-reactjs"
    },

    {
        id: 3,
        name: "Portfolio Website",
        desc: "Đây là website thể hiện dự án và kỹ năng cá nhân.",
        tech: ["ReactJS", "CSS"],
        image: projectImage1,
        github: "https://github.com/HoangMy2001/my-portfolio-reactjs"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects container">
            <h3 className="projects__title">
                Các Dự Án Nổi Bật ⭐
            </h3>

            <div className="projects__grid">
                {projects.map((project) => (
                    <div className="project__card" key={project.id}>
                        <img src={project.image} alt={project.name} className="project__image" />
                        <h4 className="project__name">{project.name}</h4>
                        <p className="project__desc">{project.desc}</p>
                        <div className="project__tech">
                            {project.tech.join(", ")}
                        </div>
                        <div className="project__links">
                            <a href={project.github} target="_blank" className="link-btn">
                                <FaGithub /> <span>Github</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;