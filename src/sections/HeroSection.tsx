'use client'
import { CheckIcon} from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";

export default function HeroSection() {
    const benefits = [
        "Productos seleccionados",
        "Atención personalizada",
        "Envíos a nivel nacional",
    ];

    return (
        <div
            id="inicio"
            className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32"
        >
            {/* Glow background */}
            <div className="absolute top-32 -z-10 left-1/4 size-72 main-bg-color blur-[190px]" />

            {/* Title */}
            <motion.h1
                className="text-5xl/16 md:text-6xl/20 max-w-2xl text-center mt-30"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70 }}
            >
                <span>
                    Distribuidores de cosméticos profesionales en Colombia {" "}
                </span>
                <span className="move-gradient px-3 rounded-xl text-nowrap italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
                    Vitalbell
                </span>
            </motion.h1>

            <motion.h2
            className="text-2xl md:text-3xl max-w-2xl text-center mt-6 italic font-light"
            >
            <span>" Belleza profesional en</span>
            <span className="move-gradient px-3 rounded-xl italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
                cada producto
            </span>
            <span>"</span>
            </motion.h2>


            {/* Subtitle */}
            <motion.p
                className="text-base text-center text-slate-300 max-w-lg mt-6 gray-color-text"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
            >
                En Vitalbell distribuimos productos cosméticos de alta calidad para emprendedores,
                tiendas de belleza y clientes finales, incluyendo marcas reconocidas como <strong>Nikol's</strong>, <strong>Belier</strong> y <strong>MyK</strong>.
            </motion.p>

            {/* Buttons */}
            <motion.div
                className="flex items-center gap-4 mt-8 flex-wrap justify-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70 }}
            >
                <a
                    href="#productos"
                    className="main-bg-color text-white rounded-full px-7 h-11 flex items-center"
                >
                    Ver productos
                </a>

                <a
                    href="https://wa.me/573015026353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border main-border-color transition rounded-full px-6 h-11"
                >
                    Contáctanos
                </a>
            </motion.div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 mt-12">
                {benefits.map((benefit, index) => (
                    <motion.p
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <CheckIcon className="size-5 main-icon-color" />
                        <span className="gray-color-text">{benefit}</span>
                    </motion.p>
                ))}
            </div>

            {/* Image */}
            <TiltedImage />
        </div>
    );
}
