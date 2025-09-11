"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CardsExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <AnimatePresence>
        {!open && (
          <motion.button
            layoutId="glass-card"
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-lg"
            transition={{
              layout: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
            }}
          >
            Abrir modal
          </motion.button>
        )}

        {open && (
          <>
            {/* 🔹 Overlay glass con blur */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* 🔹 Contenedor principal animado */}
            <motion.div
              layoutId="glass-card"
              className="fixed inset-0 flex items-center justify-center z-20"
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  mass: 0.8,
                },
              }}
            >
              {/* 🔹 Caja modal glassmorphism */}
              <motion.div
                className="w-96 h-64 p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white"
                initial={{ borderRadius: "2rem", scale: 0.95 }}
                animate={{ borderRadius: "1rem", scale: 1 }}
                exit={{ borderRadius: "2rem", scale: 0.9, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  Modal estilo Glass ✨
                </h2>
                <p className="mb-4">
                  Este modal se abre como una sábana y vuelve al botón al cerrar.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Cerrar
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
