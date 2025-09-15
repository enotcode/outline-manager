"use client";

import { toast } from "../ui/toast";
import { Button } from "../ui/button";
import { createKey } from "../actions";

export const AddKey = () => {
  const onCreateKeyClick = async () => {
    try {
      await createKey("New key");
      toast.success("Key added successfully");
    } catch (error) {
      toast.error("Failed to add key");
    }
  };

  return <Button onClick={onCreateKeyClick}>Create new key</Button>;
};
