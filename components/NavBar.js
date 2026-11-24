"use client";

import Link from "next/link";

export default function NavBar() {
  // Define styles for the navigation bar and its elements
  const navBarStyle = {
    backgroundColor: "#1f2937",
    padding: "1rem 2rem",
    marginBottom: "2rem",
    // borderBottom: '1px solid #dee2e6',
  };

  const NavBarContainerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const LogoStyle = {
    color: "#fff",
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
      <div style={NavBarContainerStyle}>
        <Link href="/" style={LogoStyle}>
          Budget Tracker
        </Link>
        <div style={NavBarLinksContainerStyle}>
          <Link href="/" style={LinkStyle}>
            Dashboard
          </Link>
          <Link href="/transactions" style={LinkStyle}>
            Transactions
          </Link>
          <Link href="/categories" style={LinkStyle}>
            Categories
          </Link>
        </div>
      </div>
    </nav>
  );
}
