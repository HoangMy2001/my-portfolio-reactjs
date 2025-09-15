import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <p>&copy; {new Date().getFullYear()} Ly Thi Hoang My. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;