import { useState, useEffect } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from "../assets/logopin.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolling, setScrolling] = useState(false);

  const menuOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      const sections = ["home", "tech", "projects", "contact"];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed max-w-[1200px] mx-auto w-full top-0 z-10 w-full px-3 py-1 rounded-lg backdrop-blur-lg transition-all duration-300 ease-in-out ${
        scrolling ? "bg-black text-white shadow-xl rounded-lg" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="#home">
          <img src={logo} className="max-h-8" alt="Logo" />
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-base">
          {["home", "tech", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`cursor-pointer transition-all duration-300 ${
                activeSection === section
                  ? "text-white-400 font-semibold"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <li className="capitalize">{section}</li>
            </a>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className="hidden md:flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/laura-garau-3a2248194/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-400"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/laura__garau/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-pink-500"
          >
            <BsInstagram />
          </a>
          <a
            href="https://github.com/Lgarau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-blue-800"
          >
            <BsGithub />
          </a>
        </ul>

        {/* Mobile Icon */}
        {isOpen ? (
          <BiX className="block md:hidden text-3xl" onClick={menuOpen} />
        ) : (
          <BiMenu className="block md:hidden text-3xl" onClick={menuOpen} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 w-2/3 md:hidden bg-black/90 p-6 transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-white">
          {["home", "tech", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              onClick={menuOpen}
            >
              <li className="capitalize">{section}</li>
            </a>
          ))}
        </ul>

        <ul className="flex gap-4 text-xl mt-6">
          <a
            href="https://www.linkedin.com/in/laura-garau-3a2248194/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-400"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/laura__garau/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-pink-500"
          >
            <BsInstagram />
          </a>
          <a
            href="https://github.com/Lgarau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-sky-950"
          >
            <BsGithub />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
