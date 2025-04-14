import { Inter, JetBrains_Mono } from "next/font/google";
import { AuroraBackground } from "@/components/AuroraBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Samuel Michnik | Software Engineer",
  description: "Professional portfolio of Samuel Michnik, Software Engineer specializing in web development, Python, and AI applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased relative tracking-tight`}
      >
        <AuroraBackground className="opacity-70 fixed" />
        {children}
      </body>
    </html>
  );
}
