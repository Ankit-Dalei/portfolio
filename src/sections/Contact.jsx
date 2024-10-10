import VariableWeightText from "../components/VariableWeightText";

const Contact = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText=""
          extraboldText="Contact"
          invert
        />
      </div>
    </div>
  )
}

export default Contact;
