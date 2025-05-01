import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#1A0B2E] text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-extrabold tracking-widest text-purple-400">ARZ</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
          <li><a href="#work" className="hover:text-purple-400 transition">Work</a></li>
          <li><a href="#skill" className="hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contacts</a></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden text-lg">
          <li><a href="#about" onClick={toggleMenu} className="hover:text-purple-400">About</a></li>
          <li><a href="#work" onClick={toggleMenu} className="hover:text-purple-400">Work</a></li>
          <li><a href="#skill" onClick={toggleMenu} className="hover:text-purple-400">Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-purple-400">Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-purple-400">Contacts</a></li>
        </ul>
      )}
    </nav>
  );
}
