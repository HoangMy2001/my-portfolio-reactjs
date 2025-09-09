import React, {useEffect, useState} from "react";
import "./Header.css";

const Header = () => {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const handleScroll = () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; // chua khoang header cao 64px
                const sectionHeight = section.offsetHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__name">Ly Thi Hoang My</div>

                <ul className="nav__menu">
                    <li><a href="#about" className={activeSection === "about" ? "active" : ""}>Giới thiệu</a></li>
                    <li><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Dự án</a></li>
                    <li><a href="#skills" className={activeSection === "skills" ? "active" : ""}>Kỹ năng</a></li>
                    <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Liên hệ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;