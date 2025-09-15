import React, {useEffect, useState} from "react";
import "./Header.css";

const Header = () => {
    const [activeSection, setActiveSection] = useState("about");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const handleScroll = () => {
            let current = "";
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120; // chua khoang header cao 64px
                const sectionHeight = section.offsetHeight;

                if (scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute("id");
                }
            });
            if(current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__name">Ly Thi Hoang My</div>

                <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <ul className={`nav__menu ${menuOpen ? "show" : ""}`}>
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