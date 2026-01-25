'use client'
import { motion } from "motion/react";
import ImageCarousel from "../components/ImageCarousel";
import { Download } from "lucide-react";
import { Sparkles } from "lucide-react";

const nikolsImages = [
    "public/assets/nikols/CATALOGO VITAL BELL_page-0003.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0004.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0005.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0006.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0007.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0008.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0009.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0010.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0011.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0012.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0013.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0014.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0015.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0016.jpg",
    "public/assets/nikols/CATALOGO VITAL BELL_page-0017.jpg",
];

const belierImages = [
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0009.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0010.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0011.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0012.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0013.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0014.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0015.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0016.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0017.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0018.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0019.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0020.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0021.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0022.jpg",
    "public/assets/belier/catalogo DIGITAL comercial BELIERIMG_compressed_page-0023.jpg",
];

export default function ProductsSection() {
    return (
        <section
            id="productos"
            className="px-4 md:px-16 lg:px-24 xl:px-32 mt-40"
        >
            <div className="absolute -z-10 size-100 top-20 left-1/2 -translate-x-1/2 aspect-square rounded-full main-bg-color/30 blur-[200px]"></div>
            {/* Section title */}
            <motion.div
                className="text-center max-w-xl mx-auto"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl font-medium text-whitemove-gradient px-3 rounded-xl text-nowrap italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
                    Nuestras marcas
                </h2>
                <p className="text-slate-400 mt-4 gray-color-text text-base">
                    Distribuimos productos cosméticos de alta calidad,
                    seleccionados para cuidar cada detalle.
                </p>
            </motion.div>

            {/* Nikols */}
            <motion.div
                className="mt-24 rounded-3xl border border-slate-800 gray-color-square p-8"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="size-6 text-violet-400" />
                    <h3 className="text-3xl text-black font-medium italic">
                        Nikol's
                    </h3>
                </div>
                <p className="gray-color-text mt-2 max-w-xl text-base">
                    Línea profesional de productos capilares y de cuidado personal,
                    reconocida por su calidad y resultados.
                </p>

                <ImageCarousel images={nikolsImages} />

                <a
                    href="public/assets/nikols/catalogo-nikols.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 main-bg-color text-white rounded-full px-6 py-3 transition"
                >
                    <Download className="size-5" />
                    Ver catálogo Nikol's
                </a>
            </motion.div>

            {/* Belier */}
            <motion.div
                className="mt-20 rounded-3xl border border-slate-800 gray-color-square p-8"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="size-6 text-violet-400" />
                    <h3 className="text-3xl text-black font-medium italic">
                        Belier
                    </h3>
                </div>
                <p className="gray-color-text mt-2 max-w-xl text-base">
                    Productos cosméticos pensados para realzar la belleza natural.
                </p>

                <ImageCarousel images={belierImages} />

                <a
                    href="public/assets/belier/catalogo-belier.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 main-bg-color text-white rounded-full px-6 py-3 transition"
                >
                    <Download className="size-5" />
                    Ver catálogo Belier
                </a>
            </motion.div>
        </section>
    );
}
