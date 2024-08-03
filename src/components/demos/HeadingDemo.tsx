"use client";
import { Heading } from "@/colidy-ui/Heading";

export const Demo = () => {
    return (
        <div>
            <Heading size="h1">Heading 1</Heading>
            <Heading size="h2">Heading 2</Heading>
            <Heading size="h3">Heading 3</Heading>
            <Heading size="h4">Heading 4</Heading>
            <Heading size="h5">Heading 5</Heading>
            <Heading size="h6">Heading 6</Heading>
        </div>
    );
};

// @end-example
export default {
    props: null,
    examples: null,
};


// @start-demo-string
export const DemoString = `"use client";
import { Heading } from "@/colidy-ui/Heading";

export const Demo = () => {
    return (
        <div>
            <Heading size="h1">Heading 1</Heading>
            <Heading size="h2">Heading 2</Heading>
            <Heading size="h3">Heading 3</Heading>
            <Heading size="h4">Heading 4</Heading>
            <Heading size="h5">Heading 5</Heading>
            <Heading size="h6">Heading 6</Heading>
        </div>
    );
};

`;