import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-2.5 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="#">
                    <img className="h-21 w-auto" src="/pixels-reactjs/assets/LogoVital.png" alt="Vital Bell Distribuciones"/>
                </a>

                <div className="hidden md:flex items-center gap-8 transition text-lg font-medium duration-500">
                    {navlinks.map((link: INavLink) => (
                        <a href={link.href} className="main-color transition">{link.name}</a>
                    ))}
                </div>

                <a
                href="https://wa.me/573015026353"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block px-6 py-2.5 main-bg-color active:scale-95 transition-all rounded-full text-white"
                >
                Contáctanos
                </a>

                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link: INavLink) => (
                    <a href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}