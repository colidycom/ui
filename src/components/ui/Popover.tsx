"use client";

import { cn } from "@colidy/ui-utils";
import { forwardRef } from "react";
import * as PopoverPrimitives from "@radix-ui/react-popover";

const Popover = PopoverPrimitives.Root;

const PopoverTrigger = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof PopoverPrimitives.Trigger>
>((props, ref) => <PopoverPrimitives.Trigger asChild ref={ref} {...props} />);

PopoverTrigger.displayName = "ColidyPopoverTrigger";

const PopoverContent = forwardRef<
    HTMLDivElement,
    { withArrow?: boolean } & React.ComponentProps<
        typeof PopoverPrimitives.Content
    >
>(({ withArrow, className, children, ...props }, ref) => (
    <PopoverPrimitives.Portal>
        <PopoverPrimitives.Content
            className={cn(
                "!z-[51] w-full min-w-[220px] bg-input border rounded p-5 shadow-sm will-change-[opacity,transform] data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out",

                "data-[align=center]:data-[side=right]:origin-left",
                "data-[align=start]:data-[side=right]:origin-top-left",
                "data-[align=end]:data-[side=right]:origin-bottom-left",

                "data-[align=center]:data-[side=left]:origin-right",
                "data-[align=start]:data-[side=left]:origin-top-right",
                "data-[align=end]:data-[side=left]:origin-bottom-right",

                "data-[align=center]:data-[side=bottom]:origin-top",
                "data-[align=start]:data-[side=bottom]:origin-top-left",
                "data-[align=end]:data-[side=bottom]:origin-top-right",

                "data-[align=center]:data-[side=top]:origin-bottom",
                "data-[align=start]:data-[side=top]:origin-bottom-left",
                "data-[align=end]:data-[side=top]:origin-bottom-right",

                className
            )}
            sideOffset={5}
            ref={ref}
            {...props}
        >
            {children}

            {withArrow && <PopoverPrimitives.Arrow className="fill-border" />}
        </PopoverPrimitives.Content>
    </PopoverPrimitives.Portal>
));

PopoverContent.displayName = "ColidyPopoverContent";

const PopoverClose = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof PopoverPrimitives.Close>
>((props, ref) => <PopoverPrimitives.Close asChild ref={ref} {...props} />);

PopoverClose.displayName = "ColidyPopoverClose";

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };
