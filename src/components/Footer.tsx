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
                <a href="#">
                    <img className="size-8 aspect-square" src="/pixels-reactjs/assets/footer-logo.svg" alt="footer logo" width={32} height={32} />
                </a>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    {link.href.startsWith("http") ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-pink-600 transition"
                                        >
                                            {link.name}
                                        </a>
                                        ) : (
                                        <Link
                                            to={link.href}
                                            className="hover:text-pink-600 transition"
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
                <p className="max-w-60">Belleza que inspira confianza, cuidando cada detalle de ti.</p>
                <div className="flex items-center gap-5 mt-3">
                <a
                    href="https://www.instagram.com/cosmeticos_aya/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                     <FaInstagram className="text-[25px] hover:text-pink-500 transition" />
                </a>

                <a
                    href="https://www.facebook.com/cosmeticosaya2013"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-[25px] hover:text-pink-500 transition" />
                </a>

                <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="text-[25px] hover:text-green-500 transition" />
                </a>
                </div>

                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} <a href="https://prebuiltui.com?utm_source=pixels" target="_blank">PrebuiltUI</a> • Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
            </motion.div>
        </footer>
    );
}