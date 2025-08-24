import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faPaw } from "@fortawesome/free-solid-svg-icons";

const Project = () => {

  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-5-wrapper bg-[#f26f76] w-full h-full p-1">
            <div className="project-5 bg-gray-800 w-full h-full overflow-hidden">
                <div id="p5-container" className="h-[calc(100%_-_50px)] w-full overflow-hidden">
                    <div className="h-1/3 lg:h-1/2 w-full overflow-hidden p-1">
                        <img
                            src="/Projects/Portfolio/Cover.gif"
                            alt="TradeTrack"
                            className="project-image w-full h-full object-cover bg-[#cafffb33]"
                        />
                    </div>
                    <div className="h-2/3 lg:h-1/2 p-2 pt-1 text-[#f26f76] flex flex-col justify-start">
                        <div className="flex flex-col sm:flex-row justify-between mb-2">
                            <h2 className="text-2xl font-bold tracking-wider neon-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                Portfolio
                            </h2>
                            <h5 className="text-xs">July 2025 - Ongoing</h5>
                        </div>
                        
                        <ul
                            className="text-sm text-[#cafffb] leading-relaxed break-words grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-7 list-disc pl-5"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                            >
                            <li id="p4-overflow-hidden-2">
                                My portfolio is built with Next.js and features a gamified UI to present my work in an engaging way.
                            </li>
                            <li id="p4-overflow-hidden-1">
                                It highlights my projects and skills with a neon color theme for a modern look.
                            </li>
                        </ul>

                        <div id="p5-overflow-hidden-3" className="flex flex-wrap items-center justify-between gap-2 mt-2 w-full h-full">
                            <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 h-full">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faPaw} size="xl"/>
                                    <h6 className="text-xs">Pet Project</h6>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-end gap-2 h-full ml-auto">
                                <div className="flex flex-wrap items-center justify-end gap-2 h-full">
                                    <img src="/logos/Next.webp" alt="Next.js" className="h-13 w-18 p-1 object-contain" />
                                    <img src="/logos/Tailwind.png" alt="Tailwind CSS" className="h-13 w-18 p-1 object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[55px] w-full flex items-center justify-end p-2 pr-[30px] gap-5">
                    <Link 
                        href="https://github.com/HimanthaMarasinghe/Portfolio" 
                        target="_blank" 
                        className="text-sm md:text-lg text-[#f26f76] hover:text-white transition-colors duration-300 mr-4"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}>
                        GitHub
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                    {/* <Link 
                        href="/" 
                        className="text-sm md:text-lg text-[#f26f76] hover:text-white transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                        >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-1 !hidden md:!inline" />
                        <span className="sm:hidden md:inline">More Details</span>
                        <span className="hidden sm:inline md:hidden">More</span>
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link> */}
                </div>
            </div>
        </div>
        <div className="project-2-corner-1 absolute top-0 right-0 w-[90px] h-[90px] bg-[#f26f76] flex items-center justify-center">
            <h1 className="text-center text-black font-bold rotate-45 -translate-y-2.5 translate-x-2.5">Epic</h1>
        </div>
        <div className="project-4-corner-1 absolute top-0 lef-0 w-[90px] h-[90px] bg-[#f26f76] flex items-center justify-center">
            <h1 className="text-center text-black font-bold -rotate-45 -translate-x-2.5 -translate-y-2.5">7 / 7</h1>
        </div>
    </div>
  );
};

export default Project;