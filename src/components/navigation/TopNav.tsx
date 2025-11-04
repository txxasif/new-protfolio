"use client";

import { useTabStore } from "@/store/tab-store";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderKanban, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

type Tabs = "home" | "about" | "projects";

const menuItems: { label: string; value: Tabs; icon: any }[] = [
  { label: "Home", value: "home", icon: Home },
  { label: "About", value: "about", icon: User },
  { label: "Projects", value: "projects", icon: FolderKanban },
];

export function TopNav() {
  const { setTab, currentTab } = useTabStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src="/asif.png"
                  alt="Asif"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Asif
              </span>
            </motion.div>

            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 bg-background/80 backdrop-blur-xl border border-border rounded-full px-2 py-2 shadow-lg"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.value}
                  onClick={() => setTab(item.value)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentTab === item.value
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {currentTab === item.value && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="/files/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-xl" : "bg-background/80 backdrop-blur-xl"
        } border-b border-border`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/asif.png"
                alt="Asif"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold">Asif</span>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border"
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      setTab(item.value);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      currentTab === item.value
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                <a
                  href="/files/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold mt-4"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
}

