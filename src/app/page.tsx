"use client";
import { TABS } from "@/components/tabs/Tab";
import { useTabStore } from "@/store/tab-store";

export default function Home() {
  const { currentTab } = useTabStore();
  const PageComponent = TABS[currentTab];
  return (
    <div className="">
      <PageComponent />
    </div>
  );
}
