import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

export default function Heading():JSX.Element {
    return(
        <>
            <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{ delay:0.2, duration: 0.7 }} className="min-[1359px]:flex overflow-hidden min-[1359px]:flex-row-reverse grid min-[1359px]:justify-between justify-center min-[1359px]:mx-32 mx-6 my-14">
                <img className="min-[1359px]:w-[530px] w-[420px] mx-auto mb-4 mr-10" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1697284639/Feed_Mockup_txaucm.png" alt="" />
                <div className="my-auto">
                    <h1 className="text-[52px] max-w-[525px] leading-none font-semibold" >Your weekly personal feed digest.</h1>
                    <p className="text-gray-600 mt-3 max-w-[525px]">With IndieBrew, get personal feeds from resources all around the web, including Reddit, HackerNews, IndieHackers, and much more.</p>
                    <Link className="my-auto mt-4 w-52 flex bg-[#664efc] hover:bg-opacity-90 transition-opacity duration-200 py-3.5 px-5 text-white font-semibold rounded-md" to="/sign-up">
                        Get Started<Separator className="w-3 ml-1 my-auto"/><span className="ml-1 font-light">it's free</span>
                    </Link>
                    <img className="mt-4 w-52" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1697284739/User_Avatars_pacesu.svg" alt="" />
                    <p className="mt-1 text-gray-600">Join<span className="text-[#664efc] font-bold"> 32,362 </span>IndieBrewers in curating their personal digest.</p>
                </div>
            </motion.div>
        </>
    )
}