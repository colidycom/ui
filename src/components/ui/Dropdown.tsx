"use client";

import { cn } from "@colidy/ui-utils";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

const Dropdown = DropdownPrimitive.Root;

const DropdownTrigger = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof DropdownPrimitive.Trigger>
>(({ children, ...props }, ref) => (
    <DropdownPrimitive.Trigger
        className="relative"
        asChild
        ref={ref}
        {...props}
    >
        {children}
    </DropdownPrimitive.Trigger>
));

DropdownTrigger.displayName = "ColidyDropdownTrigger";

const DropdownItems = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownPrimitive.Content>
>(({ align = "end", side = "bottom", children, className, ...props }, ref) => (
    <DropdownPrimitive.Portal>
        <DropdownPrimitive.Content
            className={cn(
                "!z-[50] w-full min-w-[220px] bg-input border rounded p-2 shadow-sm will-change-[opacity,transform] data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out",
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
            side={side}
            align={align}
            ref={ref}
            {...props}
        >
            {children}
        </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
));

DropdownItems.displayName = "ColidyDropdownItems";

const DropdownItem = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownPrimitive.Item> & {
        kbd?: string;
        disabled?: boolean;
    }
>(({ children, kbd, disabled, ...props }, ref) => (
    <DropdownPrimitive.Item
        className={cn(
            "group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center gap-2 h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-border",
            {
                "opacity-50 pointer-events-none": disabled,
            }
        )}
        ref={ref}
        {...props}
    >
        {children}
        {kbd && (
            <kbd className="ml-auto text-xs bg-border text-background rounded-sm px-1">
                {kbd}
            </kbd>
        )}
    </DropdownPrimitive.Item>
));

DropdownItem.displayName = "ColidyDropdownItem";

const DropdownSub = DropdownPrimitive.Sub;

const DropdownSubTrigger = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof DropdownPrimitive.SubTrigger>
>(({ children, ...props }, ref) => (
    <DropdownPrimitive.SubTrigger
        className="group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-border"
        {...props}
    >
        <span>{children}</span>
        <div className="ml-auto pl-[20px]">
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
        </div>
    </DropdownPrimitive.SubTrigger>
));

DropdownSubTrigger.displayName = "ColidyDropdownSubTrigger";

const DropdownSubItems = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownPrimitive.SubContent> & {
        align?: "start" | "center" | "end";
        side?: "top" | "right" | "bottom" | "left";
    }
>(({ align = "end", side = "right", children, className, ...props }, ref) => (
    <DropdownPrimitive.Portal>
        <DropdownPrimitive.SubContent
            className={cn(
                "!z-[51] w-full min-w-[220px] bg-input border rounded p-2 shadow-sm will-change-[opacity,transform] data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out",
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
            sideOffset={4}
            alignOffset={-2}
            ref={ref}
            {...props}
        >
            {children}
        </DropdownPrimitive.SubContent>
    </DropdownPrimitive.Portal>
));

DropdownSubItems.displayName = "ColidyDropdownSubItems";

const DropdownCheckbox = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownPrimitive.CheckboxItem>
>(({ children, className, ...props }, ref) => (
    <DropdownPrimitive.CheckboxItem
        {...props}
        className={cn(
            "group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-border",
            className
        )}
        ref={ref}
    >
        {children}
        <DropdownPrimitive.ItemIndicator className="absolute right-4 inline-flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"currentColor"}
                fill={"none"}
            >
                <path
                    d="M5 14L8.5 17.5L19 6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </DropdownPrimitive.ItemIndicator>
    </DropdownPrimitive.CheckboxItem>
));

DropdownCheckbox.displayName = "ColidyDropdownCheckbox";

const DropdownSeperator = forwardRef<HTMLHRElement>((props, ref) => (
    <DropdownPrimitive.Separator
        className="h-px bg-border my-4"
        ref={ref}
        {...props}
    />
));

DropdownSeperator.displayName = "ColidyDropdownSeperator";

const DropdownLabel = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownPrimitive.Label>
>(({ children, ...props }, ref) => (
    <DropdownPrimitive.Label
        className="text-sm text-muted px-3 py-1 mb-1 select-none"
        ref={ref}
        {...props}
    >
        {children}
    </DropdownPrimitive.Label>
));

DropdownLabel.displayName = "ColidyDropdownLabel";

const DropdownRadioGroup = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownPrimitive.RadioGroup>
>(({ children, ...props }, ref) => (
    <DropdownPrimitive.RadioGroup ref={ref} {...props}>
        {children}
    </DropdownPrimitive.RadioGroup>
));

DropdownRadioGroup.displayName = "ColidyDropdownRadioGroup";

const DropdownRadioItem = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof DropdownPrimitive.RadioItem>
>(({ value, children, ...props }, ref) => (
    <DropdownPrimitive.RadioItem
        value={value}
        className="group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-border"
        ref={ref}
        {...props}
    >
        {children}
        <DropdownPrimitive.ItemIndicator className="absolute right-4 inline-flex items-center justify-center">
            <span className="w-2 h-2 bg-foreground rounded-full" />
        </DropdownPrimitive.ItemIndicator>
    </DropdownPrimitive.RadioItem>
));

DropdownRadioItem.displayName = "ColidyDropdownRadioItem";

export {
    Dropdown,
    DropdownTrigger,
    DropdownItems,
    DropdownItem,
    DropdownSub,
    DropdownSubTrigger,
    DropdownSubItems,
    DropdownCheckbox,
    DropdownSeperator,
    DropdownLabel,
    DropdownRadioGroup,
    DropdownRadioItem,
};
