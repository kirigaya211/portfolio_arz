import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { Autoplay } from 'swiper/modules';


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:tuXupQl5/projects");

        if (!response.ok) {
          setMessage("An error occurred while fetching project list");
          return;
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setMessage("Failed to fetch project list. Please try again");
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h2 className="text-4xl font-semibold  text-center text-white">
        Projects
      </h2>

      <div className="flex items-center justify-center flex-col h-full">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}  // Enable looping for continuous scroll
          autoplay={{
            delay: 3000,  // Auto-scroll every 3 seconds
            disableOnInteraction: false,  // Keep autoplay even after user interaction
          }}
          pagination={{
            clickable: true,
          }}
          effect="slide"  // Use slide effect for smooth transitions
          speed={800}  // Set the transition speed (milliseconds)
          modules={[Autoplay, Pagination]}  // Ensure autoplay and pagination modules are included
          className="max-w-[90%] lg:max-w-[80%]"
        >




          {projects.map((p) => (
            <SwiperSlide key={p.title}>
              <div className="mt-15 mb-20 group shadow-lg text-white rounded-xl overflow-hidden cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 h-[500px] flex flex-col justify-between">

                {/* Image section */}
                <div className="w-full h-[220px] bg-black flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-contain h-full max-h-full"
                  />
                </div>

                {/* Text section */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h1 className="text-lg lg:text-xl font-semibold text-white">{p.title}</h1>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mt-2 line-clamp-4">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <RxArrowTopRight className="w-6 h-6 text-white group-hover:text-blue-500 group-hover:rotate-45 transition-transform duration-200" />
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
                        Project Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
