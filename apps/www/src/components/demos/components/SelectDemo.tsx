'use client';
import { Select, SelectItem } from '@/colidy-ui/Select';
import { useState } from 'react';

const countries = [
	{ code: 'ca', name: 'Canada' },
	{ code: 'us', name: 'United States' },
	{ code: 'mx', name: 'Mexico' },
	{ code: 'fr', name: 'France' },
	{ code: 'de', name: 'Germany' },
	{ code: 'it', name: 'Italy' },
	{ code: 'es', name: 'Spain' },
	{ code: 'tr', name: 'Türkiye' },
];

export const Demo = () => {
	const [country, setCountry] = useState(countries[0].code);

	return (
		<div className="max-w-sm">
			<Select
				label="Country"
				placeholder="Select a country…"
				description="Select your country from the list."
				value={country}
				onValueChange={value => setCountry(value)}
			>
				{countries.map(country => (
					<SelectItem value={country.code} key={country.code}>
						<img
							src={
								'https://flagicons.lipis.dev/flags/4x3/' +
								country.code +
								'.svg'
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
		</div>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';
import { Select, SelectItem } from '@/colidy-ui/Select';
import { useState } from 'react';

const countries = [
	{ code: 'ca', name: 'Canada' },
	{ code: 'us', name: 'United States' },
	{ code: 'mx', name: 'Mexico' },
	{ code: 'fr', name: 'France' },
	{ code: 'de', name: 'Germany' },
	{ code: 'it', name: 'Italy' },
	{ code: 'es', name: 'Spain' },
	{ code: 'tr', name: 'Türkiye' },
];

export const Demo = () => {
	const [country, setCountry] = useState(countries[0].code);

	return (
		<div className="max-w-sm">
			<Select
				label="Country"
				placeholder="Select a country…"
				description="Select your country from the list."
				value={country}
				onValueChange={value => setCountry(value)}
			>
				{countries.map(country => (
					<SelectItem value={country.code} key={country.code}>
						<img
							src={
								'https://flagicons.lipis.dev/flags/4x3/' +
								country.code +
								'.svg'
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
		</div>
	);
};

`;