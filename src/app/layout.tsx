import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const geist = Geist({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Dilpreet Singh | Software Engineer",
        template: "%s | Dilpreet Singh",
    },
    description:
        "Portfolio of Dilpreet Singh, a Software Engineer specialising in backend engineering, distributed systems and observability.",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={geist.className}>
        <body>
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
        </div>
        </body>
        </html>
    );
}