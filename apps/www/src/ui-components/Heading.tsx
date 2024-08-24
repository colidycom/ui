import { cn } from "@colidy/ui-utils";
import { forwardRef } from "react";

export const Heading = forwardRef<
    HTMLHeadingElement,
    {
        className?: string;
        size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    } & React.HTMLAttributes<HTMLHeadingElement>
>(({ className, size = "h2", ...props }, ref) => {
    const Component = size as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return (
        <Component
            className={cn(
                "font-semibold tracking-[-0.015em] text-foreground",
                {
                    "text-2xl/7 sm:text-xl/6": size === "h1",
                    "text-xl/7 sm:text-lg/6": size === "h2",
                    "text-lg/7 sm:text-base/6": size === "h3",
                    "text-base/7 sm:text-sm/6": size === "h4",
                    "text-sm/7 sm:text-xs/6": size === "h5",
                    "text-xs/7": size === "h6",
                },
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Heading.displayName = "ColidyHeading";
