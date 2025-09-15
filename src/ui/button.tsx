import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "w-full text-white font-bold py-2 px-4 rounded-lg cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-teal-700 hover:bg-teal-800",
        danger: "bg-red-700 hover:bg-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Button = ({
  variant = "default",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return <button className={buttonVariants({ variant })} {...props} />;
};
