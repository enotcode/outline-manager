"use client";

import { toast } from "sonner";

import { Button } from "../ui/button";
import { createKey } from "../actions";

export const AddKey = () => {
  const onCreateKeyClick = async () => {
    try {
      await createKey("New key");
      toast.success("Key added successfully", {
        classNames: {
          toast: "!bg-zinc-900/90",
          title: "!text-white !font-bold",
          icon: "!text-white",
        },
      });
    } catch (error) {
      toast.error("Failed to add key", {
        classNames: {
          toast: "!bg-red-900/90",
          title: "!text-white !font-bold",
          icon: "!text-white",
        },
      });
    }
  };

  return <Button onClick={onCreateKeyClick}>Create new key</Button>;
};
