"use client";

import { ChevronDown } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TriggerProps
  extends React.ComponentPropsWithoutRef<typeof MenubarTrigger> {
  className?: string;
  isActive?: boolean;
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  isActive,
  children,
  ...props
}) => {
  return (
    <MenubarTrigger
      className={cn(className, "flex items-center gap-1")}
      {...props}
    >
      {children}
      <ChevronDown
        size={20}
        className={cn(
          "transition-transform ease-in-out",
          isActive ? "rotate-180" : "rotate-0"
        )}
      />
    </MenubarTrigger>
  );
};

export default function NavigationMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuToggle = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <Menubar autoFocus className="border-none shadow-none">
      <MenubarMenu>
        <div>
          <Trigger
            isActive={activeMenu === "excursions"}
            onClick={() => handleMenuToggle("excursions")}
          >
            Excurtions
          </Trigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Share</MenubarItem>
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div>
          <Trigger
            isActive={activeMenu === "tours"}
            onClick={() => handleMenuToggle("tours")}
          >
            Tours
          </Trigger>
          <MenubarContent onMouseLeave={() => setActiveMenu(null)}>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div>
          <Trigger
            isActive={activeMenu === "places"}
            onClick={() => handleMenuToggle("places")}
          >
            Interesting places
          </Trigger>
          <MenubarContent onCloseAutoFocus={() => setActiveMenu(null)}>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div>
          <Trigger
            isActive={activeMenu === "contacts"}
            onClick={() => handleMenuToggle("contacts")}
          >
            Contacts
          </Trigger>
          <MenubarContent onCloseAutoFocus={() => setActiveMenu(null)}>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </div>
      </MenubarMenu>
    </Menubar>
  );
}
