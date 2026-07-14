"use client";

import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../forms/InputField";
import SuccessModal from "../ui/SuccessModal";


type BookingFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  startDate: string;
};

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<BookingFormData>();

const onSubmit = async (data: BookingFormData) => {
  console.log("FORM DATA:", data);

  setIsSubmitting(true);

  console.log("Calling API...");
  const response = await fetch("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!result.success) {
    setIsSubmitting(false);
    alert(result.message);
    return;
  }

  setIsSubmitting(false);
  ///reset();
  setShowSuccess(true);
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
                {...register("fullName", {
                  required: "Please enter your full name.",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters.",
                  },
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Name can only contain letters.",
                  },
                })}
                error={errors.fullName?.message}
              />

              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                  {...register("email", {
                  required: "Please enter your email.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                    },
                  })}
                error={errors.email?.message}
              />

              <InputField
                label="Phone Number"
                placeholder="9876543210"
                {...register("phone", {
                required: "Please enter your phone number.",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit phone number.",
                  },
                })}
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
                {...register("location", {
                  minLength: {
                    value: 5,
                    message: "Location must be at least 5 characters.",
                  },
                  required: "Please enter your office location.",
                })}
                error={errors.location?.message}
              />

              <InputField
                label="Preferred Start Date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("startDate", {
                  required: "Please select a preferred start date.",
                })}
                error={errors.startDate?.message}
              />

              <button
  type="submit"
  disabled={isSubmitting}
  className={`
    w-full
    rounded-2xl
    py-4
    text-lg
    font-semibold
    text-white
    transition-all
    duration-300
    active:scale-95
    ${
      isSubmitting
        ? "cursor-not-allowed bg-orange-300"
        : "bg-orange-500 hover:scale-[1.02] hover:bg-orange-600"
    }
  `}
>
  {isSubmitting ? (
    <span className="flex items-center justify-center gap-3">
      <svg
        className="h-5 w-5 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="white"
          strokeWidth="3"
          strokeOpacity="0.25"
        />
        <path
          d="M22 12a10 10 0 0 1-10 10"
          stroke="white"
          strokeWidth="3"
        />
      </svg>

      Preparing...
    </span>
  ) : (
    "Book My Subscription"
  )}
</button>

            </form>

          </div>

        </div>

      </div>
      <SuccessModal
  isOpen={showSuccess}
  onClose={() => setShowSuccess(false)}
/>
    </section>
  );
}