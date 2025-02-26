"use client";
import dynamic from "next/dynamic";

export const SidebarProvider = dynamic(
  () => import("@/components/ui/sidebar"),
  {
    ssr: false,
  }
);
