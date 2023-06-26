'use client'
import Nav from "./components/Nav";
import { useEffect } from "react";
// import { metadata } from "./metadata";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Add the necessary link tag dynamically
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.integrity =
      "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    return () => {
      // Clean up the link tag when the component unmounts
      document.head.removeChild(link);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Add the necessary link tag here as well */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Nav />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
