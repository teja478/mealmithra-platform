"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SuccessModal({
  isOpen,
  onClose,
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            className="fixed left-1/2 top-1/2 z-[101] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/30 bg-white/90 p-8 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-neutral-100"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center">

              <div className="mb-6 rounded-full bg-green-100 p-5">
                <CheckCircle2
                  size={56}
                  className="text-green-600"
                />
              </div>

              <h2 className="text-3xl font-bold text-neutral-900">
                Booking Received!
              </h2>

              <p className="mt-5 leading-7 text-neutral-600">
                Thank you for choosing
                <span className="font-semibold text-orange-600">
                  {" "}MealMithra
                </span>.
                <br />
                Our team will contact you shortly to confirm your
                subscription.
              </p>

              <button
                onClick={onClose}
                className="mt-8 rounded-2xl bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Continue
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}