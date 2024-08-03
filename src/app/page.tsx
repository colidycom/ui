"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Alert } from "@/colidy-ui/Alert";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
    DialogClose,
} from "@/colidy-ui/Dialog";
import {
    Dropdown,
    DropdownTrigger,
    DropdownItems,
    DropdownItem,
    DropdownSub,
    DropdownSubTrigger,
    DropdownSubItems,
    DropdownCheckbox,
    DropdownSeperator,
    DropdownLabel,
    DropdownRadioGroup,
    DropdownRadioItem,
} from "@/colidy-ui/Dropdown";
import { TextField } from "@/colidy-ui/TextField";
import { Switch } from "@/colidy-ui/Switch";
import Link from "next/link";
import { useState } from "react";
import { Select, SelectItem } from "@/colidy-ui/Select";
import { Tooltip } from "@/colidy-ui/Tooltip";
import { Card } from "@/colidy-ui/Card";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverClose,
} from "@/colidy-ui/Popover";
import { Label } from "@/colidy-ui/Label";
import { Button } from "@/components/ui/Button";

const buttonClass =
    "bg-primary px-5 text-sm rounded flex justify-between items-center gap-6 w-auto h-12 !outline-none text-foreground z-10";

const countries = [
    { code: "tr", name: "Türkiye" },
    { code: "ca", name: "Canada" },
    { code: "us", name: "United States" },
    { code: "mx", name: "Mexico" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
    { code: "it", name: "Italy" },
    { code: "es", name: "Spain" },
];

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [person, setPerson] = useState("pedro");
    const [country, setCountry] = useState(countries[0].code);
    const [width, setWidth] = useState("100%");
    const [maxWidth, setMaxWidth] = useState("300px");
    const [height, setHeight] = useState("25px");
    const [maxHeight, setMaxHeight] = useState("none");

    const components = [
        <Alert
            key="example-1"
            title="Are you sure you want to delete your profile?"
            description="If you delete your profile, all your data will be lost."
            onSuccess={() => alert("Profile deleted")}
            onCancel={() => alert("Profile not deleted")}
        >
            <button className={buttonClass}>Delete profile</button>
        </Alert>,
        <Dialog key="example-2">
            <DialogTrigger>
                <button className={buttonClass}>Edit profile</button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                    </DialogDescription>
                </DialogHeader>

                <DialogBody className="space-y-4">
                    <TextField
                        label="First Name"
                        placeholder="John"
                        className="w-full"
                    />
                    <TextField
                        label="Last Name"
                        placeholder="Doe"
                        className="w-full"
                    />
                </DialogBody>
                <DialogFooter className="gap-2">
                    <DialogClose type="button" asChild>
                        <Button variant="ghost">Cancel</Button>
                    </DialogClose>
                    <DialogClose type="button" asChild>
                        <Button variant="solid">Save Changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>,
        <Popover key="example-3">
            <PopoverTrigger>
                <button className={buttonClass}>Open Popover</button>
            </PopoverTrigger>
            <PopoverContent withArrow>
                <div className="flex justify-between items-center">
                    <h3 className="text-sm">Dimensions</h3>
                    <PopoverClose>
                        <button className="hover:bg-zinc-500/10 transition-colors cursor-pointer w-6 h-6 flex justify-center items-center rounded-sm">
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
                <div className="grid grid-cols-2 gap-4 items-center mt-6 w-64">
                    <Label label="Width" className="!m-0 !p-0" />
                    <TextField
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        size="sm"
                    />
                    <Label label="Max Width" className="!m-0 !p-0" />
                    <TextField
                        value={maxWidth}
                        onChange={(e) => setMaxWidth(e.target.value)}
                        size="sm"
                    />
                    <Label label="Height" className="!m-0 !p-0" />
                    <TextField
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        size="sm"
                    />
                    <Label label="Max Height" className="!m-0 !p-0" />
                    <TextField
                        value={maxHeight}
                        onChange={(e) => setMaxHeight(e.target.value)}
                        size="sm"
                    />
                </div>
            </PopoverContent>
        </Popover>,
        <Dropdown key="example-4">
            <DropdownTrigger>
                <button className={buttonClass}>More options</button>
            </DropdownTrigger>
            <DropdownItems>
                <DropdownItem kbd="Ctrl + T">New Tab</DropdownItem>
                <DropdownItem kbd="Ctrl + N">New Window</DropdownItem>
                <DropdownItem disabled>New Incognito Window</DropdownItem>
                <DropdownSub>
                    <DropdownSubTrigger>More Tools</DropdownSubTrigger>
                    <DropdownSubItems>
                        <DropdownItem kbd="Ctrl + Shift + I">
                            Developer Tools
                        </DropdownItem>
                        <DropdownItem kbd="Ctrl + Shift + J">
                            JavaScript Console
                        </DropdownItem>
                    </DropdownSubItems>
                </DropdownSub>
                <DropdownCheckbox
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                >
                    Dark Mode
                </DropdownCheckbox>
                <DropdownSeperator />
                <DropdownLabel>Peoples</DropdownLabel>
                <DropdownRadioGroup value={person} onValueChange={setPerson}>
                    {[
                        ["pedro", "Pedro Henrique"],
                        ["maria", "Maria Clara"],
                        ["joao", "João Silva"],
                    ].map(([value, label]) => (
                        <DropdownRadioItem key={value} value={value}>
                            {label}
                        </DropdownRadioItem>
                    ))}
                </DropdownRadioGroup>
            </DropdownItems>
        </Dropdown>,
        <Card className="max-w-lg" key="example-5">
            <Select
                label="Country"
                placeholder="Select a country…"
                description="Select your country from the list."
                value={country}
                onValueChange={(value) => setCountry(value)}
            >
                {countries.map((country) => (
                    <SelectItem value={country.code} key={country.code}>
                        <img
                            src={
                                "https://flagicons.lipis.dev/flags/4x3/" +
                                country.code +
                                ".svg"
                            }
                            width={20}
                            height={12}
                            alt="Canada"
                            className="inline-flex"
                        />
                        <span className="ml-2 truncate">{country.name}</span>
                    </SelectItem>
                ))}
            </Select>
        </Card>,
        <Card className="max-w-lg" key="example-6">
            <Switch
                label="Airplane Mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
            />
        </Card>,
        <Card className="max-w-lg" key="example-7">
            <Tooltip content="Hello, world!">
                <span>Hover over me</span>
            </Tooltip>
        </Card>,
        <Card className="max-w-lg" key="example-8">
            <TextField
                label="Email"
                placeholder="hello@colidy.com"
                className="w-full"
            />
        </Card>,
    ];
    return (
        <div className="relative flex h-[calc(100vh-65px)] flex-col justify-center items-center">
            <img
                src="/white-logo.png"
                alt="ColidyUI"
                className="w-auto h-3/4 absolute pointer-events-none left-0 -rotate-45 top-12 opacity-[1%] -z-[5]"
            />
            <div className="flex items-center justify-center text-center">
                <div className="fixed bg-grid opacity-20 inset-0 z-[-2] pointer-events-none" />
                <img
                    src="/background-image.png"
                    alt="Gradient"
                    className="fixed inset-0 object-cover w-full h-full z-[-1] pointer-events-none"
                />
                <div className="max-w-xl flex flex-col items-center justify-center">
                    <h1 className="font-extrabold mx-auto max-w-[22rem] space-y-2 text-[2rem] leading-tight md:max-w-[40rem] md:text-6xl md:leading-[1.08] text-6xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-700 dark:from-zinc-100 to-zinc-900 dark:to-zinc-400">
                            Build faster with{" "}
                        </span>
                        <span className="text-transparent bg-gradient-to-br from-blue-500 to-violet-700 bg-clip-text">
                            ColidyUI
                        </span>
                    </h1>
                    <p className="mt-4 text-muted">
                        ColidyUI is a collection of professionally designed and
                        developed UI components built with Tailwind CSS and
                        Radix Primitives.
                    </p>

                    <Link href="/docs">
                        <button className="flex items-center gap-2 rounded-full bg-foreground text-primary font-semibold px-6 py-3 mt-6">
                            Explore Components
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={20}
                                height={20}
                                color={"currentColor"}
                                fill={"none"}
                            >
                                <path
                                    d="M20.0001 11.9998L4.00012 11.9998"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            {/* <div className="pb-4">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={16}
                    breakpoints={{
                        640: {
                            slidesPerView: 3.5,
                        },
                        768: {
                            slidesPerView: 4.5,
                        },
                        1024: {
                            slidesPerView: 5.5,
                        },
                    }}
                    className="!px-4"
                >
                    {components.map((Component, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative p-6 w-[300px] bg-gradient-to-br from-blue-500 to-violet-700 aspect-square rounded !flex justify-center items-center overflow-hidden"
                        >
                            <div className="bg-black/50 absolute inset-0 pointer-events-none bg-grid" />
                            <div className="relative z-[1] w-full flex justify-center items-center">
                                {Component}
                            </div>
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className="relative p-6 w-[300px] bg-gradient-to-br from-gray-200 to-zinc-300 dark:from-gray-500 dark:to-zinc-800 aspect-square rounded !flex justify-center items-center overflow-hidden">
                        <div className="dark:bg-black/50 absolute inset-0 pointer-events-none bg-grid-black" />
                        <div className="relative z-[1] w-full flex justify-center items-center">
                            <Link href="/docs">
                                <button className="flex items-center gap-2 rounded-full bg-foreground text-primary font-semibold px-6 py-3">
                                    Explore Components
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={20}
                                        height={20}
                                        color={"currentColor"}
                                        fill={"none"}
                                    >
                                        <path
                                            d="M20.0001 11.9998L4.00012 11.9998"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> */}
        </div>
    );
}
