"use client";

import { Drawer } from "vaul";

export const Panel = ({
  open,
  setOpen,
  title,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-800 flex flex-col rounded-t-[10px] h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-zinc-800 rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-4" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-bold mb-4 text-white">
                {title}
              </Drawer.Title>
              {children}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
