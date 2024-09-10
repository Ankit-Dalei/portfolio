import ProjectCard from "../components/ProjectCard";
import VariableWeightText from "../components/VariableWeightText";


import Project1 from '../assets/project-1.png'
import Project2 from '../assets/project-2.png'
import Project3 from '../assets/project-3.png'

const projectsData = [
  {
    id: "01",
    title: "Crypto Screener Application",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link: "https://github.com",
    image: Project1,  
  },
  {
    id: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. When an unknown printer took a galley of type and scrambled it to specimen book.",
    link: "https://github.com",
    image: Project2,
  },
  {
    id: "03",
    title: "Blog Website Template",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link: "https://github.com",
    image: Project3,
  }
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
