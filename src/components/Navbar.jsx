import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa6";
import logo from "../assets/AbdulLog.png";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-0 py-6">
            {/* Logo Section */}
            <div className="flex items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className=" rounded-3xl" width={150} height={300} alt="Logo" />
                </a>
            </div>

            {/* Social Links - Aligned with Logo */}
            <div className="flex items-center gap-5 text-2xl">
                <a href="http://linkedin.com/in/abdul-haleem-abdullah-227914269"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin className="transition-transform duration-70 hover:scale-160"/>
                </a>
                <a href="https://github.com/Abdullah-ahfj"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                    <FaGithub className="transition-transform duration-70 hover:scale-160"/>
                </a>
                <a href="https://www.instagram.com/abdullahahfj?igsh=MW5yYmpnc2Q1MW82OA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram">
                    <FaInstagram className="transition-transform duration-70 hover:scale-160"/>
                </a>
                <a href="https://www.facebook.com/abdullahahfj?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook">
                    <FaFacebook className="transition-transform duration-70 hover:scale-160"/>
                </a>
                
            </div>
        </nav>
    );
};

export default Navbar;
