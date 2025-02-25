"use client";

import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { useTabStore } from "@/store/tab-store";
import { motion } from "framer-motion";
import HiAnimation from "@/components/animation-lottie/wave.json";
import Lottie from "lottie-react";

type Tabs = "home" | "about" | "projects";

export function AppSidebar() {
  const { isMobile } = useSidebar();
  const { setTab, currentTab } = useTabStore();
  const menuItems: { label: string; value: Tabs }[] = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Projects", value: "projects" },
  ];

  return (
    <>
      <Sidebar side={!isMobile ? "left" : "right"} className="hidden md:block">
        <SidebarContent className="flex flex-col items-center  ">
          <div>
            <Lottie
              className={"size-32"}
              animationData={HiAnimation}
              loop={true}
            />
          </div>

          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <motion.div
                key={item.value}
                className="cursor-pointer relative"
                onClick={() => setTab(item.value)}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: currentTab === item.value ? 1 : 0.8 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">{item.label}</span>
                {currentTab === item.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
                )}
              </motion.div>
            ))}
          </div>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
