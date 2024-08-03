import { cn } from "@colidy/ui-utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

export const Tooltip = forwardRef<
    HTMLDivElement,
    {
        children: React.ReactNode;
        content: React.ReactNode | string;
    }
>(({ children, content }, ref) => {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        className={cn(
                            "z-[50] bg-input border rounded px-4 py-2 shadow-sm will-change-[opacity,transform]",
                            "data-[state=delayed-open]:animate-dropdown-in",
                            "data-[state=closed]:animate-dropdown-out",
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
                            "data-[align=end]:data-[side=top]:origin-bottom-right"
                        )}
                        sideOffset={5}
                        ref={ref}
                    >
                        {content}
                        <TooltipPrimitive.Arrow className="fill-border" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
});

Tooltip.displayName = "ColidyTooltip";
