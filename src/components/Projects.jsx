import Slider from "react-slick";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const projectsData = [
  {
    image: image1,
    title: "PhotoPortfolio",
    description: "A personal website for an amateur photographer",
    technologies: ["React", "TailwindCSS", "Vite"],
  },
  {
    image: image2,
    title: "Register Form",
    description: "A minimal register form with a cyberpunk city background",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: image3,
    title: "Weather App",
    description: "An elegant and functional weather web app",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    image: image4,
    title: "Synthesizer",
    description: "A simple synthesizer with customizable vintage sounds",
    technologies: ["React", "Tailwind CSS"],
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2, // Default: 2 slides visibili
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768, // Quando lo schermo è più piccolo di 768px
      settings: {
        slidesToShow: 1, // Mostra solo 1 progetto alla volta
        slidesToScroll: 1,
      },
    },
  ],
};

const ProjectCard = ({ project }) => (
  <div
    className="relative h-[400px] bg-cover bg-center rounded-2xl shadow-lg p-4 md:p-6"
    style={{ backgroundImage: `url(${project.image})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-4 md:p-6">
      
      <h2 className="text-2xl md:text-4xl font-bold text-white">{project.title}</h2>
      <p className="text-sm md:text-base text-gray-400 mt-2">{project.description}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-xs md:text-sm bg-black text-white px-3 py-1 rounded-lg">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-tr from-stone-900 to-gray-800 flex min-h-screen w-full flex-col items-center justify-center gap-10 p-6"
    >
      <h1 className="text-3xl md:text-5xl font-semibold text-white">Projects</h1>
      <Slider {...settings} className="w-full max-w-[1200px]">
        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;