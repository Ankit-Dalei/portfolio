import ProjectCard from "../components/ProjectCard";
import VariableWeightText from "../components/VariableWeightText";


import Project1 from '../assets/project-1.png'
import Project2 from '../assets/project-2.png'
import Project3 from '../assets/project-3.png'

const projectsData = [
  {
    id: "01",
    title: "DevToolsB",
    description: "Contributed to the development of the backend using Node.js, Express.js, and MongoDB, improving development efficiency by 40%. Implemented over 27 RESTful APIs in the frontend using a service layer, integrating various technique to rendering tools for enhance data handling and improve use interaction across the application. Collaborated with a team of 2 developers to integrate frontend components with backend services, streamlining data flow and reducing integration time by 30%.",
    link: "https://github.com/Ankit-Dalei/DevToolsB_frontend",
    image: Project1,  
  },
  {
    id: "02",
    title: "SmartLearning",
    description: " Designed a responsive and interactive 3D learning platform using ReactJS, offering users an engaging and immersive educational experience. Utilized Tailwind CSS to build a sleek, modern, and mobile-friendly interface with fast loading times and smooth transitions between 3D elements. Built a robust back-end using MongoDB, Express.js, Node.js, and React.js (MERN stack) to handle user authentication, data management, and real-time content updates.",
    link: "https://github.com/Ankit-Dalei/sml",
    image: Project2,
  },
  {
    id: "03",
    title: "Disha",
    description: "A simple weather app that provides real-time weather updates based on your location or searched city. Built with JavaScript, HTML, and CSS, it fetches weather data from a public API and displays temperature, humidity, and other weather details.",
    link: "https://github.com/Ankit-Dalei/Weather",
    image: Project3,
  },
  // {
  //   id: "04",
  //   title: "DevToolsB",
  //   description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
  //   link: "https://github.com",
  //   image: Project3,
  // },
  // {
  //   id: "05",
  //   title: "DevToolsB",
  //   description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
  //   link: "https://github.com",
  //   image: Project3,
  // }
]

const Projects = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Projects"
          invert
        />
        <div className="mt-8 flex flex-col gap-y-8">
          { projectsData.map(projectData => {
            return <ProjectCard 
              key={projectData.id} 
              projectData={projectData} 
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects;
