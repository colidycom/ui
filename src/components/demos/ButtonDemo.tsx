"use client";
import { Button } from "@/colidy-ui/Button";
import { colors } from "@colidy/ui-utils";

export const Demo = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-2 max-w-lg">
            {["primary", "secondary"].concat(colors).map((color) => (
                <Button key={color} color={color}>
                    {color}
                </Button>
            ))}
        </div>
    );
};

// @end-example
export default {
    props: [
        {
            prop: "color",
            type: colors.join(" | "),
            default: null,
            required: true,
            description: "The color of the button.",
        },
        {
            prop: "variant",
            type: "`solid | outline | ghost | link`",
            default: "solid",
            required: false,
            description: "The variant of the button.",
        },
        {
            prop: "size",
            type: "`sm | md | lg | xl`",
            default: "md",
            required: false,
            description: "The size of the button.",
        },
        {
            prop: "href",
            type: "`string`",
            default: null,
            required: false,
            description: "The URL to navigate to when the button is clicked.",
        },
        {
            prop: "disableRipple",
            type: "`boolean`",
            default: "false",
            required: false,
            description: "Disables the ripple effect.",
        },
    ],
    examples: [
        {
            title: "Variants",
            description: "The button component has 3 variants.",
            component: () => (
                <div className="flex flex-wrap gap-4 max-w-2xl">
                    {["ghost", "solid", "outline", "link"].map((variant) => (
                        <Button
                            key={variant}
                            variant={variant as any}
                            color={"primary"}
                        >
                            {variant}
                        </Button>
                    ))}
                </div>
            ),
            imports: `import { Button } from "@/colidy-ui/Button";`,
        },
        {
            title: "Sizes",
            description: "The button component has 3 sizes.",
            component: () => (
                <div className="flex flex-wrap items-center gap-4 max-w-3xl !p-2">
                    {["sm", "md", "lg", "xl"].map((size) => (
                        <Button key={size} size={size as any} color={"primary"}>
                            {
                                {
                                    sm: "Small",
                                    md: "Medium",
                                    lg: "Large",
                                    xl: "Extra Large",
                                }[size]
                            }{" "}
                            Button
                        </Button>
                    ))}
                </div>
            ),
            imports: `import { Button } from "@/colidy-ui/Button";`,
        },
        {
            title: "Colors",
            description: "The button component has 3 colors.",
            component: () => (
                <div className="flex flex-wrap gap-4">
                    {colors.map((color) => (
                        <Button key={color} color={color}>
                            {color}
                        </Button>
                    ))}
                </div>
            ),
            imports: `import { Button } from "@/colidy-ui/Button";`,
        },
        {
            title: "Disabled",
            description: "The button component can be disabled.",
            component: () => (
                <div className="flex flex-wrap gap-4">
                    <Button disabled>Try to click me</Button>
                </div>
            ),
            imports: `import { Button } from "@/colidy-ui/Button";`,
        },
        {
            title: "Loading State",
            description: "The button component can have a loading state.",
            component: () => (
                <div className="flex flex-wrap gap-4">
                    <Button isLoading>Click me</Button>
                </div>
            ),
        },
        {
            title: "With Icon",
            description: "The button component can have an icon.",
            component: () => (
                <div className="flex flex-wrap gap-4">
                    <Button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                            color={"currentColor"}
                            fill={"none"}
                        >
                            <path
                                d="M12 4V20M20 12H4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Add something
                    </Button>
                </div>
            ),
        },
        {
            title: "Icon Only",
            description: "The button component can have a ripple effect.",
            component: () => (
                <div className="flex flex-wrap gap-4">
                    <Button iconOnly>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                            color={"currentColor"}
                            fill={"none"}
                        >
                            <path
                                d="M12 4V20M20 12H4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </div>
            ),
        },
    ],
};


// @start-demo-string
export const DemoString = `"use client";
import { Button } from "@/colidy-ui/Button";
import { colors } from "@colidy/ui-utils";

export const Demo = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-2 max-w-lg">
            {["primary", "secondary"].concat(colors).map((color) => (
                <Button key={color} color={color}>
                    {color}
                </Button>
            ))}
        </div>
    );
};

`;