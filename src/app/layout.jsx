import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "WhiteEvents",
  description: "Luxury wedding planning and design studio",
  icons: {
    icon: "/images/logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
