import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s — ColidyUI",
        default: "Full-featured UI components for Next.js",
    },
    description:
        "ColidyUI is a collection of full-featured UI components for Next.js, designed with a focus on developer experience and accessibility.",
    keywords: [
        "next.js",
        "react",
        "ui",
        "components",
        "design",
        "system",
        "colidy",
        "colidyui",
        "accessibility",
        "developer",
        "experience",
    ],
    authors: [
        {
            name: "Colidy",
            url: "https://colidy.com",
        },
    ],
    creator: "shadcn",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ui.colidy.com",
        title: "ColidyUI",
        description:
            "ColidyUI is a collection of full-featured UI components for Next.js, designed with a focus on developer experience and accessibility.",
        siteName: "ColidyUI",
        images: [
            {
                url: "https://ui.colidy.com/og.png",
                width: 1200,
                height: 630,
                alt: "ColidyUI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ColidyUI",
        description:
            "ColidyUI is a collection of full-featured UI components for Next.js, designed with a focus on developer experience and accessibility.",
        images: [
            {
                url: "https://ui.colidy.com/og.png",
                width: 1200,
                height: 630,
                alt: "ColidyUI",
            },
        ],
        creator: "@colidycom",
    },
    icons: {
        icon: "/favicon.ico",
    },
    manifest: `https://ui.colidy.com/site.webmanifest`,
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
