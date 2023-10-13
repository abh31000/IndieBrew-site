import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"
import HamburgerMenu from "../assets/ham-menu.svg"
import { Button } from "./ui/button"
import { Separator } from "@/components/ui/separator"

export default function Navbar():JSX.Element {
    return(
        <>
            <div className="flex justify-between min-[946px]:mx-32 mx-6 min-[506px]:mx-16 min-[506px]:mt-8 mt-6">
                <img className="py-2" src={Logo} alt="Logo" />
                <div className="min-[768px]:flex hidden space-x-2">
                    <Link className="my-auto" to="/"><Button className="text-base" variant="ghost">Pricing</Button></Link>
                    <Link className="my-auto" to="/"><Button className="text-base" variant="ghost">Support</Button></Link>
                    <Link className="my-auto flex bg-[#664efc] hover:bg-opacity-90 transition-opacity duration-200 py-3.5 px-5 text-white font-semibold rounded-md" to="/sign-up">
                        Get Started<Separator className="w-3 ml-1 my-auto"/><span className="ml-1 font-light">it's free</span>
                    </Link>
                </div>
                <Button className="max-[767px]:block hidden my-auto" variant="ghost" size="icon">
                    <img className="h-4 mx-auto" src={HamburgerMenu} />
                </Button>
            </div>
        </>
    )
}