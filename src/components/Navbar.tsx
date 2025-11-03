'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/presentation", label: "Présentation" },
    { href: "/notre-equipe", label: "Notre équipe" },
    { href: "/nos-prestations", label: "Nos prestations" },
    { href: "/nos-projets", label: "Nos projets" },
    { href: "#", label: "Contact" },
  ];

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="containerClass relative flex justify-between items-center xl:ml-20! z-30">
      {/* Logo */}
      <Link href="/" onClick={closeMenu}>
        <div className="bg-[url('/logo.svg')] bg-cover bg-center w-[207px] h-[54px]" />
      </Link>

      {/* Menu hamburger pour mobile et tablette */}
      {
        !isMenuOpen && (
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        )
      }

      {/* Navigation desktop */}
      <nav className="hidden lg:flex items-center gap-5 xl:gap-15 2xl:gap-18 font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-nowrap transition-colors duration-200 hover:text-[#00AAE5] ${
                isActive
                  ? "font-bold text-xl text-[#00AAE5]"
                  : ""
              } ${pathname === "/" && item.href === "/" ? "text-white" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Menu mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50 transition-opacity duration-300 z-0 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Menu mobile */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header du menu mobile */}
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Items du menu mobile */}
          <div className="flex-1 py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                    isActive
                      ? "font-bold text-[#00AAE5] bg-blue-50"
                      : "text-gray-800 hover:text-[#00AAE5] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}