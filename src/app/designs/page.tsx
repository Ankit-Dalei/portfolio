import Link from "next/link";
import designData from '../resourceData/designData';

const designs = () => {
  return (
    <div className="w-[100%] min-h-screen flex flex-col items-center p-4">
      
      {/* Back button */}
      <div className="w-full flex justify-start mt-4">
        <Link href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="45" height="30">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.2l115.4-115.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
        </Link>
      </div>

      {/* ✅ Mobile View */}
      <div className="sm:hidden w-full flex flex-col items-center mt-4">
        {designData.map((project) => (
          <div key={project.id} className="h-[785px] w-[350px] mt-5 relative">
            <img src={project.image} alt={project.name} className="h-full w-full absolute z-0 rounded-lg" />
            <Link href={project.url} target="_blank" className="absolute inset-0 h-full w-full z-100"></Link>
          </div>
        ))}
      </div>

      {/* ✅ Desktop View */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 p-2 mt-6 w-full">
        {designData.map((project) => (
          <div key={project.id} className="relative w-full h-[595px] md:h-[650px] rounded-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-full absolute z-0" />
            <Link href={project.url} target="_blank" className="absolute inset-0 h-full w-full z-100"></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default designs;
