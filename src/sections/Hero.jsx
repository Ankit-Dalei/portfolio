import BoyGraphic from '../assets/boy.svg'
import DiscordIcon from '../assets/discord.svg'
import RedditIcon from '../assets/reddit.svg'
import TwitterIcon from '../assets/twitter.svg'
import x from '../assets/x.svg'
import SocialButton from '../components/SocialButton'

const socialLinks = [
  {
    icon: TwitterIcon,
    link: "https://www.linkedin.com/in/ankit-dalei-0aab70161/"
  },
  {
    icon: RedditIcon,
    link: "https://github.com/Ankit-Dalei"
  },
  {
    icon: DiscordIcon,
    link: "https://discord.com"
  },
  {
    icon: x,
    link: "https://x.com/AnkitDalei1"
  },
]

const Hero = () => {
  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col lg:flex-row-reverse md:justify-between items-center gap-5 lg:gap-10">
        <img src={BoyGraphic} />
        <div className="space-y-5">
          <h1 className="font-sora text-5xl leading-[56px] text-black">
            Hello I&apos;am <span className="font-extrabold">Ankit Dalei.</span>
          </h1>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            <span className="font-extrabold">Full-stack</span> Developer
          </h2>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            Based In <span className="font-extrabold">India.</span>
          </h2>
          <p className="text-zinc-500 font-display py-4">
            I&apos;m AnkitDalei a Full Stack Developer with expertise in JavaScript, Node.js, and the MERN stack, specializing in building scalable web applications and integrating sensor-based automation solutions.
          </p>

          <div className='flex gap-8 items-center'>
            { socialLinks.map((socialItem) => {
              return (
                <SocialButton 
                  key={socialItem.link} 
                  icon={socialItem.icon} 
                  link={socialItem.link} 
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
