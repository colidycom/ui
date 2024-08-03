"use client";

import { cn } from "@colidy/ui-utils";
import {
    useParams,
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

export const OnThisPage = ({ doc }: any) => {
    const body = doc.body.raw;
    const headings = body.match(/#{1,6} .+/g) || [];
    const router = useRouter();
    const [active, setActive] = useState<string | null>("");
    const hashChanged = () => {
        const hash = window.location.hash.replace("#", "");
        setActive(hash);
    };

    useEffect(() => {
        window.addEventListener("hashchange", hashChanged);
        hashChanged();

        return () => {
            window.removeEventListener("hashchange", hashChanged);
        };
    }, [hashChanged]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const hash = `#${id}`;
                        if (window.location.hash !== hash) {
                            window.history.replaceState(null, "", hash);
                            hashChanged();
                        }
                    }
                });
            },
            { rootMargin: "0% 0% -90% 0%" }
        );
        headings.forEach((heading: string) => {
            const id = heading.replace(/#{1,6} /, "");
            const element = document.getElementById(
                id.toLowerCase().replace(/\s/g, "-")
            );
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [headings, hashChanged]);

    if (headings.length === 0) return null;

    return (
        <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
            <div className="px-8">
                <h5 className="text-foreground font-semibold mb-4 text-sm leading-6">
                    On this page
                </h5>
                <ul className="text-muted text-sm leading-6">
                    <li>
                        {headings.map((heading: string) => {
                            const level = heading.match(/#/g)?.length || 1;
                            const text = heading.replace(/#{1,6} /, "");
                            return (
                                <a
                                    key={text}
                                    href={`#${text
                                        .toLowerCase()
                                        .replace(/\s/g, "-")}`}
                                    className={cn(
                                        "block py-1 transition-all",
                                        `pl-${level * 2}`,
                                        {
                                            "text-colored font-semibold":
                                                active ===
                                                text
                                                    .toLowerCase()
                                                    .replace(/\s/g, "-"),
                                            "hover:text-foreground":
                                                active !==
                                                text
                                                    .toLowerCase()
                                                    .replace(/\s/g, "-"),
                                        }
                                    )}
                                >
                                    {text}
                                </a>
                            );
                        })}
                    </li>
                </ul>
            </div>
        </div>
    );
};
