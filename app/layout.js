import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Budget Tracker - Next.js App",
  description: "Track your expenses and manage your budget effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Icons  */}
        {/* A link to generate icons for the website */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
