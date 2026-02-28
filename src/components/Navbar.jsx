import React from "react";
import { User, Route, House} from "lucide-react";

const navPages = [
    {href: "#Home", label: "Home", icon: House},
    {href: "#Journey", label: "Journey", icon: Route},
    {href: "#Profile", label: "User", icon: User},
]

export const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.ScrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full z-50 flex justify-center items-center pb-4">
            <nav className="flex items-center justify-center">
                {/*desktop nav*/}
                <div className="md:flex flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navPages.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                            <a 
                            href={link.href} 
                            key={index}
                            className="px-4 py-2 text-text hover:text-title rounded-full hover:bg-background flex items-center justify-center"
                            >
                                <IconComponent size={20} />
                            </a>
                        )})}
                    </div>
                </div>
            </nav>

            {/*
            {navPages.map((item, index) => (
                <div key={index}>
                    <item.icon classname="w-6 h-6 text-title"/>
                </div>
            ))}
                */}
        </div>
    );
};