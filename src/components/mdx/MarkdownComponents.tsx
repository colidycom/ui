import { cn } from "@colidy/ui-utils";
import { LinkedHeading } from "./LinkedHeading";
import { CopyButton } from "./CopyButton";
import { ParagraphAnchor } from "../ui/Paragraph";
import { Tab, TabPanel, Tabs, TabList } from "../ui/Tabs";

// DEMOS
export * from "../demos";

// COMPONENTS
export * from "../ui/Tabs";
export { Code, Installation, Packages } from "./Installation";
export * from "./Examples";
export * from "./PropsTable";

export const h1 = ({ id, ...props }: any) => (
    <LinkedHeading id={id} level={1} {...props} />
);
export const h2 = ({ id, ...props }: any) => (
    <LinkedHeading id={id} level={2} {...props} />
);
export const h3 = ({ id, ...props }: any) => (
    <LinkedHeading id={id} level={3} {...props} />
);
export const h4 = ({ id, ...props }: any) => (
    <LinkedHeading id={id} level={4} {...props} />
);
export const h5 = ({ id, ...props }: any) => (
    <LinkedHeading id={id} level={5} {...props} />
);
export const h6 = ({ id, ...props }: any) => (
    <LinkedHeading id={id} level={6} {...props} />
);
export const a = (props: any) => (
    <ParagraphAnchor
        {...props}
        target={props.href.startsWith("http") ? "_blank" : "_self"}
    />
);
export const p = (props: any) => <p className="text-muted" {...props} />;
export const code = (props: any) =>
    props["data-language"] ? (
        <code {...props} />
    ) : (
        <code
            className="text-colored bg-zinc-500/10 font-sans px-2 py-1 text-sm rounded"
            {...props}
        />
    );

export const pre = ({
    filename,
    raw,
    copy,
    className,
    children,
    withCopy,
    basicCodeBlock,
    ...props
}: any) => {
    return (
        <div className="relative rounded-lg bg-secondary before:w-[calc(100% + 2px)] before:h-[calc(100% + 2px)] before:inset-0 before:ml-[-1px] before:mt-[-1px] before:mb-[-1px] before:mr-[-1px] before:rounded-lg before:z-[-1] before:absolute before:bg-gradient-to-b before:from-border shadow-sm forced-colors:outline w-full">
            {!basicCodeBlock && (
                <div
                    className={cn(
                        "sticky top-16 rounded-t-lg bg-secondary z-[1] border-b flex justify-between",
                        {
                            "pt-2": !!filename,
                        }
                    )}
                >
                    {filename && (
                        <div className="border-b text-colored border-colored px-6 py-2 text-sm bg-secondary rounded-tl-lg">
                            {filename}
                        </div>
                    )}
                    <div
                        className={cn(
                            "flex-1 rounded-tl-lg flex justify-end items-center pr-4",
                            {
                                "bg-zinc-500/10 border-t border-l": !!filename,
                                "py-4": !filename,
                            }
                        )}
                    >
                        <CopyButton>{raw}</CopyButton>
                    </div>
                </div>
            )}

            {basicCodeBlock && withCopy && (
                <div
                    className={cn(
                        "flex-1 rounded-tl-lg flex justify-end items-center absolute z-[1] right-4 top-4"
                    )}
                >
                    <CopyButton>{raw}</CopyButton>
                </div>
            )}
            <div className="dark !bg-secondary relative overflow-hidden p-4 !mt-0 !rounded-lg">
                <pre
                    className={cn(
                        "!bg-transparent !m-0 !p-0 overflow-auto !rounded-none !border-none",
                        className
                    )}
                    {...props}
                >
                    {children}
                </pre>
            </div>
        </div>
    );
};

export const BashCommands = ({ children, ...props }: any) => {
    const bashes = Object.keys(props);

    return (
        <Tabs defaultValue={bashes[0]} className="w-full">
            <TabList>
                {bashes.map((bash, index) => (
                    <Tab key={index} value={bash}>
                        {bash}
                    </Tab>
                ))}
            </TabList>
            {bashes.map((bash, index) => (
                <TabPanel key={index} value={bash}>
                    <div className="relative rounded-lg bg-secondary before:w-[calc(100% + 2px)] before:h-[calc(100% + 2px)] before:inset-0 before:ml-[-1px] before:mt-[-1px] before:mb-[-1px] before:mr-[-1px] before:rounded-lg before:z-[-1] before:absolute before:bg-gradient-to-b before:from-border shadow-sm forced-colors:outline w-full">
                        <pre
                            className={cn(
                                "!p-4 !mt-0 overflow-auto !bg-transparent !border-none"
                            )}
                            {...props}
                        >
                            {props[bash]}
                        </pre>

                        <div
                            className={cn(
                                "flex-1 rounded-tl-lg flex justify-end items-center absolute right-4 top-4"
                            )}
                        >
                            <CopyButton>{props[bash]}</CopyButton>
                        </div>
                    </div>
                </TabPanel>
            ))}
        </Tabs>
    );
};

export const hr = () => <hr className="border-border/50" />;
