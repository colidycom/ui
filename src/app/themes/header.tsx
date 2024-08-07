"use client";
import { Button } from "@/components/ui/Button";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger,
} from "@/colidy-ui/Popover";
import { cn } from "@colidy/ui-utils";
import { Props } from "./props";
import {
    Dialog,
    DialogBody,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogClose,
    DialogFooter,
} from "@/colidy-ui/Dialog";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import Highlighter from "@/components/mdx/Highlight";
import { TextField } from "@/components/ui/TextField";
import { Tab, TabList, TabPanel, Tabs } from "@/colidy-ui/Tabs";
import { useEffect, useState } from "react";

export default function Header({
    schemes,
    radiuses,
    color,
    mode,
    radius,
    setColor,
    setMode,
    setRadius,
    hue,
    saturation,
    lightHue,
    lightSaturation,
    setHue,
    setSaturation,
    setLightHue,
    setLightSaturation,
}: Props) {
    const cssCode = `@layer base {
    :root {
        --primary: ${lightHue || 240} ${lightSaturation || 0} 99%;
        --secondary: ${lightHue || 240} ${lightSaturation || 0} 97%;
        --tertiary: ${lightHue || 240} ${lightSaturation || 0} 95%;
        --accent: ${lightHue || 240} ${lightSaturation || 0} 90%;

        --input: ${lightHue || 240} ${lightSaturation || 0} 98%;
        --border: ${lightHue || 240} ${lightSaturation || 0} 90%;

        --foreground: 0 0% 0%;
        --muted: 0 0% 40%;

        --colored: 215 72% 57%;

        --round: ${radius}rem;
    }

    .dark {
        --primary: ${hue || 240} ${saturation || 10}% 3.92%;
        --secondary: ${hue || 240} ${saturation || 5.88}% 5.88%;
        --tertiary: ${hue || 240} ${saturation || 5.88}% 7.84%;
        --accent: ${hue || 240} ${saturation || 3}% 11.76%;

        --input: ${hue || 240} ${saturation || 4}% 5.88%;
        --border: ${hue || 240} ${saturation || 3}% 11.76%;

        --foreground: 0 0% 100%;
        --muted: 0 0% 60%;

        --colored: 215 72% 57%;

        --round: ${radius}rem;
    }
}`;
    const templates: {
        name: string;
        hue: number;
        saturation: number;
        lightHue: number | null;
        lightSaturation: number | null;
        icon?: string;
    }[] = [
        {
            name: "Eclipse",
            hue: 220,
            saturation: 15,
            lightHue: 220,
            lightSaturation: 15,
            icon: "hsl(220, 15%, 25%)",
        },
        {
            name: "Dawn Breeze",
            hue: 180,
            saturation: 20,
            lightHue: 180,
            lightSaturation: 20,
            icon: "hsl(180, 20%, 85%)",
        },
        {
            name: "Autumn Blaze",
            hue: 30,
            saturation: 70,
            lightHue: 30,
            lightSaturation: 70,
            icon: "hsl(30, 70%, 60%)",
        },
        {
            name: "Mystic Forest",
            hue: 120,
            saturation: 30,
            lightHue: 120,
            lightSaturation: 30,
            icon: "hsl(120, 30%, 40%)",
        },
        {
            name: "Crimson Night",
            hue: 350,
            saturation: 40,
            lightHue: 350,
            lightSaturation: 40,
            icon: "hsl(350, 40%, 30%)",
        },
        {
            name: "Ocean Wave",
            hue: 200,
            saturation: 50,
            lightHue: 200,
            lightSaturation: 50,
            icon: "hsl(200, 50%, 70%)",
        },
        {
            name: "Solar Flare",
            hue: 45,
            saturation: 90,
            lightHue: 45,
            lightSaturation: 90,
            icon: "hsl(45, 90%, 50%)",
        },
        {
            name: "Lavender Dream",
            hue: 275,
            saturation: 60,
            lightHue: 275,
            lightSaturation: 60,
            icon: "hsl(275, 60%, 70%)",
        },
        {
            name: "Twilight Sky",
            hue: 260,
            saturation: 35,
            lightHue: 260,
            lightSaturation: 35,
            icon: "hsl(260, 35%, 45%)",
        },
        {
            name: "Emerald Isle",
            hue: 140,
            saturation: 80,
            lightHue: 140,
            lightSaturation: 80,
            icon: "hsl(140, 80%, 60%)",
        },
    ];

    const [template, setTemplate] = useState<string | null>(null);

    useEffect(() => {
        if (template) {
            const selected = templates.find((t) => t.name === template);
            if (!selected) {
                setTemplate(null);
                return;
            }

            if (hue !== selected.hue) setTemplate(null);
            if (saturation !== selected.saturation) setTemplate(null);
            if (lightHue !== selected.lightHue) setTemplate(null);
            if (lightSaturation !== selected.lightSaturation) setTemplate(null);
        }
    }, [hue, saturation, lightHue, lightSaturation, template, templates]);

    return (
        <>
            <section className="container py-12">
                <div className="flex items-center justify-center text-center">
                    <div className="fixed bg-grid opacity-20 inset-0 z-[-2] pointer-events-none" />
                </div>
                <h1 className="text-4xl font-bold">Themes</h1>
                <p className="mt-2 mb-4 text-lg text-muted">
                    Explore different themes and color schemes.
                </p>
                <div className="flex items-center gap-4">
                    <Popover>
                        <PopoverTrigger>
                            <Button iconOnly size="lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={16}
                                    height={16}
                                    color={"currentColor"}
                                    fill={"none"}
                                >
                                    <path
                                        d="M3.99963 5.00061L9.99963 5.00037"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M12.9996 5.00037L19.9996 5.00037"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M15.9996 9.00037L15.9996 15.0004"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M9.99963 2.00037L9.99963 8.00037"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M11.9996 16.0004L11.9996 22.0004"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M15.9996 12.0001L19.9996 12.0004"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M3.99963 12.0006L12.9996 12.0004"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M11.9996 19.0004L19.9996 19.0004"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M3.99963 19.0006L8.99963 19.0004"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent forceMount align="start">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">
                                    Customize
                                </h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="!outline-none hover:bg-zinc-500/10 transition-colors cursor-pointer w-6 h-6 flex justify-center items-center rounded-sm"
                                        onClick={() => {
                                            setHue(null);
                                            setSaturation(null);
                                            setLightHue(null);
                                            setLightSaturation(null);
                                            setMode("dark");
                                            setRadius(0.625);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={16}
                                            height={16}
                                            color={"currentColor"}
                                            fill={"none"}
                                        >
                                            <path
                                                d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <PopoverClose>
                                        <button className="!outline-none hover:bg-zinc-500/10 transition-colors cursor-pointer w-6 h-6 flex justify-center items-center rounded-sm">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={16}
                                                height={16}
                                                color={"currentColor"}
                                                fill={"none"}
                                            >
                                                <path
                                                    d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </PopoverClose>
                                </div>
                            </div>
                            <div className="mt-6 space-y-6">
                                <div>
                                    <h4 className="text-base font-medium">
                                        Color
                                    </h4>
                                    <Tabs
                                        defaultValue="custom"
                                        className="rounded border mt-1"
                                    >
                                        <TabList className="!mb-0">
                                            <Tab value="custom">Custom</Tab>
                                            <Tab value="templates">
                                                Templates
                                            </Tab>
                                        </TabList>
                                        <TabPanel
                                            value="templates"
                                            className="p-4"
                                        >
                                            {templates.map((t, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 cursor-pointer hover:bg-border rounded-sm transition-colors p-2"
                                                    onClick={() => {
                                                        setHue(t.hue);
                                                        setSaturation(
                                                            t.saturation
                                                        );
                                                        setLightHue(t.lightHue);
                                                        setLightSaturation(
                                                            t.lightSaturation
                                                        );
                                                        setTemplate(t.name);
                                                    }}
                                                >
                                                    <div
                                                        className="w-6 h-6 rounded-full border"
                                                        style={{
                                                            backgroundColor:
                                                                t.icon,
                                                        }}
                                                    />
                                                    <div className="flex justify-between w-full">
                                                        <h5 className="text-sm font-semibold">
                                                            {t.name}
                                                        </h5>
                                                        {t.name ===
                                                            template && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width={20}
                                                                height={20}
                                                                color={
                                                                    "currentColor"
                                                                }
                                                                fill={"none"}
                                                            >
                                                                <path
                                                                    d="M5 14L8.5 17.5L19 6.5"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </TabPanel>
                                        <TabPanel
                                            value="custom"
                                            className="p-4"
                                        >
                                            <div className="grid gap-6 mt-1">
                                                <div>
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                                        <label
                                                            htmlFor="hue"
                                                            className="space-y-1"
                                                        >
                                                            <span className="text-sm text-muted">
                                                                Dark Hue
                                                            </span>
                                                            <TextField
                                                                size="sm"
                                                                id="hue"
                                                                onChange={(e) =>
                                                                    setHue(
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                }
                                                                value={hue || 0}
                                                            />
                                                        </label>
                                                        <label
                                                            htmlFor="saturation"
                                                            className="space-y-1"
                                                        >
                                                            <span className="text-sm text-muted">
                                                                Dark Saturation
                                                            </span>
                                                            <TextField
                                                                size="sm"
                                                                id="saturation"
                                                                onChange={(e) =>
                                                                    setSaturation(
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                }
                                                                value={
                                                                    saturation ||
                                                                    0
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                                        <label
                                                            htmlFor="light-hue"
                                                            className="space-y-1"
                                                        >
                                                            <span className="text-sm text-muted">
                                                                Light Hue
                                                            </span>
                                                            <TextField
                                                                size="sm"
                                                                id="light-hue"
                                                                onChange={(e) =>
                                                                    setLightHue(
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                }
                                                                value={
                                                                    lightHue ||
                                                                    0
                                                                }
                                                            />
                                                        </label>
                                                        <label
                                                            htmlFor="light-saturation"
                                                            className="space-y-1"
                                                        >
                                                            <span className="text-sm text-muted">
                                                                Light Saturation
                                                            </span>
                                                            <TextField
                                                                size="sm"
                                                                id="light-saturation"
                                                                onChange={(e) =>
                                                                    setLightSaturation(
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                }
                                                                value={
                                                                    lightSaturation ||
                                                                    0
                                                                }
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium">
                                        Scheme
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-4 mt-2">
                                        {schemes.map((scheme, i) => (
                                            <label
                                                htmlFor={scheme}
                                                key={i}
                                                className={cn(
                                                    "cursor-pointer w-auto h-10 px-3 gap-2 border rounded transition-all flex justify-center items-center",
                                                    {
                                                        "ring-2 ring-offset-secondary ring-offset-2 ring-colored":
                                                            scheme === mode,
                                                    }
                                                )}
                                            >
                                                <input
                                                    type="radio"
                                                    name="theme"
                                                    id={scheme}
                                                    value={scheme}
                                                    checked={mode === scheme}
                                                    onChange={() =>
                                                        setMode(scheme)
                                                    }
                                                    className={cn(
                                                        "!appearance-none !sr-only"
                                                    )}
                                                />
                                                {scheme === "dark" && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                                        />
                                                    </svg>
                                                )}
                                                {scheme === "light" && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                                        />
                                                    </svg>
                                                )}
                                                <span className="text-sm capitalize">
                                                    {scheme}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium">
                                        Radius
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
                                        {radiuses.map((r, i) => (
                                            <label
                                                htmlFor={r.toString()}
                                                key={i}
                                                className={cn(
                                                    "cursor-pointer w-auto h-8 px-2 gap-2 border rounded transition-all flex justify-center items-center",
                                                    {
                                                        "ring-2 ring-offset-secondary ring-offset-2 ring-colored":
                                                            r === radius,
                                                    }
                                                )}
                                                style={{
                                                    borderRadius: `${r}rem`,
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="radius"
                                                    id={r.toString()}
                                                    value={r}
                                                    checked={radius === r}
                                                    onChange={() =>
                                                        setRadius(r)
                                                    }
                                                    className={cn(
                                                        "!appearance-none !sr-only"
                                                    )}
                                                />
                                                <span className="text-sm">
                                                    {r}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Dialog>
                        <DialogTrigger>
                            <Button iconOnly size="lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={16}
                                    height={16}
                                    color={"currentColor"}
                                    fill={"none"}
                                >
                                    <path
                                        d="M16.9637 8.98209C16.9613 6.03194 16.9167 4.50384 16.0578 3.45753C15.892 3.25546 15.7067 3.07019 15.5047 2.90436C14.4008 1.99854 12.7609 1.99854 9.48087 1.99854C6.20089 1.99854 4.5609 1.99854 3.45708 2.90436C3.255 3.07018 3.06971 3.25546 2.90387 3.45753C1.99799 4.56128 1.99799 6.20116 1.99799 9.48091C1.99799 12.7607 1.99799 14.4005 2.90387 15.5043C3.0697 15.7063 3.255 15.8916 3.45708 16.0574C4.50346 16.9162 6.03167 16.9608 8.98201 16.9632"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.0283 9.02455L16.994 8.98193M14.0143 22.0013L16.9799 21.9586M21.9716 14.0221L21.9436 16.9818M9.01033 14.0357L8.98236 16.9953M11.4873 9.02455C10.6545 9.17371 9.31781 9.32713 9.01033 11.0488M19.4946 21.9586C20.3296 21.8223 21.6685 21.6894 22.0025 19.9726M19.4946 9.02455C20.3274 9.17371 21.6641 9.32713 21.9716 11.0488M11.5 21.9573C10.6672 21.8086 9.33039 21.6559 9.02197 19.9344"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-full">
                            <DialogHeader>
                                <h3 className="text-lg font-semibold">
                                    CSS Variables
                                </h3>
                                <p className="text-muted">
                                    Enter the following CSS variables in your
                                    CSS file.
                                </p>
                            </DialogHeader>
                            <DialogBody>
                                <div className="mb-6 border-l border-t border-b rounded-l max-h-96 overflow-auto show-scrollbar">
                                    <Highlighter language="css">
                                        {cssCode}
                                    </Highlighter>
                                </div>
                            </DialogBody>
                            <DialogFooter className="gap-2">
                                <DialogClose
                                    className="hover:bg-zinc-500/10 px-4 py-2.5 rounded transition-colors text-sm"
                                    type="button"
                                >
                                    Close
                                </DialogClose>
                                <button
                                    className="bg-foreground text-primary px-4 py-2.5 rounded transition-colors text-sm font-semibold"
                                    type="button"
                                    onClick={() => {
                                        navigator.clipboard.writeText(cssCode);
                                    }}
                                >
                                    Copy CSS
                                </button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>
        </>
    );
}
