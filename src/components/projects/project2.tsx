import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faGraduationCap, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect } from "react";

const Project = () => {
    
        
    useEffect(() => {
        const container = document.getElementById("p2-container");
        const targets = [
            document.getElementById("p2-overflow-hidden-1"),
            document.getElementById("p2-overflow-hidden-2"),
            document.getElementById("p2-overflow-hidden-3")
        ];

        const handleOverflow = () => {
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
            window.removeEventListener('resize', debouncedHandleOverflow);
        };
    }, []);
    
  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-1-wrapper bg-[#00f5d4] w-full h-full p-1">
            <div className="project-1 bg-gray-800 w-full h-full overflow-hidden">
                <div id="p2-container" className="h-[calc(100%_-_55px)] w-full overflow-hidden">
                    <div className="h-1/3 lg:h-1/2 w-full overflow-hidden p-1">
                        <Image 
                            height={1000} width={3000}
                            src="/Projects/Trade/Cover.png"
                            alt="TradeTrack"
                            className="project-image w-full h-full object-cover bg-[#cafffb33]"
                        />
                    </div>
                    <div className="h-2/3 lg:h-1/2 p-2 pt-1 text-[#00f5d4] flex flex-col justify-start">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2">
                            <h2 className="text-2xl font-bold tracking-wider neon-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                TradeTrack
                            </h2>
                            <h5 className="text-xs">Jun 2024 - Apr 2025</h5>
                        </div>
                        <ul
                            className="text-sm text-[#cafffb] leading-relaxed break-words grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-7 list-disc pl-5"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                            >
                            <li id="p2-overflow-hidden-2">
                                This web-based system was developed to help small grocery stores in Sri Lanka manage their inventory, sales, and communication more efficiently.
                            </li>
                            <li id="p2-overflow-hidden-1">
                                The system connects shop owners, suppliers, and customers through a digital platform, replacing manual processes like handwritten ledgers and phone-based orders.
                            </li>
                        </ul>
                        <div id="p2-overflow-hidden-3" className="flex flex-wrap items-center justify-between gap-2 mt-2 w-full h-full">
                            <div className="hidden lg:flex flex-wrap items-center justify-start gap-4 mt-2 h-full">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faGraduationCap} size="xl"/>
                                    <h6 className="text-xs">University</h6>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faPeopleGroup} size="xl"/>
                                    <h6 className="text-xs">Group</h6>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-end gap-2 h-full ml-auto">
                                <Image height={40} width={40} src="/Logos/PHP.png" alt="PHP" className="h-13 w-18 rounded-2xl object-contain" />
                                <Image height={40} width={40} src="/Logos/MySQL.png" alt="MySQL" className="bg-white h-13 w-18 rounded-2xl object-contain" />
                                <Image height={40} width={40} src="/Logos/Apache_HTTP_server_logo.png" alt="Apache server" className="bg-white h-13 w-18 rounded-2xl object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[55px] w-full flex items-center justify-end p-2 gap-5">
                    <Link 
                        href="https://github.com/HimanthaMarasinghe/TradeTrack" 
                        target="_blank" 
                        className="text-sm md:text-lg text-[#00f5d4] hover:text-white transition-colors duration-300 mr-4"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}>
                        GitHub
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link>
                    {/* <Link 
                        href="/" 
                        className="text-sm md:text-lg text-[#00f5d4] hover:text-white transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-geist-mono)' }}
                        >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-1" />
                        More Details
                        <FontAwesomeIcon icon={faAnglesRight} className="ml-1 slide-animation" />
                    </Link> */}
                </div>
            </div>
        </div>
        <div className="project-1-corner absolute top-0 right-0 w-[90px] md:w-[290px] h-[40px] bg-[#00f5d4] flex items-center justify-center">
            <h1 className="text-center text-black font-bold">Epic</h1>
        </div>
        <div className="project-1-corner absolute bottom-0 left-0 w-[90px] h-[40px] bg-[#00f5d4] flex items-center justify-center">
            <h1 className="text-center text-black font-bold">2 / 7</h1>
        </div>
    </div>
  );
};

export default Project;