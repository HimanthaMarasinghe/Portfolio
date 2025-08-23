import Link from "next/link"

export default () => {

    return (
        <div className="flex flex-col justify-between my-20">
            <div>
                <h1 className="font-bold text-2xl">HIMANTHA</h1>
            </div>
            <div className="flex flex-col w-40">
                <Link href="/profile"><h2 className="my-2 hover:font-extrabold text-xl text-gray-300 py-1 px-2 hover:bg-gray-600 bg-gray-600/50 hover:text-white">PROFILE</h2></Link>
                <Link href="/skills"><h2 className="my-2 hover:font-extrabold text-xl text-gray-300 py-1 px-2 hover:bg-gray-600 bg-gray-600/50 hover:text-white">SKILLS</h2></Link>
                <Link href="/projects"><h2 className="my-2 hover:font-extrabold text-xl text-gray-300 py-1 px-2 hover:bg-gray-600 bg-gray-600/50 hover:text-white">PROJECTS</h2></Link>
            </div>
        </div>
    )
}