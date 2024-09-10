import SkillCard from "../components/SkillCard";
import VariableWeightText from "../components/VariableWeightText";

import GitLogo from '../assets/git.svg'
import JSLogo from '../assets/js.svg'
import SassLogo from '../assets/sass.svg'
import StorybookLogo from '../assets/storybook.svg'
import NestLogo from '../assets/nest.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import sql from '../assets/sql.svg'
import aws from '../assets/aws.svg'
import express from '../assets/express.svg'

const skillsData = [
  { logo: GitLogo, name: 'Git', },
  { logo: JSLogo, name: 'JavaScript', },
  { logo: SassLogo, name: 'Tailwind', },
  { logo: NestLogo, name: 'Nest.Js', },
  { logo: StorybookLogo, name: 'Iot', },
  { logo: react, name: 'React.Js', },
  { logo: node, name: 'Node.js', },
  { logo: sql, name: 'Mysql', },
  { logo: aws, name: 'AWS', },
  { logo: express, name: 'Express.js', },
]

const Skills = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Skills"
          invert
        />
        <div className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:gap-x-8 md:grid-cols-4 md:gap-x-12 lg:grid-cols-5 lg:gap-x-12 gap-y-10">
          { skillsData.map(skill => {
            return <SkillCard 
              key={skill.skillName} 
              skillLogo={skill.logo} 
              skillName={skill.name}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills;
