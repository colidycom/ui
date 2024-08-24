import { cn } from "@colidy/ui-utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { forwardRef } from "react";

const Tabs = TabsPrimitive.Root;

const TabList = forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn("border-b text-muted flex items-center mb-6", className)}
        {...props}
    />
));

TabList.displayName = "ColidyTabList";

const Tab = forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof TabsPrimitive.Trigger>
>(({ children, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className="border-b border-transparent data-[state=active]:text-colored data-[state=active]:border-colored px-5 py-3 text-sm/6 -mb-px transition-all"
        {...props}
    >
        {children}
    </TabsPrimitive.Trigger>
));

Tab.displayName = "ColidyTab";

const TabPanel = TabsPrimitive.Content;

export { Tabs, TabList, Tab, TabPanel };
