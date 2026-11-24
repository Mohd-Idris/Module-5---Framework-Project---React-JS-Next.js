"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  // Define styles for the navigation bar and its elements
  const navBarStyle = {
    backgroundColor: "var(--primary-color)",
    padding: "1rem 2rem",
    marginBottom: "2rem",
    borderBottom: "1px solid var(--text-color)",
  };

  const NavBarContainerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const LogoStyle = {
    color: "var(--accent-color)",
    fontSize: "1.3rem",
    fontWeight: "bold",
  };

  const NavBarLinksContainerStyle = {
    display: "flex",
    gap: "1rem",
  };

  const LinkStyle = {
    color: "#fff",
    fontSize: "1rem",
  };

  return (
    <nav style={navBarStyle}>
      <div className="nav-bar-container" style={NavBarContainerStyle}>
        <Link href="/" className="logo" style={LogoStyle}>
          <span className="nav-bar-span">B</span>udget{" "}
          <span className="nav-bar-span">T</span>racker
        </Link>
        <div className="nav-links-container" style={NavBarLinksContainerStyle}>
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            style={LinkStyle}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={pathname === "/transactions" ? "active" : ""}
            style={LinkStyle}
          >
            Transactions
          </Link>
          <Link
            href="/categories"
            className={pathname === "/categories" ? "active" : ""}
            style={LinkStyle}
          >
            Categories
          </Link>
        </div>
      </div>
    </nav>
  );
}
