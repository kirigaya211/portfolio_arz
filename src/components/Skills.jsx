import talent from "../assets/Skills.png";



export default function Skills () {

    return (
        <section id="skill" className="py-12 px-4">
        <div className="flex flex-col items-center mt-10">
        <h2 className="text-4xl font-semibold text-white text-center">
          Skills
        </h2>
        <img
          src={talent} 
          alt="Skills"
          className="relative z-10 w-250 h-185 object-contain animate-pulse transition-transform duration-300 hover:-translate-y-2"
        />
      </div>
    </section>
    );
   
}