import React from "react";
import { Home } from "./Home";
import { About } from "./About/About";
export const Contact: React.FC = () => (
  <div className="p-4 text-xl">📞 Contact Page</div>
);

export const TABS: Record<string, React.FC> = {
  home: Home,
  about: About,
  contact: Contact,
};
