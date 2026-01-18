import { footerData } from "../data/footer";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <a href="#" className="self-center">
                    <img className="size-20 aspect-square" src="/pixels-reactjs/assets/FooterLogo.png" alt="footer logo"/>
                </a>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="max-w-60 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    {link.href.startsWith("http") ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="main-color transition"
                                        >
                                            {link.name}
                                        </a>
                                        ) : (
                                        <Link
                                            to={link.href}
                                            className="main-color transition"
                                        >
                                            {link.name}
                                        </Link>
                                        )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60 italic font-semibold">"Belleza profesional en cada producto."</p>
                <div className="flex items-center gap-5 mt-3">
                <a
                    href="https://www.instagram.com/cosmeticos_aya/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                     <FaInstagram className="text-[25px] main-color transition" />
                </a>

                <a
                    href="https://www.facebook.com/cosmeticosaya2013"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-[25px] main-color transition" />
                </a>

                <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="text-[25px] main-color transition" />
                </a>
                </div>

                <p className="mt-3 text-center text-slate-400"> &copy; By César Hurtado • {new Date().getFullYear()}</p>
            </motion.div>
        </footer>
    );
}