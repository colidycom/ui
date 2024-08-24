'use client';

import { Tooltip } from '@/ui-components/Tooltip';
import { Copy01 } from '@colidy/icons/outline/Copy01';
import { Tick02 } from '@colidy/icons/outline/Tick02';
import { cn, colors } from '@colidy/ui-utils';
import { useState } from 'react';
import tailColors from 'tailwindcss/colors';

export const ColorPalette = () => {
	return (
		<div className="grid gap-4">
			<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-2">
				<div className="col-span-2 sm:col-span-4 lg:col-span-10 text-foreground">
					ColidyUI
				</div>
				{[
					'bg-primary',
					'bg-secondary',
					'bg-tertiary',
					'bg-accent',
					'bg-popover',
					'bg-input',
					'bg-border',
					'bg-foreground',
					'bg-muted',
					'bg-colored',
				].map(name => (
					<ColorInput
						key={name}
						hsl={name}
						name={
							name.replace('bg-', '').charAt(0).toUpperCase() +
							name.replace('bg-', '').slice(1)
						}
					/>
				))}
			</div>
			{colors.map(name => (
				<div
					className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-2"
					key={name}
				>
					<div className="col-span-2 sm:col-span-4 lg:col-span-10 text-foreground">
						{name.charAt(0).toUpperCase() + name.slice(1)}
					</div>
					{[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
						shade => (
							<ColorInput
								key={name + '-' + shade}
								color={(tailColors as any)[name][shade]}
								name={name + '-' + shade}
							/>
						)
					)}
				</div>
			))}
		</div>
	);
};

function ColorInput({
	color,
	hsl,
	name,
}: {
	color?: string;
	hsl?: string;
	name: string;
}) {
	const [copied, setCopied] = useState(false);
	const getVariableFromStyles = (name: string) => {
		const styles = getComputedStyle(document.documentElement);
		return styles.getPropertyValue(name);
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	const hslToHex = (hsl: string[]) => {
		let h = parseInt(hsl[0]);
		let s = parseInt(hsl[1].replace('%', '')) / 100;
		let l = parseInt(hsl[2].replace('%', '')) / 100;

		let c = (1 - Math.abs(2 * l - 1)) * s;

		let x = c * (1 - Math.abs(((h / 60) % 2) - 1));

		let m = l - c / 2;

		let r = 0;
		let g = 0;
		let b = 0;

		const rgb = (r: number, g: number, b: number) => {
			return [r, g, b]
				.map(x => {
					const hex = x.toString(16);
					return hex.length === 1 ? '0' + hex : hex;
				})
				.join('');
		};

		if (h >= 0 && h < 60) {
			r = c;
			g = x;
			b = 0;
		} else if (h >= 60 && h < 120) {
			r = x;
			g = c;
			b = 0;
		} else if (h >= 120 && h < 180) {
			r = 0;
			g = c;
			b = x;
		} else if (h >= 180 && h < 240) {
			r = 0;
			g = x;
			b = c;
		} else if (h >= 240 && h < 300) {
			r = x;
			g = 0;
			b = c;
		} else if (h >= 300 && h < 360) {
			r = c;
			g = 0;
			b = x;
		}

		return `#${rgb(
			Math.round((r + m) * 255),
			Math.round((g + m) * 255),
			Math.round((b + m) * 255)
		)}`;
	};

	const handleClick = () => {
		if (color) {
			copyToClipboard(color);
		} else {
			if (!hsl) return;
			copyToClipboard(
				hslToHex(
					getVariableFromStyles(`--${hsl.replace('bg-', '')}`).split(
						' '
					)
				)
			);
		}
	};

	return (
		<div className="flex flex-col gap-2 w-full items-center">
			<div
				className={cn(
					'w-full relative col-span-1 h-16 rounded group cursor-pointer',
					hsl ? hsl + ' border' : 'border border-muted/10'
				)}
				style={
					hsl
						? {}
						: {
								backgroundColor: color,
						  }
				}
				onClick={handleClick}
			>
				<div
					className={
						'absolute top-0 left-0 right-0 bottom-0 bg-white/50 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded'
					}
				>
					{copied ? <Tick02 size={16} /> : <Copy01 size={16} />}
				</div>
			</div>
			<p className="text-muted text-xs lowercase text-center">{name}</p>
		</div>
	);
}
