"use client";

import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import InputField from "../forms/InputField";

type BookingFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  startDate: string;
};

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#F6FFF7] py-28"
    >
      {/* Background Blobs */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Start Your Subscription
            </span>

            <h2 className="mt-8 text-5xl font-bold text-neutral-900">
              Healthy office lunches
              <span className="text-orange-600"> delivered effortlessly.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Fill in your details and our team will contact you to confirm your
              MealMithra subscription.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <User className="text-green-600" />
                <span>Simple 1-minute booking</span>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="text-orange-600" />
                <span>Flexible subscription start date</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" />
                <span>Currently serving Hyderabad offices</span>
              </div>

            </div>

          </div>

          {/* Right Form */}

          <div className="rounded-[32px] border border-orange-100 bg-white p-10 shadow-2xl">

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              <InputField
                label="Full Name"
                placeholder="Enter your name"
                {...register("fullName", { required: "Required" })}
                error={errors.fullName?.message}
              />

              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Required" })}
                error={errors.email?.message}
              />

              <InputField
                label="Phone Number"
                placeholder="9876543210"
                {...register("phone", { required: "Required" })}
                error={errors.phone?.message}
              />

              <InputField
                label="Company"
                placeholder="Company Name"
                {...register("company")}
              />

              <InputField
                label="Office Location"
                placeholder="Madhapur, Gachibowli..."
                {...register("location")}
              />

              <InputField
                label="Preferred Start Date"
                type="date"
                {...register("startDate")}
              />

              <button
                type="submit"
                className="
                  w-full
                  rounded-2xl
                  bg-orange-500
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-orange-600
                  active:scale-95
                "
              >
                Book My Subscription
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}