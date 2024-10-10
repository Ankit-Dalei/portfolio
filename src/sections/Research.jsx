import VariableWeightText from "../components/VariableWeightText";
import AboutImage from '../assets/about_me.svg'

const Research = () => {
  return (
    <div className="bg-white px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="Research & "
          extraboldText="Publication"
        />
      </div>
    </div>
  )
}

export default Research;
