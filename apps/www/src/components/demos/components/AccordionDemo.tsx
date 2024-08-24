'use client';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/colidy-ui/Accordion';
import { Card } from '@/colidy-ui/Card';

const accordions = [
	{
		trigger: 'Is it accessible?',
		content: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		trigger: 'Is it unstyled?',
		content:
			"Yes. It's unstyled by default, giving you freedom over the look and feel.",
	},
	{
		trigger: 'Can it be animated?',
		content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
	},
];

export const Demo = () => {
	return (
		<Accordion type="single" collapsible className="max-w-lg">
			{accordions.map(({ trigger, content }) => (
				<AccordionItem key={trigger} value={trigger}>
					<AccordionTrigger>{trigger}</AccordionTrigger>
					<AccordionContent>{content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
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
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/colidy-ui/Accordion';
import { Card } from '@/colidy-ui/Card';

const accordions = [
	{
		trigger: 'Is it accessible?',
		content: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		trigger: 'Is it unstyled?',
		content:
			"Yes. It's unstyled by default, giving you freedom over the look and feel.",
	},
	{
		trigger: 'Can it be animated?',
		content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
	},
];

export const Demo = () => {
	return (
		<Accordion type="single" collapsible className="max-w-lg">
			{accordions.map(({ trigger, content }) => (
				<AccordionItem key={trigger} value={trigger}>
					<AccordionTrigger>{trigger}</AccordionTrigger>
					<AccordionContent>{content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};

`;