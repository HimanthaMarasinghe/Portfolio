import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="text-4xl font-bold">SKILLS</h1>
            <div className="flex-1 overflow-auto mt-5 p-1 border-3 border-[#00f5d4]" style={{ scrollbarWidth: 'none' }}>
      {/* <div className="flex-1 mt-5 p-1 border-3 border-[#00f5d4] drop-shadow-[0_0_20px_#AB8BFF]"> */}
        <div className="p-5 bg-[#00f5d41f] backdrop-blur-sm">
          <div className="flex flex-row gap-2">
            <div className="flex-1">
              <h1 className="text-5xl font-bold">Himantha Marasinghe</h1>
              <h1 className="text-xl" style={{ fontFamily: 'var(--font-geist-mono)' }}>About Me</h1>
              <p style={{ fontFamily: 'var(--font-geist-sans)' }}>
                I am an undergraduate with a strong passion for building efficient and user-focused software solutions. 
                I am a quick learner who adapts well to new technologies and enjoys solving challenging problems. With good communication skills and a collaborative mindset, 
                I thrive in team environments while also taking responsibility to contribute effectively and deliver results.
              </p>
            </div>
            <div>
              <div className="border-1 border-[#00f5d4] rounded-xl p-1 h-50 w-50">
                <img
                  src="/Profile/Profile.jpg"
                  className="object-cover bg-white rounded-md aspect-square"
                    />
              </div>
              <a
                href="/resume.pdf"
                download="Himantha_Marasinghe_Resume.pdf"
                className="border-1 mt-3 border-[#00f5d4] rounded p-1 flex justify-center items-center gap-1 bg-black relative"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                Download Resume
                <FontAwesomeIcon icon={faDownload} size="lg" />
              </a>
            </div>
          </div>
          
          <h1 className="text-xl mt-5 mb-2" style={{ fontFamily: 'var(--font-geist-mono)' }}>Education</h1>
          <div className="flex gap-5 flex-col xl:flex-row" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            <div className="border-1 border-[#00f5d4] rounded-xl p-3 flex-1 flex gap-5">
              <img 
                src="/Profile/UCSC.png"
                className="h-30 w-30 object-contain bg-white rounded-md"
                />
                <div>
                  <h1 className="text-xl font-bold">University Of Colombo School of Computing</h1>
                  <h2>BSc (Hons) in Information Systems</h2>
                  <h2 className="text-[#bababa]">2022 - Present</h2>
                </div>
            </div>
            <div className="border-1 border-[#00f5d4] rounded-xl p-3 flex-1 flex gap-5">
              <img 
                src="/Profile/Maliyadeva.png"
                className="h-30 w-30 object-contain bg-white p-1 rounded-md"
                />
                <div>
                  <h1 className="text-xl font-bold">Maliyadeva College</h1>
                  <h2>GCE OL & GCE AL (Physical Science)</h2>
                  <h2 className="text-[#bababa]">2012 - 2021</h2>
                </div>
            </div>
          </div>

          <div className="flex justify-between flex-col md:flex-row" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            <div>
              <h1 className="text-xl mt-5 mb-2">Find Me Online</h1>
              <div className="flex gap-5">
                <Link 
                  href="https://linkedin.com/in/himantha-marasinghe"
                  target="_blank"
                  >
                    <img
                      src="/Social/LinkedIn.png"
                      className="h-10 w-10 object-contain bg-white p-1 rounded-md"
                    />
                  </Link>
                <Link 
                  href="https://www.facebook.com/profile.php?id=100093540554863"
                  target="_blank"
                  >
                    <img
                      src="/Social/Facebook.png"
                      className="h-10 w-10 object-contain bg-white p-1 rounded-md"
                    />
                  </Link>
                <Link 
                  href="https://github.com/HimanthaMarasinghe"
                  target="_blank"
                  >
                    <img
                      src="/Social/github.png"
                      className="h-10 w-10 object-contain bg-white p-1 rounded-md"
                    />
                  </Link>
              </div>
            </div>
            <div className="md:text-right">
              <h1 className="text-xl mt-5 mb-2">Contact Me</h1>
              <p>+94 70 295 5010</p>
              <a href="mailto:himanthamarasinghe@gmail.com">himanthamarasinghe@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
