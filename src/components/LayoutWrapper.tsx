"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOsRoute = pathname === "/os";

  return (
    <>
      {!isOsRoute && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isOsRoute && <Footer />}
      {!isOsRoute && <WhatsAppButton />}
    </>
  );
}
