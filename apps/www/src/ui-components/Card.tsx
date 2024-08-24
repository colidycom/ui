import { cn } from "@colidy/ui-utils";
import { forwardRef } from "react";

export const Card = forwardRef<
    HTMLDivElement,
    {
        children: React.ReactNode;
        center?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>
>(({ children, className, center = false, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "relative rounded-lg p-6 py-8 sm:p-8 lg:p-12 bg-secondary before:w-[calc(100% + 2px)] before:h-[calc(100% + 2px)] before:inset-0 before:ml-[-1px] before:mt-[-1px] before:mb-[-1px] before:mr-[-1px] before:rounded-lg before:z-[-1] before:absolute before:bg-gradient-to-b before:from-border shadow-sm forced-colors:outline",
                className,
                {
                    "justify-center items-center flex w-full": center,
                }
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = "ColidyCard";
