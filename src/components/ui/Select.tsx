import { cn } from "@colidy/ui-utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";
import { Label } from "./Label";

const Select = forwardRef<
    HTMLDivElement,
    {
        label?: string;
        description?: string;
        placeholder?: string;
        children: React.ReactNode;
        containerProps?: React.HTMLAttributes<HTMLDivElement>;
        triggerProps?: React.ComponentProps<typeof SelectTrigger>;
        contentProps?: React.ComponentProps<typeof SelectContent>;
    } & React.ComponentProps<typeof SelectPrimitive.Root>
>(
    (
        {
            label,
            description,
            placeholder,
            children,
            triggerProps,
            contentProps,
            ...props
        },
        ref
    ) => (
        <div className="flex flex-col gap-2 w-full" {...props} ref={ref}>
            {label && <Label label={label} />}
            <SelectPrimitive.Root {...props}>
                <SelectTrigger {...triggerProps}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent {...contentProps}>{children}</SelectContent>
            </SelectPrimitive.Root>
            {description && <p className="text-xs text-muted">{description}</p>}
        </div>
    )
);

Select.displayName = "ColidySelect";

const SelectTrigger = forwardRef<
    HTMLButtonElement,
    {
        className?: string;
        children: React.ReactNode;
    } & React.ComponentProps<typeof SelectPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
    <SelectPrimitive.Trigger
        className={cn(
            "!outline-none bg-input border hover:border-accent relative rounded flex items-center transition-all h-[36px] px-3 text-sm/4 shadow-sm justify-between",
            className
        )}
        ref={ref}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                color="currentColor"
                fill="none"
            >
                <path
                    d="M17.9999 14C17.9999 14 13.581 19 11.9999 19C10.4188 19 5.99994 14 5.99994 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.9999 9.99996C17.9999 9.99996 13.581 5.00001 11.9999 5C10.4188 4.99999 5.99994 10 5.99994 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = "ColidySelectTrigger";

const SelectValue = SelectPrimitive.Value;
SelectValue.displayName = "ColidySelectValue";

const SelectContent = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof SelectPrimitive.Content>
>(({ children, className, ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            className={cn(
                "overflow-hidden bg-input border rounded z-[9999]",
                className
            )}
            ref={ref}
            {...props}
        >
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-[25px] text-muted cursor-default">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                >
                    <path d="M7 15l5-5 5 5H7z" />
                </svg>
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="p-[3px]">
                {children}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-[25px] text-muted cursor-default">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                >
                    <path d="M7 9l5 5 5-5H7z" />
                </svg>
            </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));

SelectContent.displayName = "ColidySelectContent";

const SelectGroup = forwardRef<
    HTMLDivElement,
    { label: string; children: React.ReactNode }
>(({ label, children }, ref) => (
    <SelectPrimitive.Group ref={ref}>
        <SelectPrimitive.Label className="px-[35px] text-xs leading-[25px] pt-1 text-muted">
            {label}
        </SelectPrimitive.Label>
        {children}
    </SelectPrimitive.Group>
));

SelectGroup.displayName = "ColidySelectGroup";

const SelectSeparator = forwardRef<HTMLHRElement>((props, ref) => (
    <SelectPrimitive.Separator
        className="h-[1px] bg-muted m-[5px]"
        ref={ref}
        {...props}
    />
));

SelectSeparator.displayName = "ColidySelectSeparator";

const SelectItem = forwardRef<
    HTMLDivElement,
    {
        children: React.ReactNode;
        className?: string;
    } & React.ComponentProps<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
    <SelectPrimitive.Item
        className={cn(
            "text-sm/4 leading-none text-muted rounded-sm flex items-center h-[36px] pr-[35px] pl-[30px] relative select-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-colored data-[highlighted]:text-white",
            className
        )}
        ref={ref}
        {...props}
    >
        <SelectPrimitive.ItemText className="flex">
            {children}
        </SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-1 w-[25px] inline-flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={16}
                color="currentColor"
                fill="none"
            >
                <path
                    d="M5 14L8.5 17.5L19 6.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
));

SelectItem.displayName = "ColidySelectItem";

export {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectSeparator,
    SelectItem,
};
