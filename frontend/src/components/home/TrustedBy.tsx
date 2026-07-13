import { Users, Building2, UtensilsCrossed, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Professionals Served",
  },
  {
    icon: Building2,
    value: "25+",
    label: "Offices Delivered To",
  },
  {
    icon: UtensilsCrossed,
    value: "10K+",
    label: "Meals Delivered",
  },
  {
    icon: Clock3,
    value: "99%",
    label: "On-Time Delivery",
  },
];

export default function TrustedBy() {
  return (
    <section className="bg-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-600 font-semibold uppercase tracking-widest">
            TRUSTED DAILY
          </p>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Hyderabad professionals choose MealMithra every day.
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-8">
            From IT employees to fitness enthusiasts and busy corporate teams,
            thousands rely on MealMithra for fresh, hygienic lunches.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={28} />
                </div>

                <h3 className="text-4xl font-bold text-neutral-900">
                  {item.value}
                </h3>

                <p className="mt-3 text-neutral-600">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}