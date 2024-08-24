import { cn } from "@colidy/ui-utils";
import Link from "next/link";
import { forwardRef } from "react";

export const Paragraph = forwardRef(
    ({ className, ...props }: React.HTMLProps<HTMLParagraphElement>, ref) => {
        return (
            <p
                className={cn(
                    "text-base leading-6 text-muted sm:text-sm",
                    className
                )}
                {...props}
            />
        );
    }
);

Paragraph.displayName = "ColidyParagraph";

export const ParagraphAnchor = forwardRef<
    HTMLAnchorElement,
    React.ComponentProps<typeof Link>
>(({ className, ...props }, ref) => {
    return (
        <Link
            className={cn(
                "text-foreground underline decoration-muted hover:decoration-foreground",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

ParagraphAnchor.displayName = "ColidyParagraphAnchor";

export const ParagraphStrong = forwardRef(
    ({ className, ...props }: React.HTMLProps<HTMLParagraphElement>, ref) => {
        return (
            <strong className={cn("text-foreground", className)} {...props} />
        );
    }
);

ParagraphStrong.displayName = "ColidyParagraphStrong";
