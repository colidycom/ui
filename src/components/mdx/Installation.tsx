"use server";

import Link from "next/link";
import { CodeBlock } from "./CodeBlock";
import { LinkedHeading } from "./LinkedHeading";
import { Tab, TabList, TabPanel, Tabs } from "@/colidy-ui/Tabs";
import Highlighter from "./Highlight";
import { CopyButton } from "./CopyButton";
import * as Demos from "../demos";
import { getPackages } from "@/utils/parse-packages";

export const Packages = async ({ file }: { file: string }) => {
    const fileKey = Object.keys(Demos).find(
        (key) => key.toLowerCase() === (file + "demo").toLowerCase()
    );

    const res = await fetch("https://api.github.com/repos/colidycom/ui/contents/src/components/ui/" + fileKey?.replace('Demo', '') + ".tsx", {
        headers: {
            Authorization: 'token ' + process.env.GH_KEY
        }
    }).catch(() => null);

    const json = await res?.json();
    const fileContent = Buffer.from(json?.content || Buffer.from('Error').toString('base64'), 'base64').toString();
    const { packages } = getPackages(fileContent);

    return (
        <ul className="flex items-center flex-wrap gap-2 !p-0 !m-0">
            {packages.map((pkg: any) => {
                return (
                    <li key={pkg.name} className="flex items-center gap-2 !p-0">
                        <Link
                            target={
                                pkg.link.startsWith("http") ? "_blank" : "_self"
                            }
                            href={pkg.link}
                            className="no-underline border px-3 py-2 rounded shadow-sm hover:bg-border/20 text-sm ring-offset-primary active:ring-2 active:ring-offset-2 active:ring-colored transition-all"
                        >
                            {pkg.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export const Code = async ({ file }: { file: string }) => {
    const fileKey = Object.keys(Demos).find(
        (key) => key.toLowerCase() === (file + "demo").toLowerCase()
    );

    const res = await fetch("https://api.github.com/repos/colidycom/ui/contents/src/components/ui/" + fileKey?.replace('Demo', '') + ".tsx", {
        headers: {
            Authorization: 'token ' + process.env.GH_KEY
        }
    }).catch(() => null);

    const json = await res?.json();
    const fileContent = Buffer.from(json?.content || Buffer.from('Error').toString('base64'), 'base64').toString();

    const { colidyPackages } = getPackages(fileContent);

    const packageReplacedContent = colidyPackages.reduce(
        (acc: string, pkg: any) => {
            const regex = new RegExp(`from "${pkg.native}";`, "g");
            return acc.replace(regex, `from "${pkg.name}";`);
        },
        fileContent
    );

    return (
        <CodeBlock
            content={packageReplacedContent}
            filename={`src/components/ui/${file}.tsx`}
        />
    );
};

export const Installation = async ({ file }: { file: string }) => {
    return (
        <div>
            <Tabs defaultValue="cli">
                <TabList>
                    <Tab value="cli">CLI</Tab>
                    <Tab value="manual">Manual</Tab>
                </TabList>
                <TabPanel value="cli">
                    {" "}
                    <div className="dark relative rounded-lg bg-secondary before:w-[calc(100% + 2px)] before:h-[calc(100% + 2px)] before:inset-0 before:ml-[-1px] before:mt-[-1px] before:mb-[-1px] before:mr-[-1px] before:rounded-lg before:z-[-1] before:absolute before:bg-gradient-to-b before:from-border shadow-sm forced-colors:outline w-full">
                        <Highlighter language="bash">
                            {"npx @colidy/ui i " + file}
                        </Highlighter>
                        <div className="absolute top-0 right-0 p-4">
                            <CopyButton>
                                {"npx @colidy/ui i " + file}
                            </CopyButton>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="manual">
                    <LinkedHeading level={3} id="packages">
                        Packages
                    </LinkedHeading>
                    <Packages file={file} />

                    <LinkedHeading level={3} id="code">
                        Code
                    </LinkedHeading>
                    <Code file={file} />
                </TabPanel>
            </Tabs>
        </div>
    );
};
