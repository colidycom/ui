"use server";

import { Suspense } from "react";
import { Card } from "@/colidy-ui/Card";
import { promises as fs } from "fs";
import { CodeBlock } from "../mdx/CodeBlock";
import markedContents from "@/../marked-contents.json";
import path from "path";

export const PreviewDemo = async ({
    children,
    displayName,
}: {
    children: React.ReactNode;
    displayName: string;
}) => {
    // File content için buildin dışına çıktım sonuç ne
    let fileContent = await fs.readFile(
        path.join(
            __dirname,
            "..",
            "..",
            "..",
            "..",
            "..",
            "..",
            "src",
            "components",
            "demos",
            displayName + ".tsx"
        ),
        "utf8"
    );

    if (fileContent.includes("// @end-example")) {
        fileContent = fileContent.split("// @end-example")[0];
    }

    if (markedContents.includes(displayName))
        return (
            <div className="!p-0 overflow-visible bg-primary flex flex-col gap-2">
                <div className="relative z-20 w-full p-4 aspect-video rounded flex items-center justify-center border">
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </div>

                <div className="flex items-center justify-center gap-2 border rounded bg-secondary">
                    <CodeBlock content={fileContent} filename={`example.tsx`} />
                </div>
            </div>
        );

    return (
        <Card className="!p-0 overflow-visible">
            <div className="relative z-20 w-full p-4 aspect-video bg-gradient-to-br to-colored from-violet-700 backdrop-blur rounded-t flex items-center justify-center border">
                {children}
                <div className="-z-[1] pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255),rgba(255,255,255))]" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <CodeBlock content={fileContent} filename={`example.tsx`} />
            </div>
        </Card>
    );
};
