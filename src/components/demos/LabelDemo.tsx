"use client";
import { Label } from "@/colidy-ui/Label";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <div>
            <Card className="max-w-lg">
                <Label label="Full Name" />
            </Card>
        </div>
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
    ],
    examples: [
        {
            title: "Basic usage",
            description: "Basic usage of the `Label` component.",
            imports: `import { Label } from "@/colidy-ui/Label";`,
            code: `<Card className="max-w-lg">
            <Label label="Full Name" />
            </Card>`,
            component: () => {
                return (
                    <Card className="max-w-lg">
                        <Label label="Full Name" />
                    </Card>
                );
            },
        },

        {
            title: "With description",
            description:
                "Basic usage of the `Label` component with description.",
            imports: `import { Label } from "@/colidy-ui/Label";`,
            code: `<Card className="max-w-lg">
            <Label label="Full Name" description="Your full name." />
            </Card>`,
            component: () => {
                return (
                    <Card className="max-w-lg">
                        <Label
                            label="Full Name"
                            description="Your full name."
                        />
                    </Card>
                );
            },
        },
    ],
};


// @start-demo-string
export const DemoString = `"use client";
import { Label } from "@/colidy-ui/Label";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <div>
            <Card className="max-w-lg">
                <Label label="Full Name" />
            </Card>
        </div>
    );
};

`;