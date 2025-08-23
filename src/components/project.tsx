const Project = ({
  project,
}: {
  project: { image: string; title: string; description: string };
}) => {
  return (
    <div className="w-full h-[70vh] relative top-1/2 transform -translate-y-1/2 rounded-xl overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] border border-[#00f5d4] transition-shadow duration-300">
      <div className="h-1/2 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="h-1/2 p-4 text-[#00f5d4] flex flex-col justify-between">
        <h2 className="text-2xl font-bold tracking-wider mb-2 neon-text">
          {project.title}
        </h2>
        <p className="text-sm text-[#cafffb] leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;

