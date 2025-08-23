import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleInfo, faGraduationCap, faPaw, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Project = () => {
    useEffect(() => {
        const container = document.getElementById("p5-container");
        const targets = [
            document.getElementById("p5-overflow-hidden-1"),
            document.getElementById("p5-overflow-hidden-2"),
            document.getElementById("p5-overflow-hidden-3")
        ];
        
        const handleOverflow = () => {
            console.log("UseEffect on project 2 got called");
            if (!container) return;
            for(const el of targets) {
                if (el) el.classList.remove("hidden");
            }
            for(const el of targets) {
                if (container.scrollHeight <= container.clientHeight) break;
                if (el) el.classList.add("hidden");
            }
        }

        handleOverflow();

        let timeoutId: ReturnType<typeof setTimeout>;
        const debouncedHandleOverflow = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleOverflow, 150); // delay in ms
        }

        window.addEventListener('resize', debouncedHandleOverflow);

        //CleanUp on unmount
        return () => {
            window.removeEventListener('resize', handleOverflow);
        };
    }, []);

  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-5-wrapper bg-[#f26f76] w-full h-full p-1">
            <div className="project-5 bg-gray-800 w-full h-full overflow-hidden">
                <div id="p5-container" className="h-[calc(100%_-_50px)] w-full overflow-hidden">
                    <div className="h-1/2 w-full overflow-hidden p-1">
                        <img
                            src="/Projects/Movie/Cover.gif"
                            alt="TradeTrack"
                            className="project-image w-full h-full object-cover bg-[#cafffb33]"
                        />
                    </div>
                    <div className="h-1/2 p-2 pt-1 text-[#f26f76] flex flex-col justify-start">
                        <div className="flex flex-col justify-between mb-2">
                            <h2 className="text-2xl font-bold tracking-wider neon-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                Movie Watch List App
                            </h2>
                            <h5 className="text-xs">Jun 2025 - Ongoing</h5>
                        </div>
                        <p className="text-sm text-[#cafffb] leading-relaxed break-words" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                            <span id="p5-overflow-hidden-2">
                                This project is a cross-platform movie watchlist application built with React, React Native, and Tailwind CSS. {(" ")}
                            </span>
                            <span id="p5-overflow-hidden-1">
                                This app uses Appwrite for authentication and integrates the Gemini API to fetch movies based on story descriptions.
                            </span>
                        </p>
                        <div id="p5-overflow-hidden-3" className="flex flex-wrap items-center justify-between gap-2 mt-2 w-full h-full">
                            <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 h-full">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faPaw} size="xl"/>
                                    <h6 className="text-xs">Pet Project</h6>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-end gap-2 h-full">
                                <img src="/logos/React.png" alt="React" className="w-10 sm:w-18  object-contain" />
                                <img src="/logos/reactnative.svg" alt="React Native" className="w-10 sm:w-18  object-contain" />
                                <img src="/logos/Tailwind.png" alt="Tailwind CSS" className="w-10 sm:w-18  object-contain" />
                                <img src="/logos/appwrite.png" alt="Appwrite" className="w-10 sm:w-18  object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[55px] w-full flex items-center justify-end p-2 pr-[30px] gap-5">
                    <Link 
                        href="https://github.com/HimanthaMarasinghe/TradeTrack" 
                        target="_blank" 
                        className="text-sm md:text-lg text-[#f26f76] hover:text-white transition-colors duration-300 mr-4 hidden sm:inline"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}>
                        GitHub
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                    <Link 
                        href="/" 
                        className="text-sm md:text-lg text-[#f26f76] hover:text-white transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                        >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-1 !hidden md:!inline" />
                        <span className="sm:hidden md:inline">More Details</span>
                        <span className="hidden sm:inline md:hidden">More</span>
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="project-2-corner-1 absolute top-0 right-0 w-[90px] h-[90px] bg-[#f26f76] flex items-center justify-center">
            <h1 className="text-center text-black font-bold rotate-45 -translate-y-2.5 translate-x-2.5">Epic</h1>
        </div>
        <div className="project-4-corner-1 absolute top-0 lef-0 w-[90px] h-[90px] bg-[#f26f76] flex items-center justify-center">
            <h1 className="text-center text-black font-bold -rotate-45 -translate-x-2.5 -translate-y-2.5">5 / 6</h1>
        </div>
    </div>
  );
};

export default Project;