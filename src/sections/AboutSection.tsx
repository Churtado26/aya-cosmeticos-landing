'use client'
import { motion } from "motion/react";
import { ShieldCheck, Sparkles, Store, MapPin } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <Sparkles className="text-violet-400" />,
      title: "Selección cuidadosa",
      description: "Elegimos productos cosméticos que cumplen altos estándares de calidad y efectividad."
    },
    {
      icon: <Store className="text-violet-400" />,
      title: "Marcas profesionales",
      description: "Distribuimos líneas reconocidas como Nikol's y Belier, enfocadas en resultados reales."
    },
    {
      icon: <ShieldCheck className="text-violet-400" />,
      title: "Confianza y respaldo",
      description: "Construimos relaciones duraderas basadas en transparencia y compromiso."
    },
    {
      icon: <MapPin className="text-violet-400" />,
      title: "Presencia local",
      description: "Atendemos a nuestros clientes con cercanía y conocimiento del mercado."
    }
  ];

  return (
    <section
      id="nosotros"
      className="relative px-4 md:px-16 lg:px-24 xl:px-32 mt-40"
    >
      {/* Background glow */}
      <div className="absolute -z-10 top-20 left-1/2 -translate-x-1/2 size-96 rounded-full bg-violet-600/20 blur-[200px]" />

      {/* Header */}
      <motion.div
        className="max-w-2xl text-center mx-auto"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-medium text-whitemove-gradient px-3 rounded-xl text-nowrap italic font-semibold bg-clip-text text-transparent bg-gradient-to-r
                from-pink-500 via-violet-500 to-indigo-500">
            Nosotros
        </h2>

        <p className="gray-color-text mt-5 text-lg leading-relaxed">
          En <strong>Vital Bell Distribuciones</strong> nos especializamos en la distribución de productos
          cosméticos profesionales, seleccionados cuidadosamente para ofrecer
          calidad, seguridad y resultados visibles.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">

        {/* Blur background */}
        <div className="absolute top-32 -z-10 right-1/4 size-72 main-bg-color blur-[190px]" />

        {/* Story */}
        <motion.div
          className="flex flex-col justify-center h-full max-w-xl mx-auto"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 leading-relaxed gray-color-text">
            Somos una empresa ubicada en <strong>Piedecuesta, Santander</strong> con mas de 10 años de
            trayectoria en la distribución de productos cosméticos profesionales.
            Trabajamos con marcas reconocidas como <strong>Nikol's</strong> y{" "}
            <strong>Belier</strong>, acompañando a profesionales y clientes que
            entienden el cuidado personal como una experiencia consciente, confiable y de alto valor.
          </p>

          <p className="text-slate-400 mt-4 leading-relaxed gray-color-text">
            Nuestro enfoque está en ofrecer productos confiables y un servicio
            cercano, pensado para dar tranquilidad en cada compra
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {values.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 gray-color-square p-6"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-black font-medium">{item.title}</h4>
              <p className="gray-color-text text-sm mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
