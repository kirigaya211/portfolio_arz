import profile from "../assets/prof.png";


export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-white bg-[#0F0F1C] px-4 text-center relative">
    
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-purple-700 blur-2xl opacity-40 w-76 h-76 m-auto animate-pulse" />
          <img
            src={profile} 
            alt="Profile"
            className="relative z-10 w-76 h-76 object-contain "
          />
        </div>
        <p className="text-xl text-gray-300 mb-1">
          Hi! I am <span className="text-purple-400 font-semibold">Christopher G. ArsenaL Jr.</span>
        </p>
  
       
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-3xl">
          Debugging  <br />
          is like being a  <span className="text-purple-400 underline decoration-purple-600">detective</span>...
        </h1>
  
      
        <p className="mt-2 text-xs text-gray-400 italic">
        in a crime movie where you're also the murderer
        </p>
  
      
        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-2">An aspiring Web App Developer</h2>
          <p className="text-gray-300">
            Currently finishing my bachelors degree at the  
            <a
              href="https://www.usep.edu.ph/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
            University of Southeastern Philippines
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-gray-400">
            A self-taught web app Developer, I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React, and Node.js), with React as my main frontend framework.
          </p>
        </div>
      
      </section>
    );
  }
  