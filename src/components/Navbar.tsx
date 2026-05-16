"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Hexagon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Firma", href: "/liderazgo" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Insights", href: "/insights" },
    { name: "Peritajes", href: "/peritajes" },
    { name: "ACUMEN OS", href: "/acumen-os" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-2 group">
            <Hexagon className="h-7 w-7 text-zinc-900 group-hover:text-gold-500 transition-colors" />
            <span className="font-heading font-bold text-xl tracking-tight text-zinc-900">
              ACUMEN
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-gold-500 ${
                  pathname.startsWith(link.href) ? "text-gold-500" : "text-zinc-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contacto"
              className="ml-4 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 px-5 py-2.5 hover:bg-gold-500 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 hover:text-gold-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium border-b border-slate-100 ${
                  pathname.startsWith(link.href) ? "text-gold-500" : "text-zinc-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-bold text-gold-500"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
