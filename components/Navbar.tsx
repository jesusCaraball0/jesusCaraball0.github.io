"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50"
      style={{
        background: "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0) 100%)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24" style={{ paddingTop: "10px" }}>
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="relative px-1 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] no-underline"
              style={{
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
              }}
            >
              Jesus Caraballo
            </Link>
          </div>
          <div
            className="flex items-center"
            style={{ gap: "1.4rem", paddingRight: "0.25rem" }}
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-1 py-1 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] no-underline"
                  style={{
                    textDecoration: "none",
                    color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)",
                  }}
                >
                  <span className="transition-colors duration-200 hover:text-white">
                    {item.name}
                  </span>
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute left-0 right-0 -bottom-1 h-0.5"
                    style={{
                      opacity: active ? 1 : 0,
                      background:
                        "linear-gradient(90deg, rgba(30,64,175,0.85), rgba(139,92,246,0.85))",
                      borderRadius: "999px",
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
