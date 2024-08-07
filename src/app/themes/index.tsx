"use client";
import { useState } from "react";
import Browser from "./browser";
import Header from "./header";
import { Color, Props } from "./props";

import "./styles.css";
import { useTheme } from "next-themes";

export default function Themes() {
    const [saturation, setSaturation] = useState<number | null>(10);
    const [hue, setHue] = useState<number | null>(240);
    const [lightHue, setLightHue] = useState<number | null>(255);
    const [lightSaturation, setLightSaturation] = useState<number | null>(0);

    const schemes = ["light", "dark"];
    const radiuses = [0, 0.5, 0.625, 0.7, 0.825, 1];
    const [color, setColor] = useState<Color | null>(null);
    const { theme, setTheme } = useTheme();
    const [radius, setRadius] = useState<number>(0.625);

    const data: Props = {
        schemes,
        radiuses,
        color,
        mode: theme === "dark" ? "dark" : "light",
        radius,
        setColor,
        setMode: setTheme,
        setRadius,
        saturation,
        setSaturation,
        hue,
        setHue,
        lightHue,
        setLightHue,
        lightSaturation,
        setLightSaturation,
    };
    return (
        <>
            <div
                style={
                    Object.assign(
                        {
                            "--border-radius": `${radius}rem`,
                        },
                        Object.assign(
                            hue ? { "--hue": hue } : {},
                            saturation ? { "--saturation": saturation } : {},
                            lightHue ? { "--light-hue": lightHue } : {},
                            lightSaturation
                                ? {
                                      "--light-saturation": lightSaturation,
                                  }
                                : {}
                        )
                    ) as any
                }
            >
                <Header {...data} />
                <Browser {...data} />
            </div>
        </>
    );
}
