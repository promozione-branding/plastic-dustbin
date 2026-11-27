"use client";

import { usePathname } from "next/navigation";
import Header2 from '@/components/home/Header2'
import Footer from '@/components/home/Footer'


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
  const hideLayout =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/inquiry") ||
    pathname.startsWith("/home2") ||
    pathname.startsWith("/bulk-inquiry");
  const isHomePage = pathname === "/";

  return (
    <div className={isHomePage ? "w-screen max-w-none overflow-x-clip" : undefined}>
      {!hideLayout && <Header2 />}
      {children}
      {!hideLayout && <Footer />}
    </div>
  );
}
