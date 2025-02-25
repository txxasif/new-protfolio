import { create } from "zustand";

type Tabs = "home" | "about" | "projects";

interface TabStore {
  currentTab: Tabs;
  setTab: (page: Tabs) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  currentTab: "home",
  setTab: (page) => set({ currentTab: page }),
}));
