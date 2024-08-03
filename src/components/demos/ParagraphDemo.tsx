"use client";
import {
    Paragraph,
    ParagraphAnchor,
    ParagraphStrong,
} from "@/colidy-ui/Paragraph";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <Card className="max-w-sm">
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do{" "}
                <ParagraphStrong>eiusmod tempor</ParagraphStrong> incididunt ut
                labore et dolore magna aliqua. Ut{" "}
                <ParagraphAnchor href="#">enim</ParagraphAnchor> ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </Paragraph>
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
import {
    Paragraph,
    ParagraphAnchor,
    ParagraphStrong,
} from "@/colidy-ui/Paragraph";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <Card className="max-w-sm">
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do{" "}
                <ParagraphStrong>eiusmod tempor</ParagraphStrong> incididunt ut
                labore et dolore magna aliqua. Ut{" "}
                <ParagraphAnchor href="#">enim</ParagraphAnchor> ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </Paragraph>
        </Card>
    );
};

`;