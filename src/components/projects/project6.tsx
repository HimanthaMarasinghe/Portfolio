const Project = () => {
  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-6-wrapper bg-red-500 w-full h-full p-1">
            <div className="project-6 bg-gray-800 w-full h-full pb-10">
                <div className="h-1/2 w-full overflow-hidden p-1">
                    <img
                        src="/Groot head.jpg"
                        alt="Groot headers"
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="h-1/2 p-4 text-[#00f5d4] flex flex-col justify-between">
                    <h2 className="text-2xl font-bold tracking-wider mb-2 neon-text">
                    Groot Project 6
                    </h2>
                    <p className="text-sm text-[#cafffb] leading-relaxed">\
                        This project is a groot project.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Project;