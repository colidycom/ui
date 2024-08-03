"use client";
import { TextField } from "@/colidy-ui/TextField";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <Card className="max-w-lg">
            <TextField />
        </Card>
    );
};

// @end-example
export default {
    props: [
        {
            prop: "label",
            type: "`string`",
            default: null,
            required: true,
            description: "The label text.",
        },
        {
            prop: "description",
            type: "`string`",
            default: null,
            required: false,
            description: "The description text.",
        },
        {
            prop: "size",
            type: "`sm | md | lg`",
            default: null,
            required: false,
            description: "The size of the text field.",
        },
        {
            prop: "left",
            type: "`React.ReactNode | string`",
            default: null,
            required: false,
            description:
                "The content to display on the left side of the text field.",
        },
        {
            prop: "right",
            type: "`React.ReactNode | string`",
            default: null,
            required: false,
            description:
                "The content to display on the right side of the text field.",
        },
    ],
    examples: [
        {
            title: "Basic usage",
            description: "Basic usage of the `Label` component.",
            imports: `import { TextField } from "@/colidy-ui/TextField";`,
            code: `<Card className="max-w-lg">
                <TextField />
            </Card>`,
            component: () => {
                return (
                    <Card className="max-w-lg">
                        <TextField />
                    </Card>
                );
            },
        },
        {
            title: "With label",
            description: "Basic usage of the `TextField` component with label.",
            imports: `import { TextField } from "@/colidy-ui/TextField";`,
            code: `<Card className="max-w-lg">
                <TextField label="Full Name" />
            </Card>`,
            component: () => {
                return (
                    <Card className="max-w-lg">
                        <TextField label="Full Name" />
                    </Card>
                );
            },
        },
        {
            title: "With description",
            description:
                "Basic usage of the `TextField` component with description.",
            imports: `import { TextField } from "@/colidy-ui/TextField";`,
            code: `<Card className="max-w-lg">
                <TextField
                    label="Full Name"
                    description="Your full name."
                />
            </Card>`,
            component: () => {
                return (
                    <Card className="max-w-lg">
                        <TextField
                            label="Full Name"
                            description="Your full name."
                        />
                    </Card>
                );
            },
        },
        {
            title: "With left content",
            description:
                "Basic usage of the `TextField` component with left content.",
            imports: `import { TextField } from "@/colidy-ui/TextField";`,
            code: `<Card className="max-w-lg">
                <TextField label="Budget" left="$" />
            </Card>`,
            component: () => {
                return (
                    <Card className="max-w-lg">
                        <TextField label="Budget" left="$" />
                    </Card>
                );
            },
        },
        {
            title: "With right content",
            description:
                "Basic usage of the `TextField` component with right content.",
            imports: `import { TextField } from "@/colidy-ui/TextField";`,
            code: `<Card className="max-w-lg">
                <TextField label="Budget" right="USD" />
            </Card>`,
            component: () => {
                return (
                    <Card className="max-w-lg">
                        <TextField label="Budget" right="USD" />
                    </Card>
                );
            },
        },
    ],
};
