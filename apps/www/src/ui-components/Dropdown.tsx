'use client';

import { cn } from '@colidy/ui-utils';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import React, {
	forwardRef,
	createContext,
	useContext,
	useState,
	useMemo,
} from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerTrigger,
	DrawerContent,
	DrawerNested,
} from './Drawer';
import { useViewport } from '@colidy/hooks';

const DropdownContext = createContext<{
	isMobile?: boolean;
}>({ isMobile: false });

const DropdownProvider = DropdownContext.Provider;
const useDropdown = () => useContext(DropdownContext);

const RadioGroupContext = createContext<{
	value: any;
	onValueChange: any;
}>({ value: null, onValueChange: () => {} });

const Dropdown = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.Root>
>(({ children, ...props }, ref) => {
	const { width } = useViewport();
	const [isMobile, setIsMobile] = useState(false);

	useMemo(() => {
		setIsMobile(width <= 1024);
	}, [width]);

	return (
		<DropdownProvider value={{ isMobile }}>
			{isMobile ? (
				<Drawer {...props}>{children}</Drawer>
			) : (
				<DropdownPrimitive.Root {...props}>
					{children}
				</DropdownPrimitive.Root>
			)}
		</DropdownProvider>
	);
});

Dropdown.displayName = 'ColidyDropdown';

const DropdownTrigger = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof DropdownPrimitive.Trigger>
>(({ children, asChild = true, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<DrawerTrigger asChild={asChild} ref={ref} {...props}>
			{children}
		</DrawerTrigger>
	) : (
		<DropdownPrimitive.Trigger
			className="relative"
			asChild={asChild}
			ref={ref}
			{...props}
		>
			{children}
		</DropdownPrimitive.Trigger>
	);
});

DropdownTrigger.displayName = 'ColidyDropdownTrigger';

const DropdownItems = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.Content>
>(({ align = 'end', side = 'bottom', children, className, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<DrawerContent>
			<DrawerBody className={cn('space-y-2', className)}>
				{children}
			</DrawerBody>
		</DrawerContent>
	) : (
		<DropdownPrimitive.Portal>
			<DropdownPrimitive.Content
				className={cn(
					'!z-[50] w-full min-w-[220px] overflow-hidden relative bg-popover border rounded p-2 shadow-sm will-change-[opacity,transform] data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out',
					'data-[align=center]:data-[side=right]:origin-left',
					'data-[align=start]:data-[side=right]:origin-top-left',
					'data-[align=end]:data-[side=right]:origin-bottom-left',
					'data-[align=center]:data-[side=left]:origin-right',
					'data-[align=start]:data-[side=left]:origin-top-right',
					'data-[align=end]:data-[side=left]:origin-bottom-right',
					'data-[align=center]:data-[side=bottom]:origin-top',
					'data-[align=start]:data-[side=bottom]:origin-top-left',
					'data-[align=end]:data-[side=bottom]:origin-top-right',
					'data-[align=center]:data-[side=top]:origin-bottom',
					'data-[align=start]:data-[side=top]:origin-bottom-left',
					'data-[align=end]:data-[side=top]:origin-bottom-right',
					className
				)}
				sideOffset={5}
				side={side}
				align={align}
				ref={ref}
				{...props}
			>
				{children}
			</DropdownPrimitive.Content>
		</DropdownPrimitive.Portal>
	);
});

DropdownItems.displayName = 'ColidyDropdownItems';

const DropdownItem = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.Item> & {
		disabled?: boolean;
	}
>(({ className, children, disabled, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<div
			className={cn(
				'group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center gap-2 h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none hover:bg-muted/10',
				{
					'opacity-50 pointer-events-none': disabled,
				},
				className
			)}
			ref={ref}
			data-disabled={disabled ? '' : undefined}
			{...(props as any)}
		>
			{children}
		</div>
	) : (
		<DropdownPrimitive.Item
			className={cn(
				'group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center gap-2 h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-muted/10',
				{
					'opacity-50 pointer-events-none': disabled,
				},
				className
			)}
			ref={ref}
			{...props}
		>
			{children}
		</DropdownPrimitive.Item>
	);
});

DropdownItem.displayName = 'ColidyDropdownItem';

const DropdownSub = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.Sub>
>(({ children, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<DrawerNested>{children}</DrawerNested>
	) : (
		<DropdownPrimitive.Sub {...props}>{children}</DropdownPrimitive.Sub>
	);
});

DropdownSub.displayName = 'ColidyDropdownSub';

const DropdownSubTrigger = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof DropdownPrimitive.SubTrigger>
>(({ children, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<DrawerTrigger>
			<div
				className="group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none hover:bg-muted/10"
				data-disabled={props.disabled ? '' : undefined}
			>
				<span>{children}</span>
				<div className="ml-auto pl-[20px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={16}
						height={16}
						color={'currentColor'}
						fill={'none'}
					>
						<path
							d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		</DrawerTrigger>
	) : (
		<DropdownPrimitive.SubTrigger
			className="group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-muted/10"
			{...props}
		>
			<span>{children}</span>
			<div className="ml-auto pl-[20px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={16}
					height={16}
					color={'currentColor'}
					fill={'none'}
				>
					<path
						d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</DropdownPrimitive.SubTrigger>
	);
});

DropdownSubTrigger.displayName = 'ColidyDropdownSubTrigger';

const DropdownSubItems = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.SubContent> & {
		align?: 'start' | 'center' | 'end';
		side?: 'top' | 'right' | 'bottom' | 'left';
	}
>(({ align = 'end', side = 'right', children, className, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<DrawerContent>
			<DrawerBody className={cn('space-y-2', className)}>
				{children}
			</DrawerBody>
		</DrawerContent>
	) : (
		<DropdownPrimitive.Portal>
			<DropdownPrimitive.SubContent
				className={cn(
					'!z-[51] w-full min-w-[220px] bg-popover border rounded p-2 shadow-sm will-change-[opacity,transform] data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out',
					'data-[align=center]:data-[side=right]:origin-left',
					'data-[align=start]:data-[side=right]:origin-top-left',
					'data-[align=end]:data-[side=right]:origin-bottom-left',
					'data-[align=center]:data-[side=left]:origin-right',
					'data-[align=start]:data-[side=left]:origin-top-right',
					'data-[align=end]:data-[side=left]:origin-bottom-right',
					'data-[align=center]:data-[side=bottom]:origin-top',
					'data-[align=start]:data-[side=bottom]:origin-top-left',
					'data-[align=end]:data-[side=bottom]:origin-top-right',
					'data-[align=center]:data-[side=top]:origin-bottom',
					'data-[align=start]:data-[side=top]:origin-bottom-left',
					'data-[align=end]:data-[side=top]:origin-bottom-right',
					className
				)}
				sideOffset={4}
				alignOffset={-2}
				ref={ref}
				{...props}
			>
				{children}
			</DropdownPrimitive.SubContent>
		</DropdownPrimitive.Portal>
	);
});

DropdownSubItems.displayName = 'ColidyDropdownSubItems';

const DropdownCheckbox = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.CheckboxItem>
>(({ children, checked, onCheckedChange, className, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<div
			className={cn(
				'group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none hover:bg-muted/10',
				className
			)}
			ref={ref}
			onClick={() => onCheckedChange?.(!checked)}
			data-state={checked ? 'checked' : 'unchecked'}
			data-disabled={props.disabled ? '' : undefined}
			{...(props as any)}
		>
			{children}
			{checked && (
				<div className="absolute right-4 inline-flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={20}
						height={20}
						color={'currentColor'}
						fill={'none'}
					>
						<path
							d="M5 14L8.5 17.5L19 6.5"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			)}
		</div>
	) : (
		<DropdownPrimitive.CheckboxItem
			{...props}
			checked={checked}
			onCheckedChange={onCheckedChange}
			className={cn(
				'group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-muted/10',
				className
			)}
			ref={ref}
		>
			{children}
			<DropdownPrimitive.ItemIndicator className="absolute right-4 inline-flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={20}
					height={20}
					color={'currentColor'}
					fill={'none'}
				>
					<path
						d="M5 14L8.5 17.5L19 6.5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</DropdownPrimitive.ItemIndicator>
		</DropdownPrimitive.CheckboxItem>
	);
});

DropdownCheckbox.displayName = 'ColidyDropdownCheckbox';

const DropdownSeperator = forwardRef<HTMLHRElement>((props, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<hr className="bg-border !my-6 -mx-6" ref={ref} {...props} />
	) : (
		<DropdownPrimitive.Separator
			className="h-px bg-muted/10 my-1.5 -mx-2"
			ref={ref}
			{...props}
		/>
	);
});

DropdownSeperator.displayName = 'ColidyDropdownSeperator';

const DropdownLabel = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.Label>
>(({ children, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<div
			className="text-sm text-muted px-3 py-1 mb-1 select-none"
			ref={ref}
			{...props}
		>
			{children}
		</div>
	) : (
		<DropdownPrimitive.Label
			className="text-sm text-muted px-3 py-1 mb-1 select-none"
			ref={ref}
			{...props}
		>
			{children}
		</DropdownPrimitive.Label>
	);
});

DropdownLabel.displayName = 'ColidyDropdownLabel';

const DropdownRadioGroup = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.RadioGroup>
>(({ className, children, value, onValueChange, ...props }, ref) => {
	const { isMobile } = useDropdown();

	return isMobile ? (
		<RadioGroupContext.Provider value={{ value, onValueChange }}>
			<div className={cn('space-y-2', className)}>{children}</div>
		</RadioGroupContext.Provider>
	) : (
		<DropdownPrimitive.RadioGroup
			value={value}
			onValueChange={onValueChange}
			ref={ref}
			{...props}
		>
			{children}
		</DropdownPrimitive.RadioGroup>
	);
});

DropdownRadioGroup.displayName = 'ColidyDropdownRadioGroup';

const DropdownRadioItem = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DropdownPrimitive.RadioItem>
>(({ value, children, ...props }, ref) => {
	const { isMobile } = useDropdown();

	if (isMobile) {
		return (
			<RadioGroupContext.Consumer>
				{({ value: selectedValue, onValueChange }) => (
					<div
						className={cn(
							'group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-muted/10',
							{
								'bg-muted/10': selectedValue === value,
							}
						)}
						onClick={() => onValueChange(value)}
						ref={ref}
						{...(props as any)}
					>
						{children}

						{selectedValue === value && (
							<div className="absolute right-4 inline-flex items-center justify-center">
								<span className="w-2 h-2 bg-foreground rounded-full" />
							</div>
						)}
					</div>
				)}
			</RadioGroupContext.Consumer>
		);
	} else {
		return (
			<DropdownPrimitive.RadioItem
				value={value}
				className="group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:bg-muted/10"
				ref={ref}
				{...props}
			>
				{children}
				<DropdownPrimitive.ItemIndicator className="absolute right-4 inline-flex items-center justify-center">
					<span className="w-2 h-2 bg-foreground rounded-full" />
				</DropdownPrimitive.ItemIndicator>
			</DropdownPrimitive.RadioItem>
		);
	}
});

DropdownRadioItem.displayName = 'ColidyDropdownRadioItem';

export {
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
};
