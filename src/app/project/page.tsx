import Link from "next/link";
import ProjectData from '../resourceData/projectData';

const Project = () => {
  return (
    <div className="w-full flex flex-col items-center p-4">
      
      {/* Back button */}
      <div className="w-full flex justify-start mt-4">
        <Link href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="45" height="30">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden w-full flex flex-col items-center mt-4">
        {ProjectData.map((data) => (
          <div key={data.id} className="w-[350px] h-[185px] mt-5 relative">
            <img src={data.image} alt={data.name} className="h-full w-full absolute z-0 rounded-lg" />
            <Link href={data.url} className="absolute h-full w-full z-100" target="_blank" />
          </div>
        ))}
      </div>

      {/* Desktop grid view (responsive & auto height) */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-2 gap-6 w-full mt-6 p-2">
        {ProjectData.map((data) => (
          <div key={data.id} className="relative h-[190px] md:h-[210px] lg:h-[390px] overflow-hidden rounded-xl">
            <img src={data.image} alt={data.name} className="h-full w-full absolute z-0" />
            <Link href={data.url} className="absolute h-full w-full z-100" target="_blank" ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
