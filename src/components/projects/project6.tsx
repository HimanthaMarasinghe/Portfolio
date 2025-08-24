import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faPaw } from "@fortawesome/free-solid-svg-icons";

const Project = () => {

  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-2-wrapper bg-[#ee7ffa] w-full h-full p-1">
            <div className="project-2 bg-gray-800 w-full h-full overflow-hidden">
                <div id="p2-container" className="h-[calc(100%_-_50px)] w-full overflow-hidden">
                    <div className="h-1/3 lg:h-1/2 w-full overflow-hidden p-1">
                        <img
                            src="/Projects/Spend/Cover.png"
                            alt="Cinema Hall Ticket Booking System"
                            className="project-image w-full h-full object-cover bg-[#cafffb33]"
                        />
                    </div>
                    <div className="h-2/3 lg:h-1/2 p-2 pt-0 sm:pt-1 text-[#ee7ffa] flex flex-col justify-start">
                        <div className="flex flex-col justify-between mb-2">
                            <h2 className="text-lg sm:text-2xl font-bold tracking-wider neon-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                Spending Tracker
                            </h2>
                            <h5 className="text-xs">May 2024 - Sep 2025</h5>
                        </div>
                        <ul
                            className="text-sm text-[#cafffb] leading-relaxed break-words grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-7 list-disc pl-5"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                            >
                            <li id="p2-overflow-hidden-2">
                                This Node.js web application uses EJS to manage and track personal income and expenses, storing all records in MongoDB.
                            </li>
                            <li id="p2-overflow-hidden-1">
                                It also integrates Passport.js for authentication, ensuring secure login and user management throughout.
                            </li>
                        </ul>

                        <div id="p2-overflow-hidden-3" className="flex flex-wrap items-center justify-between gap-2 pl-[50px] w-full h-fit mt-auto">
                            <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 h-full">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faPaw} size="xl"/>
                                    <h6 className="text-xs">Pet Project</h6>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-end gap-2 h-full ml-auto">
                                <img src="/logos/Node.png" alt="Node.js" className="bg-white h-13 w-18 rounded-2xl object-contain" />
                                <img src="/logos/Mongo.webp" alt="MongoDB" className="bg-white h-13 w-18 rounded-2xl object-contain" />
                                <img src="/logos/express.png" alt="Express.js" className="bg-white h-13 w-18 rounded-2xl object-contain" />
                                <img src="/logos/ejs.png" alt="EJS" className="bg-white h-13 w-18 rounded-2xl object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[55px] w-full flex items-center justify-end p-2 gap-5">
                    <Link 
                        href="https://github.com/HimanthaMarasinghe/Spend-Tracker-Web-App" 
                        target="_blank" 
                        className="text-sm md:text-lg text-[#ee7ffa] hover:text-white transition-colors duration-300 mr-4"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}>
                        GitHub
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                    {/* <Link 
                        href="/" 
                        className="text-sm md:text-lg text-[#ee7ffa] hover:text-white transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                        >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-1" />
                        More Details
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link> */}
                </div>
            </div>
        </div>
        <div className="project-2-corner-1 absolute top-0 right-0 w-[90px] h-[90px] bg-[#ee7ffa] flex items-center justify-center">
            <h1 className="text-center text-black font-bold rotate-45 -translate-y-2.5 translate-x-2.5">Common</h1>
        </div>
        <div className="project-2-corner-2 absolute bottom-0 left-0 w-[90px] h-[90px] bg-[#ee7ffa] flex items-center justify-center">
            <h1 className="text-center text-black font-bold -rotate-45 translate-y-2.5 -translate-x-2.5">
                <p className="rotate-45 translate-y-2">6</p>
                <p className="rotate-45">/</p>
                <p className="rotate-45 -translate-y-2">7</p>
            </h1>
        </div>
    </div>
  );
};

export default Project;