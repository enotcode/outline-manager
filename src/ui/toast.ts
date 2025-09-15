import { toast as sonnerToast } from "sonner";

export const toast = {
  success: (message: string) => {
    return sonnerToast.success(message, {
      classNames: {
        toast: "!bg-zinc-900/90",
        title: "!text-white !font-bold",
        icon: "!text-white",
      },
    });
  },

  error: (message: string) => {
    return sonnerToast.error(message, {
      classNames: {
        toast: "!bg-red-900/90",
        title: "!text-white !font-bold",
        icon: "!text-white",
      },
    });
  },

  custom: sonnerToast,
};
