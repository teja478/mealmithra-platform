import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Fresh home-style lunch every weekday",
  "Weekly Non-Veg Special (1x/week)",
  "Balanced & hygienic meals",
  "Delivered directly to your office",
  "Eco-friendly packaging",
];

export default function SubscriptionPlans() {
  return (
    <section id="plans" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-red-700">
            SUBSCRIPTION PLAN
          </p>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            One simple plan. Everything you need.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Healthy lunches delivered every working day. No hidden charges. No daily ordering.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl rounded-[32px] border border-orange-200 bg-gradient-to-br from-orange-500 to-orange-500 p-10 text-white shadow-2xl">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg opacity-90">Monthly Membership</p>
              <h3 className="mt-2 text-5xl font-bold">₹4,999</h3>
              <p className="mt-2 opacity-90">per month</p>
            </div>

            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
              ⭐ Most Popular
            </div>
          </div>

          <div className="mt-10 space-y-5">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-6 w-6" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a href="#booking">
          <button
            className="mt-10 w-full rounded-2xl bg-white py-4 text-lg font-semibold text-orange-600 transition hover:scale-[1.02]"
          >
            Reserve My Subscription
          </button></a>

        </div>

      </div>
    </section>
  );
}