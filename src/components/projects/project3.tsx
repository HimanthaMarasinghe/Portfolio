import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleInfo, faGraduationCap, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Project = () => {
    useEffect(() => {
        const container = document.getElementById("p3-container");
        const targets = [
            document.getElementById("p3-overflow-hidden-1"),
            document.getElementById("p3-overflow-hidden-2"),
            document.getElementById("p3-overflow-hidden-3")
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
        <div className="project-3-wrapper bg-white w-full h-full p-1">
            <div className="project-3 bg-gray-800 w-full h-full overflow-hidden">
                <div id="p3-container" className="h-[calc(100%_-_55px)] w-full overflow-hidden">
                    <div className="h-1/3 lg:h-1/2 w-full overflow-hidden p-1">
                        <img
                            src="/projects/EAuc/Cover.png"
                            alt="TradeTrack"
                            className="project-image w-full h-full object-cover bg-[#cafffb33]"
                        />
                    </div>
                    <div className="h-2/3 lg:h-1/2 p-2 pt-1 text-white flex flex-col justify-start">
                        <div className="flex flex-col sm:flex-row lg:items-center justify-between mb-2">
                            <h2 className="text-2xl font-bold tracking-wider neon-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                E-Auction System
                            </h2>
                            <h5 className="text-xs">Jun 2025 - Ongoing</h5>
                        </div>
                        <ul
                            className="text-sm text-[#cafffb] leading-relaxed break-words grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-7  list-disc pl-5"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                            >
                            <li id="p3-overflow-hidden-2">
                                This project is an online e-auction platform developed for Sri Lanka Customs to auction seized items through web and mobile applications.
                            </li>
                            <li id="p3-overflow-hidden-1">
                                This system is built with Spring Boot microservices, secure databases, and modern frontend frameworks, while also using Kafka, Redis, and WebSockets to ensure real-time and efficient performance.
                            </li>
                        </ul>

                        <div id="p3-overflow-hidden-3" className="flex flex-wrap items-center justify-between gap-2 w-full h-fit mt-auto">
                            <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 mt-2 h-full">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faGraduationCap} size="xl"/>
                                    <h6 className="text-xs">Univesity</h6>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faPeopleGroup} size="xl"/>
                                    <h6 className="text-xs">Group</h6>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-end gap-2 h-full ml-auto">
                                <img src="/logos/Spring.png" alt="Spring" className="h-10 w-10 object-contain" />
                                <img src="/logos/PostgrSQL.png" alt="PostgreSQL" className="h-10 w-10 object-contain" />
                                <img src="/logos/OracleDB.png" alt="OracleDB" className="h-10 w-10 object-contain" />
                                <img src="/logos/Redis.png" alt="Redis" className="h-10 w-10 object-contain" />
                                <img src="/logos/Kafka.svg" alt="Kafka" className="h-10 w-10 object-contain" />
                                <img src="/logos/React.png" alt="React" className="h-10 w-10 object-contain" />
                                <img src="/logos/reactnative.svg" alt="React-Native" className="h-10 w-10 object-contain" />
                                <img src="/logos/Tailwind.png" alt="Tailwind" className="h-10 w-10 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[55px] w-full flex items-center justify-end p-2 gap-5">
                    <Link 
                        href="https://github.com/HimanthaMarasinghe/TradeTrack" 
                        target="_blank" 
                        className="text-sm md:text-lg text-white hover:text-[#00f5d4] transition-colors duration-300 mr-4"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}>
                        GitHub
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                    <Link 
                        href="/" 
                        className="text-sm md:text-lg text-white hover:text-[#00f5d4] transition-colors duration-300 mr-4"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                        >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-1 !hidden md:!inline" />
                        More Details
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="project-3-corner-1 absolute top-0 left-1/2 -translate-x-1/2 w-full h-[45px] bg-white flex items-center justify-center">
            <h1 className="text-center text-black font-bold">Epic</h1>
        </div>
        <div className="project-3-corner-2 absolute bottom-0 left-0 w-[140px] h-[45px] bg-white flex items-center justify-center">
            <h1 className="text-center text-black font-bold">3 / 6</h1>
        </div>
    </div>
  );
};

export default Project;