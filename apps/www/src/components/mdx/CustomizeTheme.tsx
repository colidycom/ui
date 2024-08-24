'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import CustomizeThemeUI from './CustomizeThemeUI';
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerBody,
} from '@/colidy-ui/Drawer';
import { Button } from '@/ui-components/Button';
import { Settings05 } from '@colidy/icons/outline/Settings05';
import { Tick02 } from '@colidy/icons/outline/Tick02';
import { Heading } from '@/ui-components/Heading';
import { cn } from '@colidy/ui-utils';
import { Tabs, TabList, Tab, TabPanel } from '@/ui-components/Tabs';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/colidy-ui/Accordion';
import { Label } from '@/ui-components/Label';
import { TextField } from '@/ui-components/TextField';
import { Slider } from '@/ui-components/Slider';
import { ArrowReloadHorizontal } from '@colidy/icons/outline/ArrowReloadHorizontal';

const templates: {
	name: string;
	hue: number;
	saturation: number;
	lightHue: number | null;
	lightSaturation: number | null;
	icon?: string;
}[] = [
	{
		name: 'Eclipse',
		hue: 220,
		saturation: 15,
		lightHue: 220,
		lightSaturation: 15,
		icon: 'hsl(220, 15%, 25%)',
	},
	{
		name: 'Dawn Breeze',
		hue: 180,
		saturation: 20,
		lightHue: 180,
		lightSaturation: 20,
		icon: 'hsl(180, 20%, 85%)',
	},
	{
		name: 'Autumn Blaze',
		hue: 30,
		saturation: 70,
		lightHue: 30,
		lightSaturation: 70,
		icon: 'hsl(30, 70%, 60%)',
	},
	{
		name: 'Mystic Forest',
		hue: 120,
		saturation: 30,
		lightHue: 120,
		lightSaturation: 30,
		icon: 'hsl(120, 30%, 40%)',
	},
	{
		name: 'Crimson Night',
		hue: 350,
		saturation: 40,
		lightHue: 350,
		lightSaturation: 40,
		icon: 'hsl(350, 40%, 30%)',
	},
	{
		name: 'Ocean Wave',
		hue: 200,
		saturation: 50,
		lightHue: 200,
		lightSaturation: 50,
		icon: 'hsl(200, 50%, 70%)',
	},
	{
		name: 'Solar Flare',
		hue: 45,
		saturation: 90,
		lightHue: 45,
		lightSaturation: 90,
		icon: 'hsl(45, 90%, 50%)',
	},
	{
		name: 'Lavender Dream',
		hue: 275,
		saturation: 60,
		lightHue: 275,
		lightSaturation: 60,
		icon: 'hsl(275, 60%, 70%)',
	},
	{
		name: 'Twilight Sky',
		hue: 260,
		saturation: 35,
		lightHue: 260,
		lightSaturation: 35,
		icon: 'hsl(260, 35%, 45%)',
	},
	{
		name: 'Emerald Isle',
		hue: 140,
		saturation: 80,
		lightHue: 140,
		lightSaturation: 80,
		icon: 'hsl(140, 80%, 60%)',
	},
];
export const CustomizeTheme = () => {
	const [t, setT] = useState('light');
	const [template, setTemplate] = useState<any>(null);
	const defaults = {
		light: {
			primary: '255 0% 99%',
			secondary: '255 0% 97%',
			tertiary: '255 0% 95%',
			accent: '255 0% 90%',
			popover: '255 0% 99%',
			input: '255 0% 98%',
			border: '255 0% 90%',
			foreground: '0 0% 0%',
			muted: '0 0% 40%',
			colored: '215 72% 57%',
		},
		dark: {
			primary: '240 10% 3.92%',
			secondary: '240 5.88% 10%',
			tertiary: '240 5.88% 15%',
			accent: '240 3% 20%',
			popover: '240 3% 11.5%',
			input: '240 4% 15%',
			border: '240 3% 20%',
			foreground: '0 0% 100%',
			muted: '0 0% 60%',
			colored: '215 72% 57%',
		},
	};
	const [borderRadius, setBorderRadius] = useState(0.625);
	const [colors, setColors] = useState(defaults);
	const { theme, setTheme } = useTheme();

	useEffect(() => setT(theme || 'light'), [theme]);

	const changeColor = (color: string, value: string) => {
		setColors((prev: any) => ({
			...prev,
			[t]: {
				...prev[t],
				[color]: value,
			},
		}));
	};

	return (
		<>
			<div className="flex flex-col lg:flex-row items-center gap-2">
				<Drawer>
					<DrawerTrigger>
						<div className="w-full lg:w-auto">
							<Button className="w-full lg:w-auto">
								<Settings05 size={16} />
								Customize Theme
							</Button>
						</div>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerBody>
							<div>
								<Heading size="h3">Color Scheme</Heading>
								<div className="flex items-center gap-2 mt-2 w-full bg-accent p-1 rounded">
									{['Dark', 'Light'].map((item, index) => (
										<Button
											key={index}
											onClick={() => {
												setT(item.toLowerCase());
												setTheme(item.toLowerCase());
											}}
											variant={
												t === item.toLowerCase()
													? 'solid'
													: 'ghost'
											}
											className="flex-1"
										>
											{item}
										</Button>
									))}
								</div>
							</div>
							<div>
								<Heading size="h3">Border Radius</Heading>

								<div className="flex items-center gap-2 mt-2">
									<Slider
										defaultValue={[borderRadius]}
										min={0}
										max={1}
										step={0.125}
										onValueChange={value =>
											setBorderRadius(+value)
										}
									/>
									<div className="w-20 text-right">
										{borderRadius}rem
									</div>
								</div>
							</div>
							<div>
								<Heading size="h3">Colors</Heading>
								<Tabs defaultValue="own">
									<TabList className="-mx-5">
										<Tab value="own">Your Colors</Tab>
										<Tab value="templates">Templates</Tab>
									</TabList>
									<TabPanel value="own">
										<Accordion
											type="single"
											collapsible
											className="max-w-lg"
										>
											{['Dark', 'Light'].map(
												(item, index) => (
													<AccordionItem
														key={index}
														value={item.toLowerCase()}
													>
														<AccordionTrigger>
															{item} Theme
														</AccordionTrigger>
														<AccordionContent>
															<div className="space-y-2">
																{Object.keys(
																	(
																		colors as any
																	)[
																		item.toLocaleLowerCase()
																	]
																).map(
																	(
																		color,
																		index
																	) => (
																		// hue - saturation - lightness
																		<div
																			key={
																				index
																			}
																			className="flex justify-between items-center gap-2"
																		>
																			<Label
																				label={
																					color
																						.charAt(
																							0
																						)
																						.toUpperCase() +
																					color.slice(
																						1
																					)
																				}
																			/>
																			<div className="flex items-center">
																				<div
																					className="w-8 h-8 rounded-full mr-2 border"
																					style={{
																						backgroundColor: `hsl(${
																							(
																								colors as any
																							)[
																								item.toLowerCase()
																							][
																								color
																							]
																						})`,
																					}}
																				/>
																				<TextField
																					type="text"
																					value={
																						(
																							colors as any
																						)[
																							item.toLowerCase()
																						][
																							color
																						]
																					}
																					onChange={e => {
																						changeColor(
																							color,
																							e
																								.target
																								.value
																						);
																					}}
																				/>
																			</div>
																		</div>
																	)
																)}
															</div>
														</AccordionContent>
													</AccordionItem>
												)
											)}
										</Accordion>
									</TabPanel>
									<TabPanel value="templates">
										<div className="flex items-center flex-wrap gap-2 mt-2">
											{templates.map(t => (
												<div
													key={t.name}
													className="rounded-full w-12 h-12 flex items-center justify-center relative cursor-pointer"
													onClick={() => {
														setTemplate(t.name);

														const getLightness = (
															string: string
														) => {
															const [
																hue,
																saturation,
																lightness,
															] =
																string.split(
																	' '
																);
															return lightness;
														};

														const obj = defaults;
														obj.dark = {
															primary: `${
																t.hue
															} ${
																t.saturation
															}% ${getLightness(
																defaults.dark
																	.primary
															)}`,
															secondary: `${
																t.hue
															} ${
																t.saturation
															}% ${getLightness(
																defaults.dark
																	.secondary
															)}`,
															tertiary: `${
																t.hue
															} ${
																t.saturation
															}% ${getLightness(
																defaults.dark
																	.tertiary
															)}`,
															accent: `${t.hue} ${
																t.saturation
															}% ${getLightness(
																defaults.dark
																	.accent
															)}`,
															popover: `${
																t.hue
															} ${
																t.saturation
															}% ${getLightness(
																defaults.dark
																	.popover
															)}`,
															input: `${t.hue} ${
																t.saturation
															}% ${getLightness(
																defaults.dark
																	.input
															)}`,
															border: `${t.hue} ${
																t.saturation
															}% ${getLightness(
																defaults.dark
																	.border
															)}`,
															foreground:
																defaults.dark
																	.foreground,
															muted: defaults.dark
																.muted,
															colored:
																defaults.dark
																	.colored,
														};

														obj.light = {
															primary: `${
																t.lightHue
															} ${
																t.lightSaturation
															}% ${getLightness(
																defaults.light
																	.primary
															)}`,
															secondary: `${
																t.lightHue
															} ${
																t.lightSaturation
															}% ${getLightness(
																defaults.light
																	.secondary
															)}`,
															tertiary: `${
																t.lightHue
															} ${
																t.lightSaturation
															}% ${getLightness(
																defaults.light
																	.tertiary
															)}`,
															accent: `${
																t.lightHue
															} ${
																t.lightSaturation
															}% ${getLightness(
																defaults.light
																	.accent
															)}`,
															popover: `${
																t.lightHue
															} ${
																t.lightSaturation
															}% ${getLightness(
																defaults.light
																	.popover
															)}`,
															input: `${
																t.lightHue
															} ${
																t.lightSaturation
															}% ${getLightness(
																defaults.light
																	.input
															)}`,
															border: `${
																t.lightHue
															} ${
																t.lightSaturation
															}% ${getLightness(
																defaults.light
																	.border
															)}`,
															foreground:
																defaults.light
																	.foreground,
															muted: defaults
																.light.muted,
															colored:
																defaults.light
																	.colored,
														};

														// set colors
														console.log(obj);
														setColors(obj);
													}}
													style={{
														backgroundColor: `hsl(${t.hue}, ${t.saturation}%, 50%)`,
													}}
												>
													<div
														className={cn(
															'w-full h-full absolute opacity-0 bg-black/40 text-white rounded-full flex items-center justify-center transition-opacity',
															{
																'opacity-100':
																	template ===
																	t.name,
															}
														)}
													>
														<Tick02 size={24} />
													</div>
												</div>
											))}
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</DrawerBody>
					</DrawerContent>
				</Drawer>

				<div className="bg-primary rounded w-full lg:w-auto">
					<Button
						variant="outline"
						onClick={() => {
							setColors(defaults);
							setBorderRadius(0.625);
							setTemplate(null);
						}}
						className="w-full lg:w-auto"
					>
						<ArrowReloadHorizontal size={16} />
						Restore Defaults
					</Button>
				</div>
			</div>

			<style jsx global>
				{`
					.light.customize-theme {
						--primary: ${(colors as any).light.primary};
						--secondary: ${(colors as any).light.secondary};
						--tertiary: ${(colors as any).light.tertiary};
						--accent: ${(colors as any).light.accent};
						--popover: ${(colors as any).light.popover};
						--input: ${(colors as any).light.input};
						--border: ${(colors as any).light.border};
						--foreground: ${(colors as any).light.foreground};
						--muted: ${(colors as any).light.muted};
						--round: ${borderRadius}rem;
					}

					.dark.customize-theme {
						--primary: ${(colors as any).dark.primary};
						--secondary: ${(colors as any).dark.secondary};
						--tertiary: ${(colors as any).dark.tertiary};
						--accent: ${(colors as any).dark.accent};
						--popover: ${(colors as any).dark.popover};
						--input: ${(colors as any).dark.input};
						--border: ${(colors as any).dark.border};
						--foreground: ${(colors as any).dark.foreground};
						--muted: ${(colors as any).dark.muted};
						--round: ${borderRadius}rem;
					}
				`}
			</style>

			<div className={`${t} customize-theme`}>
				<CustomizeThemeUI />
			</div>
		</>
	);
};
