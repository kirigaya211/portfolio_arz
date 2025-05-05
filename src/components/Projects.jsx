// import CoffeeShop from "../assets/projects/coffeeshop.png";
// import dMinting from "../assets/projects/dMinting.jpg";
// import Osas from "../assets/projects/osas.jpg";
// import ECommerce from "../assets/projects/ecommerce.png";
import React, {useState, useEffect} from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(()=>{
    const fetchProjects = async()=>{
      try{
        const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:tuXupQl5/projects");

        if(!response.ok){
          setMessage("An error occured while fetching project list");
          return;
        }

        const data = await response.json();
        setProjects(data);
      }catch(error){
        console.error("Error fetching projects:", error);
        setMessage("Failed to fetch project list. Please try again");
      }
    };

    fetchProjects();
  },[]);
  

  return (
    <section id="projects" className="py-12 px-4">
      <h2 className="text-4xl font-semibold mb-10 text-center text-white">
        Projects
      </h2>

      <div className="space-y-24">
        {projects.map((p, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-center justify-center`}
            >
              <div className="relative md:w-1/2 w-full flex justify-center">
                <div className="absolute w-78 h-78 rounded-full bg-purple-700 blur-2xl opacity-40 animate-pulse top-1/2 -translate-y-1/2" />
                <img
                  src={p.image?.url}
                  alt={p.title}
                  className="relative z-10 w-1/3 max-w-sm object-contain"
                />
              </div>

             
              <div
                className={`md:w-1/2 w-full z-20 mt-6 md:mt-0 ${
                  isEven ? "md:-ml-16" : "md:-mr-16"
                }`}
              >
                <div className="p-6 bg-white/10 backdrop-blur-xl rounded-lg border border-white/10 shadow-xl">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {p.title}
                  </h3>
                  <p className="text-gray-400">{p.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
