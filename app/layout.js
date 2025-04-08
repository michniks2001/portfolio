import { Poppins, Fira_Code } from "next/font/google";
import { AuroraBackground } from "@/components/AuroraBackground";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Samuel Michnik | Software Engineer",
  description: "Professional portfolio of Samuel Michnik, Software Engineer specializing in web development, Python, and AI applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaCode.variable} font-sans antialiased relative`}
      >
        <AuroraBackground className="opacity-70 fixed" />
        {children}
      </body>
    </html>
  );
}
