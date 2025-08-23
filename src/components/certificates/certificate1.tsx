export default () => {
  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 overflow-hidden transition-shadow duration-300">
        <div className="project-1-wrapper bg-[#00f5d4] w-full h-full p-1">
            <div className="project-1 bg-gray-800 w-full h-full overflow-hidden flex flex-col justify-center items-center py-15" style={{ fontFamily: "var(--font-geist-sans)" }}>
                <h1>Azure Data Fundamentals</h1>
                <img src="/Certificates/Azure.jpg" className="object-contain max-h-full sm:px-15 md:px-0" />
            </div>
        </div>
        <div className="project-1-corner absolute top-0 right-0 w-[90px] md:w-[290px] h-[40px] bg-[#00f5d4] flex items-center justify-center">
            <h1 className="text-center text-black font-bold">Azure</h1>
        </div>
        <div className="project-1-corner absolute bottom-0 left-0 w-[90px] h-[40px] bg-[#00f5d4] flex items-center justify-center">
            <h1 className="text-center text-black font-bold">1 / 11</h1>
        </div>
    </div>
  );
};