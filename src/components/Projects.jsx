import CoffeeShop from "../assets/projects/coffeeshop.png";
import dMinting from "../assets/projects/dMinting.jpg";
import Osas from "../assets/projects/osas.jpg";
import ECommerce from "../assets/projects/ecommerce.png";

export default function Projects() {
  const projects = [
    {
      title: "☕ Coffee Shop App (Flutter)",
      desc: "A sleek and responsive mobile app designed for a modern coffee shop, built using Flutter.Users can browse the full menu, view product details, customize their orders, and add items to a cart.",
      image: CoffeeShop,
      url: "https://github.com/kirigaya211/Flutter_CoffeeShop",
    },
    {
      title: "🛒 E-Commerce App (Flutter)",
      desc: "A fully responsive and intuitive mobile shopping app developed with Flutter, tailored for small to mid-sized online stores. The app offers a smooth and engaging user experience from product discovery to checkout.",
      image: ECommerce,
      url: "https://github.com/kirigaya211/Flutter_ECommerce",
    },
    {
      title: "🎓 Student Organization Accreditation System (Laravel)",
      desc: "A web-based system developed using the Laravel PHP framework to streamline the accreditation and reaccreditation process of student organizations within an academic institution.",
      image: Osas,
      url: "https://github.com/kirigaya211/osas",
    },
    {
      title: "NFT Minting dApp (EVM-Compatible)",
      desc: "A lightweight decentralized minting application built for EVM-compatible blockchains. Users can connect their wallet and mint NFTs directly from the smart contract via a simple and intuitive UI.",
      image: dMinting,
      url: "https://github.com/kirigaya211/minting_dApp",
    },
  ];

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
                  src={p.image}
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
