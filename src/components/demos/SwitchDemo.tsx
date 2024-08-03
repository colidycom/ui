"use client";
import { Switch } from "@/colidy-ui/Switch";
import { Card } from "@/colidy-ui/Card";

export const Demo = () => {
    return (
        <Card className="max-w-sm flex flex-col gap-2">
            <Switch label="Airplane Mode" size="sm" />
            <Switch label="Airplane Mode" />
            <Switch label="Airplane Mode" size="lg" />
        </Card>
    );
};

// @end-example
export default {
    props: null,
    examples: null,
};
