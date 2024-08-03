"use client";
import { Tooltip } from "@/colidy-ui/Tooltip";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <Card className="max-w-lg">
            <Tooltip content="Hello, world!">
                <span>Hover over me</span>
            </Tooltip>
        </Card>
    );
};

// @end-example
export default {
    props: null,
    examples: null,
};


// @start-demo-string
export const DemoString = `"use client";
import { Tooltip } from "@/colidy-ui/Tooltip";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <Card className="max-w-lg">
            <Tooltip content="Hello, world!">
                <span>Hover over me</span>
            </Tooltip>
        </Card>
    );
};

`;