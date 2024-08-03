"use client";

import { Suspense, useEffect, useState } from "react";
import { Card } from "@/colidy-ui/Card";
import { CodeBlock } from "./CodeBlock";
import { LinkedHeading } from "./LinkedHeading";
import { Paragraph } from "@/colidy-ui/Paragraph";
import markedContents from "@/../marked-contents.json";

export const Examples = ({ file }: { file: string }) => {
    const [componentData, setComponentData] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        import(`../demos/${file}`)
            .then((module) => {
                setComponentData(module.default);
            })
            .catch((err) => {
                console.error("Error loading component data:", err);
                setError(err);
            });
    }, [file]);

    if (error) return <div>Error loading component data</div>;

    if (!componentData) return <div>Loading...</div>; // Yüklenme durumu

    const ExampleNameToFunctionName = (name: string) => {
        const words = name.split(" ");
        const capitalizedWords = words.map(
            (word) => word[0].toUpperCase() + word.slice(1)
        );
        return capitalizedWords.join("");
    };

    if (!componentData.examples) return null;
    return (
        <div className="space-y-12">
            {componentData.examples.map((example: any, index: number) => (
                <div key={index}>
                    <div className="mb-4">
                        <LinkedHeading
                            level={3}
                            id={
                                example.title
                                    .toLowerCase()
                                    .replace(/ /g, "-") as string
                            }
                        >
                            {example.title}
                        </LinkedHeading>
                        <Paragraph>{example.description}</Paragraph>
                    </div>
                    {markedContents.includes(file) ? (
                        <>
                            <div className="flex flex-col gap-2">
                                <div className="bg-primary relative z-20 w-full p-4 aspect-video rounded flex items-center justify-center border">
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <example.component />
                                    </Suspense>
                                </div>

                                <div className="flex items-center justify-center gap-2 border rounded bg-secondary">
                                    <CodeBlock
                                        content={`${
                                            example.imports
                                        }\n\nexport default function ${ExampleNameToFunctionName(
                                            example.title
                                        )}() {\n    return (\n        ${
                                            example.code
                                        }\n    );\n}`}
                                        filename={`example.tsx`}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <Card className="!p-0 overflow-hidden">
                            <div className="relative w-full min-h-72 p-6 bg-gradient-to-br to-colored from-violet-700 backdrop-blur rounded-t flex items-center justify-center border">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <example.component />
                                </Suspense>
                                <div className="-z-[1] pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255),rgba(255,255,255))]" />
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <CodeBlock
                                    content={`${
                                        example.imports
                                    }\n\nexport default function ${ExampleNameToFunctionName(
                                        example.title
                                    )}() {\n    return (\n        ${
                                        example.code
                                    }\n    );\n}`}
                                    filename={`example.tsx`}
                                />
                            </div>
                        </Card>
                    )}
                </div>
            ))}
        </div>
    );
};
