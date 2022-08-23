import { Navbar } from "../components/header/Navbar";
import { Hero } from "../components/hero/Hero";
import { SideNav } from "../components/sideNav/SideNav";


export const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="md:flex bg-gray-100 pt-20">
                <div className="flex-2">
                    <SideNav />
                </div>
                <div className="flex-8">
                    <Hero />
                </div>
            </div>
        </>

    )
}
