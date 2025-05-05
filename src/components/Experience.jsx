import React, { useState, useEffect } from "react";

export default function Experience() {
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://x8ki-letl-twmt.n7.xano.io/api:tuXupQl5/portfolio"
        );
        if (!response.ok) {
          setMessage("An error occurred while fetching job list.");
          return;
        }

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setMessage("Failed to fetch job list. Please try again.");
      }
    };

    fetchJobs();
  }, []);

  return (
    <section id="work" className="py-12 px-4">
      <h2 className="text-4xl font-semibold mb-6 text-center text-white">
        Work Experience
      </h2>

      {message && (
        <p className="text-center text-red-400 mb-4">{message}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="relative group bg-gradient-to-br from-purple-800 to-[#130428] rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex justify-around"
          >
            <img
              src={job.icon}
              alt={`${job.title} icon`}
              className="mr-10 w-20 h-20 object-cover rounded-lg"
            />

            <div>
              <h3 className="text-xl font-bold text-white">{job.title}</h3>
              <p className="text-gray-300">{job.company}</p>
            </div>

            <div
              className="absolute left-1/2 -translate-x-1/2 -top-28 w-64 p-4 rounded-xl z-30 pointer-events-none
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white text-sm"
            >
              <div className="flex flex-col gap-1">
                <p className="text-gray-300 text-xs mt-1">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
