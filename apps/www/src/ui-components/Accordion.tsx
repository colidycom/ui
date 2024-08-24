import { cn } from '@colidy/ui-utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { useId, forwardRef } from 'react';

const Accordion = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof AccordionPrimitive.Root>
>(({ children, className, ...props }, ref) => {
	return (
		<AccordionPrimitive.Root
			ref={ref}
			className={cn(
				'w-full overflow-hidden relative transition-all flex flex-col gap-2',
				className
			)}
			{...props}
		>
			{children}
		</AccordionPrimitive.Root>
	);
});

Accordion.displayName = 'ColidyAccordion';

type AccordionItemProps = {
	value?: string;
} & Omit<React.ComponentProps<typeof AccordionPrimitive.Item>, 'value'>;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
	({ children, className, value, ...props }, ref) => {
		const _id = useId();
		const _value = value ?? _id;
		return (
			<AccordionPrimitive.Item
				ref={ref}
				className={cn(
					'border rounded shadow-sm overflow-hidden bg-secondary',
					className
				)}
				value={_value}
				{...props}
			>
				{children}
			</AccordionPrimitive.Item>
		);
	}
);

AccordionItem.displayName = 'ColidyAccordionItem';

const AccordionTrigger = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, ref) => {
	return (
		<AccordionPrimitive.Header className="flex !p-0 !m-0">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					'relative z-[2] flex justify-between items-center py-4 px-6 w-full text-left text-base font-normal group',
					'data-[state=closed]:hover:bg-muted/10 transition-colors',
					className
				)}
				{...props}
			>
				{children}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={16}
					height={16}
					color={'currentColor'}
					fill={'none'}
					className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
				>
					<path
						d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
});

AccordionTrigger.displayName = 'ColidyAccordionTrigger';

const AccordionContent = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => {
	return (
		<AccordionPrimitive.Content
			ref={ref}
			className={cn(
				className,
				'relative z-[1] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'
			)}
			{...props}
		>
			<div className="px-6 pb-6 text-sm">{children}</div>
		</AccordionPrimitive.Content>
	);
});

AccordionContent.displayName = 'ColidyAccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
