"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";
import Highlighter from "./Highlight";
import { cn } from "@colidy/ui-utils";

export const CodeBlock = ({
    content,
    filename,
    noStyle,
    ...props
}: {
    content: string;
    filename: string;
    noStyle?: boolean;
}) => {
    const [expanded, setExpanded] = useState(false);

    if (noStyle)
        return (
            <div {...props}>
                <div
                    style={{ maxHeight: expanded ? "80vh" : "400px" }}
                    className="!mt-0 overflow-auto !bg-transparent !border-none"
                >
                    <Highlighter>{content}</Highlighter>
                </div>
                <div className="absolute right-4 top-4">
                    <CopyButton>{content}</CopyButton>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex pb-4 pr-8 justify-end items-end">
                    <div>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="bg-border/20 backdrop-blur text-sm px-2 py-2 h-8 flex items-center justify-center rounded"
                        >
                            {expanded ? "Collapse" : "Expand"}
                        </button>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="relative rounded-lg bg-secondary before:w-[calc(100% + 2px)] before:h-[calc(100% + 2px)] before:inset-0 before:ml-[-1px] before:mt-[-1px] before:mb-[-1px] before:mr-[-1px] before:rounded-lg before:z-[-1] before:absolute before:bg-gradient-to-b before:from-border shadow-sm forced-colors:outline w-full">
            <div
                className={
                    "sticky top-16 rounded-t-lg bg-secondary z-[1] border-b flex justify-between pt-1"
                }
            >
                <div className="border-b text-colored border-colored px-6 py-2 text-sm bg-secondary rounded-tl-lg">
                    {filename}
                </div>
                <div
                    className={cn(
                        "flex-1 rounded-tl-lg flex justify-end items-center pr-4 bg-zinc-500/10 border-t border-l"
                    )}
                >
                    <CopyButton>{content}</CopyButton>
                </div>
            </div>
            <div className="dark bg-secondary rounded-b-[inherit] relative overflow-hidden">
                <div
                    style={{ maxHeight: expanded ? "80vh" : "400px" }}
                    className="p-4 !mt-0 overflow-auto !bg-transparent !border-none"
                >
                    <Highlighter>{content}</Highlighter>
                </div>
            </div>
            <div className="dark absolute inset-x-0 bottom-0 flex pb-4 pr-8 justify-end items-end">
                <div>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="bg-border/20 text-foreground backdrop-blur text-sm px-2 py-2 h-8 flex items-center justify-center rounded"
                    >
                        {expanded ? "Collapse" : "Expand"}
                    </button>
                </div>
            </div>
        </div>
    );
};
