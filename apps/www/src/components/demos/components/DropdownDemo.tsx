'use client';

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
} from '@/colidy-ui/Dropdown';
import { useState } from 'react';

export const Demo = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [person, setPerson] = useState('pedro');
	return (
		<div>
			<Dropdown>
				<DropdownTrigger>
					<button
						className="bg-white px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-colored backdrop-blur"
						style={{ maxWidth: '200px' }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width={16}
							height={16}
							color={'currentColor'}
							fill={'none'}
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
					</button>
				</DropdownTrigger>
				<DropdownItems>
					<DropdownItem>New Tab</DropdownItem>
					<DropdownItem>New Window</DropdownItem>
					<DropdownItem disabled>New Incognito Window</DropdownItem>
					<DropdownSub>
						<DropdownSubTrigger>More Tools</DropdownSubTrigger>
						<DropdownSubItems>
							<DropdownItem>Developer Tools</DropdownItem>
							<DropdownItem>JavaScript Console</DropdownItem>
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
					<DropdownRadioGroup
						value={person}
						onValueChange={setPerson}
					>
						{[
							['pedro', 'Pedro Henrique'],
							['maria', 'Maria Clara'],
							['joao', 'João Silva'],
						].map(([value, label]) => (
							<DropdownRadioItem key={value} value={value}>
								{label}
							</DropdownRadioItem>
						))}
					</DropdownRadioGroup>
				</DropdownItems>
			</Dropdown>
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
} from '@/colidy-ui/Dropdown';
import { useState } from 'react';

export const Demo = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [person, setPerson] = useState('pedro');
	return (
		<div>
			<Dropdown>
				<DropdownTrigger>
					<button
						className="bg-white px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-colored backdrop-blur"
						style={{ maxWidth: '200px' }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width={16}
							height={16}
							color={'currentColor'}
							fill={'none'}
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
					</button>
				</DropdownTrigger>
				<DropdownItems>
					<DropdownItem>New Tab</DropdownItem>
					<DropdownItem>New Window</DropdownItem>
					<DropdownItem disabled>New Incognito Window</DropdownItem>
					<DropdownSub>
						<DropdownSubTrigger>More Tools</DropdownSubTrigger>
						<DropdownSubItems>
							<DropdownItem>Developer Tools</DropdownItem>
							<DropdownItem>JavaScript Console</DropdownItem>
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
					<DropdownRadioGroup
						value={person}
						onValueChange={setPerson}
					>
						{[
							['pedro', 'Pedro Henrique'],
							['maria', 'Maria Clara'],
							['joao', 'João Silva'],
						].map(([value, label]) => (
							<DropdownRadioItem key={value} value={value}>
								{label}
							</DropdownRadioItem>
						))}
					</DropdownRadioGroup>
				</DropdownItems>
			</Dropdown>
		</div>
	);
};

`;