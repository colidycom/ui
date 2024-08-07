"use client";
import { cn } from "@colidy/ui-utils";
import { Dispatch, SetStateAction } from "react";
import { Props } from "./props";
import { Card } from "@/colidy-ui/Card";
import { Heading } from "@/colidy-ui/Heading";
import { Paragraph } from "@/colidy-ui/Paragraph";
import BrowserDemo from "./browser-demo";

export default function Browser({ color, mode }: Props) {
    return (
        <>
            <section
                className={cn(
                    "bg-primary max-w-8xl mx-auto md:rounded border-t border-b md:border overflow-hidden colored-base",
                    {
                        dark: mode === "dark",
                        light: mode === "light",
                    }
                )}
            >
                <div className="bg-secondary border-b">
                    <div className="container py-2 grid grid-cols-3">
                        <div className="hidden md:flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-red-400" />
                            <div className="w-4 h-4 rounded-full bg-yellow-400" />
                            <div className="w-4 h-4 rounded-full bg-green-400" />
                        </div>
                        <div className="col-span-3 md:col-span-1 select-none bg-border px-2 py-1 rounded text-sm gap-2 text-muted flex justify-center items-center relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={16}
                                height={16}
                                color={"currentColor"}
                                fill={"none"}
                                className="text-green-400"
                            >
                                <path
                                    d="M12 16.5V14.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {"ui.colidy.com/themes"}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={16}
                                height={16}
                                color={"currentColor"}
                                fill={"none"}
                                className="absolute right-2"
                            >
                                <path
                                    d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="container py-4 sm:py-6 md:py-8">
                    <BrowserDemo />
                </div>
            </section>
        </>
    );
}
