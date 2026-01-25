'use client'
import { CheckIcon, ChevronRightIcon } from "lucide-react";
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

            {/* Badge */}
            <motion.div
                className="flex items-center gap-2 rounded-full p-1 pr-4 mt-44 text-violet-100 bg-violet-500/10"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
            >
                <span className="bg-violet-700 text-white text-xs px-3.5 py-1 rounded-full">
                    NUEVO
                </span>
                <p className="flex items-center gap-1 text-sm gray-color-text">
                    Distribución de cosméticos en Colombia
                    <ChevronRightIcon size={16} />
                </p>
            </motion.div>

            {/* Title */}
            <motion.h1
                className="text-5xl/16 md:text-6xl/20 max-w-2xl text-center mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70 }}
            >
                <span>
                    Belleza profesional en {" "}
                </span>
                <span className="move-gradient px-3 rounded-xl text-nowrap italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
                    cada producto
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-base text-center text-slate-300 max-w-lg mt-6 gray-color-text"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
            >
                Productos cosméticos de alta calidad para emprendedores, tiendas y clientes finales.
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
                    className="flex items-center gap-2 border main-border-color ransition rounded-full px-6 h-11"
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
