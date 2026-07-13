"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-neutral-800">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className={`
            w-full
            rounded-2xl
            border
            border-neutral-200
            bg-white
            px-4
            py-3
            text-neutral-900
            placeholder:text-neutral-400
            transition-all
            duration-300
            outline-none
            focus:border-orange-500
            focus:ring-4
            focus:ring-orange-100
            hover:border-green-400
            ${className}
          `}
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;