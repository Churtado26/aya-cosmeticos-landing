'use client'
import { useState, useRef } from "react";
import { UserIcon, ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showError = (msg: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setErrorMessage(msg);
    timerRef.current = setTimeout(() => {
      setErrorMessage("");
      timerRef.current = null;
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (timerRef.current) clearTimeout(timerRef.current);
    setErrorMessage("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !message) return showError("Por favor completa todos los campos");
    if (name.length < 3) return showError("El nombre es muy corto");

    const text = encodeURIComponent(`Hola, soy ${name}. ${message}`);
    window.open(`https://wa.me/573015026353?text=${text}`, "_blank");
    form.reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ x: 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="grid gap-6 gray-color-square border border-slate-800 p-8 rounded-3xl text-slate-300"
    >
      <div>
        <p className="mb-2 font-medium text-black">Nombre</p>
        <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:main-border-color transition">
          <UserIcon className="size-5 text-slate-500" />
          <input name="name" type="text" placeholder="Tu nombre" className="w-full p-3 bg-transparent outline-none text-black" />
        </div>
      </div>

      <div>
        <p className="mb-2 font-medium text-black">Mensaje</p>
        <textarea name="message" rows={5} placeholder="¿En qué podemos ayudarte?" className="w-full p-3 bg-transparent outline-none rounded-lg border border-slate-700 focus-within:main-border-color resize-none transition text-black" />
      </div>

      <AnimatePresence>
        {errorMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-500/10 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-sm"
          >
            ⚠️ {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <button type="submit" className="w-full sm:w-max flex items-center justify-center gap-2 main-bg-color text-white px-8 py-3 rounded-full transition">
        Enviar por WhatsApp <ArrowRightIcon className="size-5" />
      </button>
    </motion.form>
  );
};