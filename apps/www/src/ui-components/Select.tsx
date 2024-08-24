import { cn } from '@colidy/ui-utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
	Children,
	createContext,
	forwardRef,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { Label } from './Label';
import { useViewport } from '@colidy/hooks';
import { Drawer, DrawerBody, DrawerContent, DrawerTrigger } from './Drawer';

const SelectContext = createContext<{
	isMobile: boolean;
}>({ isMobile: false });
const useSelect = () => useContext(SelectContext);

const MobileContext = createContext<{
	value: any;
	valueChildren: any;
	setValueChildren: any;
	onValueChange: any;
}>({
	value: null,
	valueChildren: null,
	setValueChildren: null,
	onValueChange: null,
});

const Select = forwardRef<
	HTMLDivElement,
	{
		label?: string;
		description?: string;
		placeholder?: string;
		children: React.ReactNode;
		containerProps?: React.HTMLAttributes<HTMLDivElement>;
		triggerProps?: React.ComponentProps<typeof SelectTrigger>;
		contentProps?: React.ComponentProps<typeof SelectContent>;
	} & React.ComponentProps<typeof SelectPrimitive.Root>
>(
	(
		{
			label,
			description,
			placeholder,
			children,
			triggerProps,
			contentProps,
			...props
		},
		ref
	) => {
		const [isMobile, setIsMobile] = useState(false);
		const [valueChildren, setValueChildren] = useState(null);
		const { width } = useViewport();
		useMemo(() => {
			setIsMobile(width <= 1024);
		}, [width]);

		useEffect(() => {
			if (isMobile) {
				setValueChildren(
					(
						Children.toArray(children).find(
							(child: any) => child?.props?.value === props.value
						) as any
					)?.props?.children
				);
			}
		}, [children, props.value, isMobile]);

		return (
			<SelectContext.Provider value={{ isMobile }}>
				<div
					className="flex flex-col gap-2 w-full"
					{...props}
					ref={ref}
				>
					{label && <Label label={label} />}
					{isMobile ? (
						<MobileContext.Provider
							value={{
								value: props?.value,
								onValueChange:
									props?.onValueChange || (() => {}),
								valueChildren,
								setValueChildren,
							}}
						>
							<Drawer direction="bottom">
								<SelectTrigger {...triggerProps}>
									<SelectValue placeholder={placeholder} />
								</SelectTrigger>
								<DrawerContent>
									<SelectContent {...contentProps}>
										{children}
									</SelectContent>
								</DrawerContent>
							</Drawer>
						</MobileContext.Provider>
					) : (
						<SelectPrimitive.Root {...props}>
							<SelectTrigger {...triggerProps}>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
							<SelectContent {...contentProps}>
								{children}
							</SelectContent>
						</SelectPrimitive.Root>
					)}
					{description && (
						<p className="text-xs text-muted">{description}</p>
					)}
				</div>
			</SelectContext.Provider>
		);
	}
);

Select.displayName = 'ColidySelect';

const SelectTrigger = forwardRef<
	HTMLButtonElement,
	{
		className?: string;
		children: React.ReactNode;
	} & React.ComponentProps<typeof SelectPrimitive.Trigger>
>(({ children, className, ...props }, ref) => {
	const { isMobile } = useSelect();

	return isMobile ? (
		<DrawerTrigger
			className={cn(
				'bg-input relative rounded flex items-center transition-all justify-between py-1.5 px-2.5 text-sm/6 !outline-none',
				'border hover:border-accent focus-within:!border-transparent focus-within:ring-colored focus-within:ring-2',
				className
			)}
			asChild
			{...(props as any)}
		>
			<span className="flex items-center justify-between w-full">
				{children}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={16}
					height={16}
					color="currentColor"
					fill="none"
				>
					<path
						d="M17.9999 14C17.9999 14 13.581 19 11.9999 19C10.4188 19 5.99994 14 5.99994 14"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M17.9999 9.99996C17.9999 9.99996 13.581 5.00001 11.9999 5C10.4188 4.99999 5.99994 10 5.99994 10"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
		</DrawerTrigger>
	) : (
		<SelectPrimitive.Trigger
			className={cn(
				'bg-input relative rounded flex items-center transition-all justify-between py-1.5 px-2.5 text-sm/6 !outline-none',
				'border hover:border-accent focus-within:!border-transparent focus-within:ring-colored focus-within:ring-2',
				className
			)}
			ref={ref}
			asChild
			{...props}
		>
			<button className="flex items-center w-full gap-2">
				{children}
				<SelectPrimitive.Icon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={16}
						height={16}
						color="currentColor"
						fill="none"
					>
						<path
							d="M17.9999 14C17.9999 14 13.581 19 11.9999 19C10.4188 19 5.99994 14 5.99994 14"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.9999 9.99996C17.9999 9.99996 13.581 5.00001 11.9999 5C10.4188 4.99999 5.99994 10 5.99994 10"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</SelectPrimitive.Icon>
			</button>
		</SelectPrimitive.Trigger>
	);
});

SelectTrigger.displayName = 'ColidySelectTrigger';

const SelectValue = forwardRef<
	HTMLDivElement,
	{
		placeholder?: string;
	} & React.ComponentProps<typeof SelectPrimitive.Value>
>((props, ref) => {
	const { isMobile } = useSelect();
	const { valueChildren } = useContext(MobileContext);

	return isMobile ? (
		<div
			className={cn(
				'flex items-center gap-2 text-sm/6 text-foreground',
				'overflow-hidden truncate'
			)}
			ref={ref}
		>
			{valueChildren ? (
				valueChildren
			) : (
				<span className="text-muted">{props.placeholder}</span>
			)}
		</div>
	) : (
		<SelectPrimitive.Value {...props} />
	);
});

SelectValue.displayName = 'ColidySelectValue';

const SelectContent = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof SelectPrimitive.Content>
>(({ children, className, ...props }, ref) => {
	const { isMobile } = useSelect();

	return isMobile ? (
		<DrawerBody className="space-y-2">{children}</DrawerBody>
	) : (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				className={cn(
					'overflow-hidden bg-popover border rounded z-[9999]',
					className
				)}
				ref={ref}
				{...props}
			>
				<SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-[25px] text-muted cursor-default">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						width="24"
						height="24"
					>
						<path d="M7 15l5-5 5 5H7z" />
					</svg>
				</SelectPrimitive.ScrollUpButton>
				<SelectPrimitive.Viewport className="p-[3px]">
					{children}
				</SelectPrimitive.Viewport>
				<SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-[25px] text-muted cursor-default">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						width="24"
						height="24"
					>
						<path d="M7 9l5 5 5-5H7z" />
					</svg>
				</SelectPrimitive.ScrollDownButton>
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
});

SelectContent.displayName = 'ColidySelectContent';

const SelectGroup = forwardRef<
	HTMLDivElement,
	{ label: string; children: React.ReactNode }
>(({ label, children }, ref) => {
	const { isMobile } = useSelect();

	return isMobile ? (
		<div className="flex flex-col gap-2">
			<p className="text-xs leading-[25px] pt-6 text-muted font-semibold px-3">
				{label}
			</p>
			{children}
		</div>
	) : (
		<SelectPrimitive.Group ref={ref}>
			<SelectPrimitive.Label className="px-[30px] text-xs leading-[25px] pt-1 text-muted">
				{label}
			</SelectPrimitive.Label>
			{children}
		</SelectPrimitive.Group>
	);
});

SelectGroup.displayName = 'ColidySelectGroup';

const SelectSeparator = forwardRef<HTMLHRElement>((props, ref) => {
	const { isMobile } = useSelect();

	return isMobile ? (
		<hr className="h-[1px] bg-muted m-[5px]" ref={ref} {...props} />
	) : (
		<SelectPrimitive.Separator
			className="h-[1px] bg-muted m-[5px]"
			ref={ref}
			{...props}
		/>
	);
});

SelectSeparator.displayName = 'ColidySelectSeparator';

const SelectItem = forwardRef<
	HTMLDivElement,
	{
		children: React.ReactNode;
		className?: string;
	} & React.ComponentProps<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => {
	const { isMobile } = useSelect();
	const { value, onValueChange, setValueChildren } =
		useContext(MobileContext);

	return isMobile ? (
		<div
			className={cn(
				'group text-sm leading-none text-foreground cursor-pointer rounded-sm flex items-center gap-2 h-10 px-3 transition-all relative select-none outline-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[selected]:bg-muted/20 data-[selected]:text-foreground',
				className
			)}
			data-selected={props.value === value ? '' : undefined}
			data-disabled={props.disabled ? '' : undefined}
			onClick={() => {
				onValueChange?.(props.value);
				setValueChildren(children);
			}}
		>
			<span className="flex">{children}</span>
			{props.value === value && (
				<span className="absolute right-4 w-[25px] inline-flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={20}
						height={16}
						color="currentColor"
						fill="none"
					>
						<path
							d="M5 14L8.5 17.5L19 6.5"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			)}
		</div>
	) : (
		<SelectPrimitive.Item
			className={cn(
				'text-sm/4 leading-none text-muted rounded-sm flex items-center h-[36px] pr-[35px] pl-[30px] relative select-none data-[disabled]:text-muted data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-colored data-[highlighted]:text-white',
				className
			)}
			ref={ref}
			{...props}
		>
			<SelectPrimitive.ItemText className="flex">
				{children}
			</SelectPrimitive.ItemText>
			<SelectPrimitive.ItemIndicator className="absolute left-1 w-[25px] inline-flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={20}
					height={16}
					color="currentColor"
					fill="none"
				>
					<path
						d="M5 14L8.5 17.5L19 6.5"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</SelectPrimitive.ItemIndicator>
		</SelectPrimitive.Item>
	);
});

SelectItem.displayName = 'ColidySelectItem';

export {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectSeparator,
	SelectItem,
};
