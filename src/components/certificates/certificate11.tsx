export default () => {

  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-5-wrapper bg-[#f26f76] w-full h-full p-1">
            <div className="project-5 bg-gray-800 w-full h-full overflow-hidden flex flex-col justify-center items-center py-15" style={{ fontFamily: "var(--font-geist-sans)" }}>
                <h1>Python Automation - Udemy</h1>
                <img src="/Certificates/Python.jpg" className="object-contain max-h-full sm:px-15 md:px-0" />
            </div>
        </div>
        <div className="project-2-corner-1 absolute top-0 right-0 w-[90px] h-[90px] bg-[#f26f76] flex items-center justify-center">
            <h1 className="text-center text-black font-bold rotate-45 -translate-y-2.5 translate-x-2.5">Python</h1>
        </div>
        <div className="project-4-corner-1 absolute top-0 lef-0 w-[90px] h-[90px] bg-[#f26f76] flex items-center justify-center">
            <h1 className="text-center text-black font-bold -rotate-45 -translate-x-2.5 -translate-y-2.5">11 / 11</h1>
        </div>
    </div>
  );
};