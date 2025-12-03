"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/data";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="headers-modern">
      <nav className="header-nav">
        {headerData.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.id}
              className={`header-link ${
                isActive
                  ? "font-bold opacity-100 border-b-2 border-[var(--color-primary)]"
                  : "opacity-70"
              }`}
            >
              {link.headerLink}
            </Link>
          );
        })}
        <div></div>
      </nav>
    </header>
  );
};

export default Header;
