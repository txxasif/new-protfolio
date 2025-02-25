"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTabStore } from "@/store/tab-store";

type Tabs = "home" | "about" | "projects";

export function AppSidebar() {
  const { isMobile } = useSidebar();
  const { setTab } = useTabStore();
  const menuItems: { label: string; value: Tabs }[] = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Projects", value: "projects" },
  ];
  return (
    <>
      <Sidebar side={!isMobile ? "left" : "right"} className="hidden md:block ">
        <SidebarContent className="flex items-center justify-center h-screen">
          <div className="p-4">
            <h1 className="text-lg font-bold ">My App</h1>
          </div>
          <div>
            {menuItems.map((item) => (
              <li key={item.value} onClick={() => setTab(item.value)}>
                {item.label}
              </li>
            ))}
          </div>
        </SidebarContent>
      </Sidebar>
      <div className="fixed top-4 right-4 md:hidden">
        <SidebarTrigger />
      </div>
    </>
  );
}
