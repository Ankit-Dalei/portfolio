import VariableWeightText from "../components/VariableWeightText";
import AboutImage from '../assets/about_me.svg'

const AboutMe = () => {
  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col md:flex-row justify-between items-start gap-x-16">
        {/* TODO: optimise and manage image width dynamically */}
        <img src={AboutImage} className="w-auto md:w-[320px] lg:w-[480px]" />
        <div className="mt-8 md:mt-0">
          <VariableWeightText 
            regularText="About"
            extraboldText="Me"
          />
          <p className="text-zinc-500 font-display py-4">
            I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
          </p>
          <p className="text-zinc-500 font-display py-4">
            I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
          </p>
          <p className="text-zinc-500 font-display py-4">
            When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
