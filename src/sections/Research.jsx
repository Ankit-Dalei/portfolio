import VariableWeightText from "../components/VariableWeightText";
import AboutImage from '../assets/about_me.svg'
import ResearchCard from "../components/ResearchCard";


import Project1 from '../assets/research.jpg'

const projectsData = [
  {
    id: "01",
    title: "Human Emotional Well-Being Analysis",
    description: "",
    link: "https://ieeexplore.ieee.org/abstract/document/10692050",
    image: Project1,  
  }
]


const Research = () => {
  return (
    <div className="bg-white px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="Research & "
          extraboldText="Publication"
        />
         <div className="mt-8 flex flex-col gap-y-8">
          { projectsData.map(projectData => {
            return <ResearchCard 
              key={projectData.id} 
              projectData={projectData} 
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Research;
