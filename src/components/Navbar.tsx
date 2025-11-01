'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/presentation", label: "Présentation" },
    { href: "/notre-equipe", label: "Notre équipe" },
    { href: "/nos-prestations", label: "Nos prestations" },
    { href: "/nos-projets", label: "Nos projets" },
    { href: "#", label: "Contact" },
  ];

  const pathname = usePathname();

  return (
    <div className="containerClass relative flex justify-between items-center xl:ml-20! z-30">
      <Link href="/">
        <div className="bg-[url('/logo.svg')] bg-cover bg-center w-[207px] h-[54px]" />
      </Link>
      <nav className="flex items-center gap-5 xl:gap-15 2xl:gap-18 font-medium overflow-x-scroll">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-nowrap ${
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
    </div>
  );
}