import { Dispatch, SetStateAction } from "react";

export interface Color {
    name: string;
    hue: number;
    saturation: number;
    lightHue: number | null;
    lightSaturation: number | null;
    mode: string;
}

export interface Schemes {
    name: string;
    value: string;
}

export interface Props {
    schemes: string[];
    radiuses: number[];
    color: Color | null;
    mode: string | null;
    radius: number;
    setColor: Dispatch<SetStateAction<Color | null>>;
    setMode: Dispatch<SetStateAction<string>>;
    setRadius: Dispatch<SetStateAction<number>>;
    saturation: number | null;
    setSaturation: Dispatch<SetStateAction<number | null>>;
    hue: number | null;
    setHue: Dispatch<SetStateAction<number | null>>;
    lightHue: number | null;
    setLightHue: Dispatch<SetStateAction<number | null>>;
    lightSaturation: number | null;
    setLightSaturation: Dispatch<SetStateAction<number | null>>;
}
