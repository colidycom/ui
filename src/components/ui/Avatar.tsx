"use client";

import { cn } from "@colidy/ui-utils";
import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import { forwardRef } from "react";

export const Avatar = forwardRef<
    HTMLDivElement,
    {
        src: string;
        alt: string;
        size?:
            | "xs"
            | "sm"
            | "md"
            | "lg"
            | "xl"
            | "2xl"
            | "3xl"
            | "4xl"
            | "5xl"
            | "6xl"
            | "7xl"
            | "8xl"
            | "9xl"
            | "10xl";
        rounded?: "full" | "md" | "sm" | "none";
    } & React.ImgHTMLAttributes<HTMLImageElement>
>(({ src, alt, size = "md", rounded = "full", ...props }, ref) => {
    const initials = alt
        .split(" ")
        .map((word) => word[0])
        .map((char) => char.toUpperCase())
        .join("");

    const classNames = cn(
        "relative overflow-hidden bg-tertiary aspect-square flex-shrink-0",
        {
            "rounded-full": rounded === "full",
            "rounded-md": rounded === "md",
            "rounded-sm": rounded === "sm",
            "rounded-none": rounded === "none",
            "w-8 h-8": size === "xs",
            "w-10 h-10": size === "sm",
            "w-12 h-12": size === "md",
            "w-14 h-14": size === "lg",
            "w-16 h-16": size === "xl",
            "w-20 h-20": size === "2xl",
            "w-24 h-24": size === "3xl",
            "w-28 h-28": size === "4xl",
            "w-32 h-32": size === "5xl",
            "w-36 h-36": size === "6xl",
            "w-40 h-40": size === "7xl",
            "w-44 h-44": size === "8xl",
            "w-48 h-48": size === "9xl",
            "w-52 h-52": size === "10xl",
        }
    );

    return (
        <Root ref={ref} className={classNames} {...props}>
            <Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={src}
                alt={alt}
                {...props}
            />
            <Fallback
                className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
                delayMs={600}
            >
                {initials}
            </Fallback>
        </Root>
    );
});

Avatar.displayName = "ColidyAvatar";
