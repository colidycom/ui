"use client";

import { colors, cn } from "@colidy/ui-utils";
import { forwardRef } from "react";
import Link from "next/link";

export const Badge = forwardRef<
    HTMLSpanElement,
    {
        href?: string;
        color?: (typeof colors)[number];
        children: React.ReactNode;
    }
>(({ href, color = "zinc", children, ...props }, ref) => {
    const colorClasses = {
        slate: "bg-slate-500/15 text-slate-700 dark:text-slate-400",
        gray: "bg-gray-500/15 text-gray-700 dark:text-gray-400",
        zinc: "bg-zinc-500/15 text-zinc-700 dark:text-zinc-400",
        neutral: "bg-neutral-500/15 text-neutral-700 dark:text-neutral-400",
        stone: "bg-stone-500/15 text-stone-700 dark:text-stone-400",
        red: "bg-red-500/15 text-red-700 dark:text-red-400",
        orange: "bg-orange-500/15 text-orange-700 dark:text-orange-400",
        amber: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
        yellow: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400",
        lime: "bg-lime-500/15 text-lime-700 dark:text-lime-400",
        green: "bg-green-500/15 text-green-700 dark:text-green-400",
        emerald: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
        teal: "bg-teal-500/15 text-teal-700 dark:text-teal-400",
        cyan: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400",
        sky: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
        blue: "bg-blue-500/15 text-blue-700 dark:text-blue-400",
        indigo: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-400",
        violet: "bg-violet-500/15 text-violet-700 dark:text-violet-400",
        purple: "bg-purple-500/15 text-purple-700 dark:text-purple-400",
        fuchsia: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-400",
        pink: "bg-pink-500/15 text-pink-700 dark:text-pink-400",
        rose: "bg-rose-500/15 text-rose-700 dark:text-rose-400",
    };

    const hovers = {
        slate: "hover:bg-slate-500/20 hover:text-slate-800 dark:hover:text-slate-300",
        gray: "hover:bg-gray-500/20 hover:text-gray-800 dark:hover:text-gray-300",
        zinc: "hover:bg-zinc-500/20 hover:text-zinc-800 dark:hover:text-zinc-300",
        neutral:
            "hover:bg-neutral-500/20 hover:text-neutral-800 dark:hover:text-neutral-300",
        stone: "hover:bg-stone-500/20 hover:text-stone-800 dark:hover:text-stone-300",
        red: "hover:bg-red-500/20 hover:text-red-800 dark:hover:text-red-300",
        orange: "hover:bg-orange-500/20 hover:text-orange-800 dark:hover:text-orange-300",
        amber: "hover:bg-amber-500/20 hover:text-amber-800 dark:hover:text-amber-300",
        yellow: "hover:bg-yellow-500/20 hover:text-yellow-800 dark:hover:text-yellow-300",
        lime: "hover:bg-lime-500/20 hover:text-lime-800 dark:hover:text-lime-300",
        green: "hover:bg-green-500/20 hover:text-green-800 dark:hover:text-green-300",
        emerald:
            "hover:bg-emerald-500/20 hover:text-emerald-800 dark:hover:text-emerald-300",
        teal: "hover:bg-teal-500/20 hover:text-teal-800 dark:hover:text-teal-300",
        cyan: "hover:bg-cyan-500/20 hover:text-cyan-800 dark:hover:text-cyan-300",
        sky: "hover:bg-sky-500/20 hover:text-sky-800 dark:hover:text-sky-300",
        blue: "hover:bg-blue-500/20 hover:text-blue-800 dark:hover:text-blue-300",
        indigo: "hover:bg-indigo-500/20 hover:text-indigo-800 dark:hover:text-indigo-300",
        violet: "hover:bg-violet-500/20 hover:text-violet-800 dark:hover:text-violet-300",
        purple: "hover:bg-purple-500/20 hover:text-purple-800 dark:hover:text-purple-300",
        fuchsia:
            "hover:bg-fuchsia-500/20 hover:text-fuchsia-800 dark:hover:text-fuchsia-300",
        pink: "hover:bg-pink-500/20 hover:text-pink-800 dark:hover:text-pink-300",
        rose: "hover:bg-rose-500/20 hover:text-rose-800 dark:hover:text-rose-300",
    };

    const classNames = cn(
        "transition-colors inline-flex no-underline justify-center items-center gap-x-1.5 rounded px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline",
        colorClasses[color as keyof typeof colorClasses],
        {
            [hovers[color as keyof typeof hovers]]: !!href,
        }
    );

    const isExternal = href?.startsWith("http");

    if (href) {
        return (
            <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                className={classNames}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <span ref={ref} className={classNames} {...props}>
            {children}
        </span>
    );
});

Badge.displayName = "ColidyBadge";
