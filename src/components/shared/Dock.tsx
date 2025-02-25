"use client";

import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import { Home, User, FolderKanban, LucideIcon } from "lucide-react";
import { useTabStore } from "@/store/tab-store";
type Tabs = "home" | "about" | "projects";
export function DockBottom() {
  const { setTab } = useTabStore();

  const dockItems: { icon: LucideIcon; value: Tabs; label: string }[] = [
    { icon: Home, value: "home", label: "Home" },
    { icon: User, value: "about", label: "About" },
    { icon: FolderKanban, value: "projects", label: "Projects" },
  ];

  return (
    <div className="relative">
      <Dock direction="middle">
        {dockItems.map((item) => (
          <DockIcon
            key={item.value}
            onClick={() => setTab(item.value)}
            aria-label={item.label}
          >
            <item.icon className="size-6" />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
