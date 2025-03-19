import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 text-sm">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href="https://www.hyperionaistudio.com/" target="_blank" rel="noopener noreferrer" className="link link-hover">Hyperion AI Studio</a></p>
            </aside>
            <nav className="footer md:footer-horizontal">
                <p className="link link-hover"><Link to="/about">About us</Link></p>
                <p className="link link-hover"><Link to="/contact">Contact</Link></p>
                <p className="link link-hover"><Link to="/privacy">Privacy Policy</Link></p>
                <p className="link link-hover"><Link to="/terms">Terms & Conditions</Link></p>
            </nav>
            <aside>
                <p>Made with ✨ by <a href="https://www.patanglabs.design/" target="_blank" rel="noopener noreferrer" className="link link-hover"> Patang Labs</a></p>
            </aside>
        </footer>
    )
}