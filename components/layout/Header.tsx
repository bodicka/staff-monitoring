import { headerData } from "@/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="headers-modern">
      <nav className="header-nav">
        {headerData.map((link, idx) => (
          <Link href={link.href} key={idx} className="header-link">
            {link.headerLink}
          </Link>
        ))}
        <div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
