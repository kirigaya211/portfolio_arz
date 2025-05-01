export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-[#1A0B2E]">
        <h1 className="text-xl font-bold text-white">ARZ</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-purple-400 text-white">About</a></li>
          <li><a href="#work" className="hover:text-purple-400 text-white">Work</a></li>
          <li><a href="#skill" className="hover:text-purple-400 text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 text-white">Contacts</a></li>
        </ul>
      </nav>
    );
  }
  