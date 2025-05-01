import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
    return (
        
      <footer id="contact" className="text-center py-12 px-4 text-gray-300 bg-[#0F0F1C] border-t border-gray-800">
        <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
  
        <p className="max-w-2xl mx-auto mb-6 text-sm leading-relaxed text-gray-400">
          I'm eager to join a team that builds meaningful digital experiences through clean code and thoughtful design.
          Got a problem to solve or an idea to build? Let’s create something impactful together.
        </p>
  
        <p className="mb-8 text-sm font-medium text-purple-300">
          arsenalchristopherjr@gmail.com
        </p>
  
        <div className="flex justify-center space-x-6">
    
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
            title="GitHub"
          >
            <i className="fab fa-github text-3xl" />
          </a>
  
        
          <a
            href="https://www.linkedin.com/in/christopher-jr-arsenal-b61b34292"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin text-3xl" />
          </a>
  
       
          <a
            href="https://discord.com/users/yourDiscordID"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
            title="Discord"
          >
            <i className="fab fa-discord text-3xl" />
          </a>
        </div>
  
        <p className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} Christopher G. Arsenal Jr. 
        </p>
      </footer>
    );
  }
  