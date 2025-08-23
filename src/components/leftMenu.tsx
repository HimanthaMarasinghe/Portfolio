"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftMenu() {
  const pathname = usePathname();

  const links = [
    { href: "/profile", label: "PROFILE" },
    { href: "/skills", label: "SKILLS" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/certificates", label: "CERTIFICATES" },
  ];

  return (
    <>
      {/* Desktop (Left Sidebar) */}
      <div className="hidden md:flex flex-col justify-between my-20 w-60">
        <div>
          <h1 className="font-bold text-2xl">HIMANTHA</h1>
        </div>
        <div className="flex flex-col">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <h2
                  className={`my-2 text-xl py-1 px-2 tab-path font-extrabold
                    ${isActive
                      ? "bg-[#00f5d4] text-black"
                      : "text-gray-300 bg-gray-400/50 hover:bg-gray-600 hover:text-white"
                    }`}
                >
                  {link.label}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile (Bottom Bar) */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around py-3 md:hidden">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <span
                className={`px-3 font-bold
                  ${isActive
                    ? "text-[#00f5d4]"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}