import ExportIcon from '../assets/export.svg'

const ResearchCard = ({projectData}) => {
  return(
    <div className={`flex flex-col lg:flex-row items-start gap-12 text-black ${ projectData.id % 2 === 0 && 'lg:flex-row-reverse' }`}>
      <img src={projectData.image} className="rounded-2xl w-[35vw] h-[47vh]" />
      <div className='flex flex-col gap-7 mt-4'>
        <p className='font-display font-extrabold text-4xl'>{projectData.id}</p>
        <p className='font-display font-bold text-3xl'>{projectData.title}</p>
        {/* <p className="text-zinc-800 font-display">{projectData.description}</p> */}
        <a href={projectData.link} target="_blank" rel="noopener noreferrer" className='text-xl font-semibold text-blue-400'>
          {/* <img src={ExportIcon} className='w-5 h-5' /> */}
         ( click )
        </a>
      </div>
    </div>
  )
}
export default ResearchCard
