import React from "react";

export const Button = ({
  variant = "default",
  ...props
}: React.ComponentProps<"button"> & { variant?: "default" | "danger" }) => {
  const variantClass =
    variant === "default"
      ? "bg-teal-700 hover:bg-teal-800"
      : "bg-red-700 hover:bg-red-800";
  return (
    <button
      className={`w-full ${variantClass} text-white font-bold py-2 px-4 rounded-lg cursor-pointer`}
      {...props}
    />
  );
};
