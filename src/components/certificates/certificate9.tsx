export default () => {

  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-3-wrapper bg-white w-full h-full p-1">
            <div className="project-3 bg-gray-800 w-full h-full overflow-hidden flex flex-col justify-center items-center py-15" style={{ fontFamily: "var(--font-geist-sans)" }}>
                <h1 className="mt-3">Relational Database Design - Udemy</h1>
                <img src="/Certificates/Normalization.jpg" className="object-contain max-h-full sm:px-15 md:px-0" />
            </div>
        </div>
        <div className="project-3-corner-1 absolute top-0 left-1/2 -translate-x-1/2 w-full h-[45px] bg-white flex items-center justify-center">
            <h1 className="text-center text-black font-bold">Database</h1>
        </div>
        <div className="project-3-corner-2 absolute bottom-0 left-0 w-[140px] h-[45px] bg-white flex items-center justify-center">
            <h1 className="text-center text-black font-bold">9 / 11</h1>
        </div>
    </div>
  );
};