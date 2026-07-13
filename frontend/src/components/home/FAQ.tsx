"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is MealMithra?",
    answer:
      "MealMithra delivers fresh, home-style lunch subscriptions for professionals, offices, and fitness enthusiasts across Hyderabad.",
  },
  {
    question: "Which areas do you currently serve?",
    answer:
      "We currently serve Madhapur, HITEC City, Gachibowli, Financial District and nearby office locations.",
  },
  {
    question: "Can I choose vegetarian or non-vegetarian meals?",
    answer:
      "Yes. We provide vegetarian meals every day, along with one premium non-vegetarian meal every week in the subscription plan.",
  },
  {
    question: "Can I pause my subscription?",
    answer:
      "Absolutely. Just let us know in advance and we'll pause or resume your meal plan as requested.",
  },
  {
    question: "How hygienic is the food preparation?",
    answer:
      "All meals are freshly prepared using quality ingredients in hygienic kitchens while maintaining strict food safety standards.",
  },
  {
    question: "How do payments work?",
    answer:
      "You can pay securely every month. Online payment integration will be available before launch.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F4FBF5] py-28"
    >
      {/* Background Blobs */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            <HelpCircle size={18} />
            Frequently Asked Questions
          </div>

          <h2 className="mt-8 text-5xl font-bold text-[#262626]">
            Everything you need
            <span className="text-orange-500"> to know.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We answered the questions customers ask us the most.
          </p>

        </motion.div>

        <div className="space-y-6">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <motion.div
                key={index}
                layout
                transition={{
                  layout: {
                    duration: .35,
                    type: "spring",
                    bounce: .2
                  }
                }}
                className={`rounded-[28px] border bg-white shadow-lg overflow-hidden
                ${
                  active
                    ? "border-green-400 shadow-green-100"
                    : "border-transparent"
                }`}
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left transition hover:bg-green-50"
                >                                                       

                  <span className="text-xl font-semibold text-[#262626]">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: active ? 180 : 0 }}
                    transition={{ duration: .25 }}
                    className={`rounded-full p-2
                    ${
                      active
                        ? "bg-orange-500 text-white"
                        : "bg-green-100 text-green-700"
                    }`}
                  >

                    {active ? <X size={18}/> : <Plus size={18}/>}

                  </motion.div>

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: .35
                      }}
                      className="overflow-hidden"
                    >

                      <div className="px-7 pb-7">

                        <div className="h-px bg-gradient-to-r from-green-300 via-orange-200 to-transparent mb-6"/>

                        <p className="leading-8 text-gray-600">
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}