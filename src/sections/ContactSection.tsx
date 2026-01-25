import { MailIcon, PhoneIcon, MapPinIcon, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm"; // Importas el nuevo componente

export default function ContactSection() {
  return (
    <div id="contacto" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-40">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-medium italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
          Contacto
        </h2>
        <p className="text-lg mt-2 gray-color-text">Hablemos de belleza profesional</p>
        <p className="mt-1 gray-color-text">¿Tienes dudas sobre nuestros productos o quieres distribuir nuestras marcas? Estamos aquí para asesorarte.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* INFO SIDE */}
        <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="space-y-8">
          <p className="gray-color-text leading-relaxed">
            En <strong>Vital Bell Distribuciones</strong> acompañamos a profesionales
            de la belleza con productos confiables y asesoría cercana.
            Escríbenos y recibe atención personalizada.
          </p>
          
          <div className="space-y-5">
            <ContactInfoItem icon={<MapPinIcon />} text="Piedecuesta, Santander – Colombia" />
            <ContactInfoItem icon={<PhoneIcon />} text="Atención vía WhatsApp" />
            <ContactInfoItem icon={<MailIcon />} text="contacto@vitalbell.com" />
          </div>

          <a href="https://wa.me/573015026353" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 main-bg-color text-white px-6 py-3 rounded-full transition">
            <MessageCircle className="size-5" /> Escribir por WhatsApp
          </a>
        </motion.div>

        {/* FORM SIDE */}
        <ContactForm />
      </div>
    </div>
  );
}

// Mini componente interno para no repetir código de los iconos
const ContactInfoItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-4 text-slate-300 gray-color-text">
    <span className="text-violet-400">{icon}</span>
    <p>{text}</p>
  </div>
);