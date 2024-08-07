"use client";

import { useSidebar } from "@/states/sidebar";
import { cn } from "@colidy/ui-utils";
import { docsTree } from "@/utils/docs-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { pages as _pages } from "@/utils/pages";

export const Sidebar = ({ onMobile }: { onMobile?: boolean }) => {
    const [isMobile, setIsMobile] = useState(false);
    const isOpen = useSidebar((state) => state.open);
    const toggleSidebar = useSidebar((state) => state.toggleSidebar);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pages = _pages(pathname);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[1000] bg-black/50 lg:hidden"
                    />
                )}
            </AnimatePresence>
            <div
                className={cn(
                    "-translate-x-full bg-primary lg:bg-transparent transition-all lg:translate-x-0 top-0 fixed z-[1001] inset-0 lg:top-[64px] left-[max(0px,calc(50%-45rem))] right-auto w-full border-r lg:border-none max-w-[19rem] pb-10 overflow-y-auto",
                    {
                        "translate-x-0": isOpen,
                        "lg:hidden": !pathname.startsWith("/docs"),
                        "block lg:hidden": onMobile,
                    }
                )}
            >
                <div className="lg:hidden flex items-center justify-between gap-4 py-4 pl-8 pr-6">
                    <Link
                        className="mr-3 flex items-center gap-2 flex-none overflow-hidden"
                        href="/"
                    >
                        <span className="sr-only">ColidyUI Home Page</span>
                        <img
                            src="/white-logo.png"
                            alt="ColidyUI"
                            className="w-auto h-8"
                        />
                        <span className="text-xl font-semibold">ColidyUI</span>
                    </Link>
                    <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 rounded-md lg:hidden bg-zinc-500/10"
                        onClick={toggleSidebar}
                    >
                        <span className="sr-only">Navigation</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                            color={"currentColor"}
                            fill={"none"}
                        >
                            <path
                                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <nav
                    id="nav"
                    className="lg:text-sm lg:leading-6 relative overflow-y-auto pl-8 pr-6"
                >
                    <ul>
                        {isMobile && (
                            <li className="mt-6 lg:mt-8 lg:hidden">
                                <ul className="space-y-1">
                                    {pages.map((item) => (
                                        <li
                                            key={item.href}
                                            className="relative group"
                                        >
                                            <Link
                                                className={cn(
                                                    "block px-2.5 py-1.5 -ml-2.5 transition-all rounded",
                                                    {
                                                        "bg-colored/5 text-colored font-semibold":
                                                            item.isActive(),
                                                        "hover:bg-zinc-500/10 text-muted hover:text-foreground":
                                                            !item.isActive(),
                                                    }
                                                )}
                                                href={item.href}
                                            >
                                                {item.title}
                                                {item.label && (
                                                    <span className="ml-1 text-xs bg-colored/10 text-colored px-1.5 py-1 rounded-sm">
                                                        {item.label}
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                        {docsTree.map((section) => (
                            <li className="mt-6 lg:mt-8" key={section.slug}>
                                <h5 className="mb-3 font-semibold text-foreground">
                                    {section.title}
                                </h5>
                                <ul className="space-y-1">
                                    {section.items.map((item) => (
                                        <motion.li
                                            key={item.slug}
                                            className="relative group"
                                        >
                                            <Link
                                                className={cn(
                                                    "block px-2.5 py-1.5 -ml-2.5 transition-all rounded",
                                                    {
                                                        "bg-colored/5 text-colored font-semibold":
                                                            pathname ===
                                                            "/docs/" +
                                                                section.slug +
                                                                "/" +
                                                                item.slug,
                                                        "hover:bg-zinc-500/10 text-muted hover:text-foreground":
                                                            !(
                                                                pathname ===
                                                                "/docs/" +
                                                                    section.slug +
                                                                    "/" +
                                                                    item.slug
                                                            ),
                                                    }
                                                )}
                                                href={"/docs" + item.url}
                                            >
                                                {item.title}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};
