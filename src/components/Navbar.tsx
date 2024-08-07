"use client";

import { useSidebar } from "@/states/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@colidy/ui-utils";
import { useTheme } from "next-themes";
import { pages as _pages } from "@/utils/pages";

export default function Navbar() {
    const toggleSidebar = useSidebar((state) => state.toggleSidebar);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const pages = _pages(pathname);

    return (
        <div
            className={cn("sticky top-0 z-[999] w-full flex-none lg:z-50", {
                "backdrop-blur lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/70 supports-backdrop-blur:bg-white/70 dark:bg-transparent":
                    pathname !== "/",
            })}
        >
            <div className="container">
                <div className="py-4 border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10">
                    <div className="relative flex items-center lg:justify-start justify-between gap-2">
                        <Link
                            className="mr-3 flex items-center gap-2 flex-none overflow-hidden"
                            href="/"
                        >
                            <span className="sr-only">ColidyUI Home Page</span>
                            <img
                                src="/white-logo.png"
                                alt="ColidyUI"
                                className="w-auto h-8 invert dark:filter-none"
                            />
                            <span className="text-xl font-semibold text-foreground">
                                ColidyUI
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 rounded-md lg:hidden bg-zinc-500/10"
                            onClick={toggleSidebar}
                        >
                            <span className="sr-only">Navigation</span>
                            <svg width={24} height={24}>
                                <path
                                    d="M5 6h14M5 12h14M5 18h14"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <div className="relative hidden lg:flex items-center ml-auto">
                            <nav className="text-sm leading-6 font-semibold text-muted">
                                <ul className="flex space-x-2">
                                    {pages.map((page) => (
                                        <motion.li
                                            key={page.href}
                                            className="relative group"
                                        >
                                            {page.disabled ? (
                                                <a
                                                    className={cn(
                                                        "px-2.5 py-2 rounded",
                                                        {
                                                            "hover:text-foreground transition-colors group-hover:bg-zinc-500/10":
                                                                !page.isActive() &&
                                                                !page.disabled,
                                                            "text-foreground ":
                                                                page.isActive() &&
                                                                !page.disabled,
                                                            "cursor-not-allowed opacity-50":
                                                                page.disabled,
                                                        }
                                                    )}
                                                    aria-disabled={
                                                        page.disabled
                                                    }
                                                >
                                                    {page.title}
                                                    {page.label && (
                                                        <span className="ml-1 text-xs bg-colored/10 text-colored px-1.5 py-1 rounded-sm">
                                                            {page.label}
                                                        </span>
                                                    )}
                                                </a>
                                            ) : (
                                                <Link
                                                    className={cn(
                                                        "px-2.5 py-2 rounded",
                                                        {
                                                            "hover:text-foreground transition-colors group-hover:bg-zinc-500/10":
                                                                !page.isActive() &&
                                                                !page.disabled,
                                                            "text-foreground ":
                                                                page.isActive() &&
                                                                !page.disabled,
                                                            "cursor-not-allowed opacity-50":
                                                                page.disabled,
                                                        }
                                                    )}
                                                    href={page.href}
                                                >
                                                    {page.title}
                                                    {page.label && (
                                                        <span className="ml-1 text-xs bg-colored/10 text-colored px-1.5 py-1 rounded-sm">
                                                            {page.label}
                                                        </span>
                                                    )}
                                                </Link>
                                            )}
                                            {page.isActive() && (
                                                <motion.div
                                                    className="absolute -bottom-5 inset-x-2.5 h-px rounded-full bg-foreground"
                                                    layoutId="active"
                                                />
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="flex items-center border-l ml-6 pl-6">
                                <button
                                    type="button"
                                    aria-label="Theme"
                                    onClick={() =>
                                        setTheme(
                                            theme === "dark" ? "light" : "dark"
                                        )
                                    }
                                >
                                    <span className="dark:hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="hidden dark:inline"
                                        onClick={() =>
                                            setTheme(
                                                theme === "dark"
                                                    ? "light"
                                                    : "dark"
                                            )
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={20}
                                            height={20}
                                            color={"currentColor"}
                                            fill={"none"}
                                        >
                                            <path
                                                d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
