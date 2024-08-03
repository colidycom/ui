import { cn } from "@colidy/ui-utils";
import { getNextAndPrev } from "@/utils/docs-utils";
import Link from "next/link";

export const Footer = ({
    category,
    slug,
}: {
    category: string;
    slug: string;
}) => {
    const { prevDoc, nextDoc } = getNextAndPrev(category, slug);
    return (
        <footer className="text-sm leading-6 mt-12">
            <div
                className={cn("mb-10 font-semibold flex items-center", {
                    "justify-between": !!(prevDoc && nextDoc),
                    "justify-end": !prevDoc && nextDoc,
                    "justify-start": prevDoc && !nextDoc,
                })}
            >
                {prevDoc && (
                    <Link
                        className="text-muted hover:text-foreground bg-zinc-500/10 px-4 py-2 rounded text-sm hover:bg-zinc-500/20 active:bg-zinc-500/30 transition-colors group flex items-center"
                        href={"/docs" + prevDoc?.url}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                            color={"currentColor"}
                            fill={"none"}
                        >
                            <path
                                d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {prevDoc?.title}
                    </Link>
                )}
                {nextDoc && (
                    <Link
                        className="text-muted hover:text-foreground bg-zinc-500/10 px-4 py-2 rounded text-sm hover:bg-zinc-500/20 active:bg-zinc-500/30 transition-colors group flex items-center"
                        href={"/docs" + nextDoc?.url}
                    >
                        {nextDoc?.title}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                            color={"currentColor"}
                            fill={"none"}
                        >
                            <path
                                d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                )}
            </div>
            <div className="pt-10 pb-28 border-t border-border/50 sm:flex justify-between text-muted">
                <div className="mb-6 sm:mb-0 sm:flex">
                    <p>ColidyUI © {new Date().getFullYear()}</p>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="https://voiddevs.co"
                        target="_blank"
                        className="hover:text-foreground transition-colors"
                    >
                        Made with ❤️ by Void Development, Ltd.
                    </Link>
                </div>
            </div>
        </footer>
    );
};
