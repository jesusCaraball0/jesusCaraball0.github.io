"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white border-b-2 border-gray-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-black hover:text-gray-700"
            >
              Jesus Caraballo
            </Link>
          </div>
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  marginLeft: index > 0 ? '2rem' : '0',
                }}
                className={`px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-black border-b-2 border-black font-bold"
                    : "text-gray-700 hover:text-black hover:underline"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
