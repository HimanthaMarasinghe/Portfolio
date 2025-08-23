import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleInfo, faGraduationCap, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Project = () => {
    useEffect(() => {
        const container = document.getElementById("p4-container");
        const targets = [
            document.getElementById("p4-overflow-hidden-1"),
            document.getElementById("p4-overflow-hidden-2"),
            document.getElementById("p4-overflow-hidden-3")
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
        <div className="project-4-wrapper bg-[#f5fa61] w-full h-full p-1">
            <div className="project-4 bg-gray-800 w-full h-full overflow-hidden">
                <div id="p4-container" className="h-[calc(100%_-_55px)] w-full overflow-hidden">
                    <div className="h-1/2 w-full overflow-hidden p-1">
                        <img
                            src="/TradeTrack.png"
                            alt="TradeTrack"
                            className="project-image w-full h-full object-contain bg-[#cafffb33]"
                        />
                    </div>
                    <div className="h-1/2 p-2 pt-1 text-[#f5fa61] flex flex-col justify-start">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2">
                            <h2 className="text-2xl font-bold tracking-wider neon-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                ReidXtreme
                            </h2>
                            <h5 className="text-xs">Sep 2024</h5>
                        </div>
                        <ul
                            className="text-sm text-[#cafffb] leading-relaxed break-words grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-7 list-disc pl-5"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                            >
                            <li id="p4-overflow-hidden-2">
                                A single-page React app created as part of the recruitment process for the
                                IEEE Student Branch at UCSC.
                            </li>
                            <li id="p4-overflow-hidden-1">
                                This app showcases details for reidXtreme, a hackathon competition.
                            </li>
                        </ul>

                        <div id="p1-overflow-hidden-3" className="flex flex-wrap items-center justify-between gap-2 mt-2 w-full h-full">
                            <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 mt-2 h-full">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faGraduationCap} size="xl"/>
                                    <h6 className="text-xs">Univesity</h6>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-end gap-2 h-full">
                                <img src="/logos/React.png" alt="React" className="w-10 sm:w-18  object-contain" />
                                <img src="/logos/mui.png" alt="Material-UI" className="w-10 sm:w-18  object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[55px] w-full flex items-center justify-end p-2 pr-[220px] gap-5">
                    <Link 
                        href="https://github.com/HimanthaMarasinghe/TradeTrack" 
                        target="_blank" 
                        className="text-sm md:text-lg text-[#f5fa61] hover:text-white transition-colors duration-300 mr-4"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}>
                        GitHub
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                    <Link 
                        href="/" 
                        className="text-sm md:text-lg text-[#f5fa61] hover:text-white transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                        >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-1 !hidden lg:!inline" />
                        <span className="hidden lg:inline">More Details</span>
                        <span className="lg:hidden">More</span>
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="project-4-corner-1 absolute top-0 left-0 w-[90px] h-[90px] bg-[#f5fa61] flex items-center justify-center">
            <h1 className="text-center text-black font-bold -rotate-45 -translate-x-2.5 -translate-y-2.5">4 / 6</h1>
        </div>
        <div className="project-4-corner-2 absolute bottom-0 right-0 w-[195px] h-[45px] bg-[#f5fa61] flex items-center justify-center">
            <h1 className="text-center text-black font-bold">Common</h1>
        </div>
    </div>
  );
};

export default Project;