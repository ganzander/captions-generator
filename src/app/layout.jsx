import "./globals.css";
import Navbar from "../components/navbar";
import { Providers } from "../components/providers";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#9747FF] to-[#5e2fd5] min-h-screen w-full text-white justify-center">
        <main>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}


