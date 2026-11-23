import "./globals.css";

export const metadata = {
  title: "Budget Tracker - Next.js App",
  description: "Track your expenses and manage your budget effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <span>Budget Tracker</span>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2026 Budget Tracker. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
