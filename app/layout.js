import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import dbConnect from "@/lib/mongo";
import { auth } from "@/auth.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gifts By Breed",
  description: "Buy Great Gifts, Support Great Charities",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  const session = await auth()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
