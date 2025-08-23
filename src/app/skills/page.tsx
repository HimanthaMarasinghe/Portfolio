import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { BatteryMedium } from "lucide-react";

import Wheel from "../../components/wheel";

export default function ContactUs() {
  return (
    <div className="h-full w-full flex flex-col relative">
      <h1 className="text-4xl font-bold">SKILLS</h1>
        <div className="flex-1 w-full overflow-auto mt-5 p-1 border-3 border-[#00f5d4]" style={{ scrollbarWidth: 'none' }}>
        <div className="p-5 min-h-full bg-[#00f5d41f] flex flex-col" style={{ fontFamily: 'var(--font-geist-sans)' }}>
          <div className="flex items-center justify-around gap-15 mb-15 flex-col xl:flex-row">
            <div>
              <Wheel items={[
                { image: "/Logos/Bootstrap.png", label: "Bootstrap" },
                { image: "/Logos/mui.png", label: "MUI" },
                { image: "/Logos/React.png", label: "React-Native" },
                { image: "/Logos/React.png", label: "React" },
                { image: "/Logos/Next.webp", label: "Next.js" },
                { image: "/Logos/Tailwind.png", label: "Tailwind" },
                { image: "/Logos/jfx.png", label: "JavaFX" },
              ]}
              centerText="Front-End"
              />
            </div>
            <div>
              <Wheel items={[
                { image: "/Logos/express.png", label: "Express.js" },
                { image: "/Logos/Kafka.svg", label: "Kafka" },
                { image: "/Logos/Spring.png", label: "Spring-Boot" },
                { image: "/Logos/Node.png", label: "Node.js" },
                { image: "/Logos/Redis.png", label: "Redis" },
                { image: "/Logos/appwrite.png", label: "Appwrite" },
              ]}
              centerText="Back-End"
              />
            </div>
          </div>
          <div className="flex items-center justify-around gap-15 mb-15 flex-col xl:flex-row">
            <div>
              <Wheel items={[
                { image: "/Logos/Redis.png", label: "Redis" },
                { image: "/Logos/MySQLBG.png", label: "MySQL" },
                { image: "/Logos/PostgrSQL.png", label: "PostgreSQL" },
                { image: "/Logos/OracleDB.png", label: "OracleDB" },
                { image: "/Logos/Mongo.webp", label: "MongoDB" },
              ]}
              centerText="Databases"
              />
            </div>
          </div>
          <div className="flex items-center justify-around gap-15 mb-15 flex-col xl:flex-row">
            <div>
              <Wheel items={[
                { image: "/Logos/PHP.png", label: "PHP" },
                { image: "/Logos/TS.png", label: "TypeScript" },
                { image: "/Logos/JS.png", label: "JavaScript" },
                { image: "/Logos/Java.png", label: "Java" },
                { image: "/Logos/C.png", label: "C" },
                { image: "/Logos/R.png", label: "R" },
              ]}
              centerText="Languages"
              />
            </div>
            <div>
              <Wheel items={[
                { image: "/Logos/Docker.png", label: "Docker" },
                { image: "/Logos/Linux.png", label: "Linux" },
                { image: "/Logos/Git.png", label: "Git" },
                { image: "/Logos/github.webp", label: "GitHub" },
                { image: "/Logos/MavenBG.jpeg", label: "Maven" },
                { image: "/Logos/AWS.png", label: "AWS" },
              ]}
              centerText="Other"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#00f5d4] p-1 pl-6 h-20 w-40 -bottom-5 -right-4 -z-1 flex gap-2 profile-c-r">
          <div className="h-full w-3 bg-black" />
          <div className="h-full w-3 bg-black" />
          <div className="h-full w-3 bg-black" />
      </div>
      <div className="absolute bg-[#00f5d4] h-5 w-20 top-10 right-0 flex gap-1 justify-center items-center profile-c-r-t">
        <BatteryMedium size={20} color="black" />
        <FontAwesomeIcon icon={faWifi} size="sm" color="black" />
      </div>
      <div className="absolute bg-[#00f5d4] h-40 w-6 bottom-0 -left-6 text-black font-bold profile-c-l flex flex-col items-center justify-center py-10">
        <img src="/Down.webp" className="h-[80%] w-[80%] object-contain" />
        <img src="/Down.webp" className="h-[80%] w-[80%] object-contain" />
        <img src="/Down.webp" className="h-[80%] w-[80%] object-contain" />
        <img src="/Down.webp" className="h-[80%] w-[80%] object-contain" />
        <img src="/Down.webp" className="h-[80%] w-[80%] object-contain" />
        <img src="/Down.webp" className="h-[80%] w-[80%] object-contain" />
      </div>
    </div>
  );
}
