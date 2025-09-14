import React from "react";

export const Button = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <button
      className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
      {...props}
    />
  );
};
