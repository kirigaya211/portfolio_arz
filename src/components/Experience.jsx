import Internship from "../assets/Internship.png";
import Procurement from "../assets/Procurement.jpg";
import Facility from "../assets/facility.jpg";
import Lefi from "../assets/Lefi.jpg";

export default function Experience() {
  const jobs = [
    {
      title: "Internship",
      company: "Office of Student Affair and Services - USeP",
      icon: Internship,
      description:
        "The Organization Accreditation and Reaccreditation System is a web-based application built with Laravel, Livewire, and MySQL, featuring a modern, responsive interface using Flowbite and Vite. Developed during my internship at OSAS (June 18, 2024 – January 4, 2025), I focused on backend development and supported frontend integration to enhance usability. The system improves the accreditation process by providing real-time updates, secure data handling, and a more efficient user experience.",
    },
    {
      title: "Phase 1 Project Development",
      company: "College of Information and Computing - USeP",
      icon: Lefi,
      description:
        "Living Engagement for IP’S (LEFI) is a web-based promoting website for the livelihood of the IP’s student in the University of Southeastern Philippines - Malabog Campus. I work on the phase 1 of this project which showcase the feature the process in the backend and frontend design of the website. In this project we use the Laravel framework, MYSQL database and Livewire reactive component. In the frontend we used Vite and Tailwindcss for the modern responsive user interface. We work on this project last November 25, 2025 until December 28, 2025.",
    },
    {
      title: "Project Transfer",
      company: "Resource and Management Division - USeP",
      icon: Facility,
      description:
        "This facility reservation system is a web-based reservation system for the USeP - Resource Management Division. In this project I was the only developer I used the MERN Stack technology for the development of this project which used MongoDB a non-sql database, Express.js for the restful API, React.js for the frontend with also using the Bootstrap for the components and Node.js for the Backend, and this system I deployed on Render. I work on this project last December 13-27, 2024.  ",
    },
    {
      title: "Procurement Website",
      company: "Office of Student Affair and Services - USeP",
      icon: Procurement,
      description:
        "This web-based procurement system streamlines request submissions and approvals for student organizations under the Office of Student Affairs and Services (OSAS) at the University of Southeastern Philippines. It features a React frontend with Tailwind CSS for responsive design, and a Node.js/Express.js backend with MongoDB for secure, flexible data storage. Development began on March 13, 2025, and the project is currently ongoing.",
    },
  ];
  return (
    <section id="work" className="py-12 px-4">
      <h2 className="text-4xl font-semibold mb-6 text-center text-white ">
        Work Experience
      </h2>
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
                <p className="text-gray-300 text-xs mt-1">{job.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
