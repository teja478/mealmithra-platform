import { ClipboardCheck, CookingPot, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Choose Your Plan",
    description:
      "Complete a simple booking form and select your monthly MealMithra subscription.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CookingPot,
    title: "We Prepare Fresh Meals",
    description:
      "Our kitchen prepares hygienic, balanced meals fresh every working day.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Truck,
    title: "Delivered to Your Office",
    description:
      "Enjoy timely lunch deliveries directly at your workplace without daily ordering.",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-white to-orange-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-orange-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Healthy office lunches in three simple steps.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We've made subscribing simple so you can focus on your work while
            we take care of lunch.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative rounded-3xl border border-orange-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                >
                  <Icon size={30} />
                </div>

                <span className="text-sm font-semibold text-orange-500">
                  Step {index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-neutral-900">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}