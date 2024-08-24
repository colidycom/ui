'use client';

import { cn } from '@colidy/ui-utils';
import {
	createContext,
	forwardRef,
	useContext,
	useMemo,
	useState,
} from 'react';
import * as PopoverPrimitives from '@radix-ui/react-popover';
import { useViewport } from '@colidy/hooks';
import {
	Drawer,
	DrawerBody,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from './Drawer';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

const PopoverContext = createContext<{ isMobile: boolean }>({
	isMobile: false,
});
const usePopover = () => useContext(PopoverContext);

const Popover = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof PopoverPrimitives.Root>
>(({ children, ...rest }, ref) => {
	const [isMobile, setIsMobile] = useState(false);
	const { width } = useViewport();

	useMemo(() => {
		setIsMobile(width <= 768);
	}, [width]);

	return (
		<PopoverContext.Provider value={{ isMobile }}>
			{isMobile ? (
				<Drawer>{children}</Drawer>
			) : (
				<PopoverPrimitives.Root {...rest}>
					{children}
				</PopoverPrimitives.Root>
			)}
		</PopoverContext.Provider>
	);
});

Popover.displayName = 'ColidyPopover';

const PopoverTrigger = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof PopoverPrimitives.Trigger>
>((props, ref) => {
	const { isMobile } = usePopover();

	return isMobile ? (
		<DrawerTrigger {...props} ref={ref} />
	) : (
		<PopoverPrimitives.Trigger asChild ref={ref} {...props} />
	);
});

PopoverTrigger.displayName = 'ColidyPopoverTrigger';

const PopoverContent = forwardRef<
	HTMLDivElement,
	{ withArrow?: boolean } & React.ComponentProps<
		typeof PopoverPrimitives.Content
	>
>(({ withArrow, className, children, ...props }, ref) => {
	const { isMobile } = usePopover();

	return isMobile ? (
		<DrawerContent ref={ref} {...(props as any)}>
			{children}
		</DrawerContent>
	) : (
		<PopoverPrimitives.Portal>
			<PopoverPrimitives.Content
				className={cn(
					'!z-[51] w-full min-w-[220px] bg-popover border rounded p-5 !outline-none !ring-none shadow-sm will-change-[opacity,transform] data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out',

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
				ref={ref}
				{...props}
			>
				{children}

				{withArrow && (
					<PopoverPrimitives.Arrow className="fill-border" />
				)}
			</PopoverPrimitives.Content>
		</PopoverPrimitives.Portal>
	);
});

PopoverContent.displayName = 'ColidyPopoverContent';

const PopoverClose = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof PopoverPrimitives.Close>
>((props, ref) => {
	const { isMobile } = usePopover();

	return isMobile ? (
		<DrawerClose {...props} ref={ref} />
	) : (
		<PopoverPrimitives.Close asChild ref={ref} {...props} />
	);
});

PopoverClose.displayName = 'ColidyPopoverClose';

const PopoverHeader = forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement> & { withClose?: boolean }
>(({ className, withClose, children, ...props }, ref) => {
	const { isMobile } = usePopover();

	return isMobile ? (
		<DrawerHeader
			showClose={withClose}
			className={className}
			{...props}
			ref={ref}
		>
			{children}
		</DrawerHeader>
	) : (
		<div className={cn('mb-4', className)} {...props} ref={ref}>
			{children}
		</div>
	);
});

PopoverHeader.displayName = 'ColidyPopoverHeader';

const PopoverTitle = forwardRef<
	HTMLHeadingElement,
	React.ComponentProps<typeof Heading>
>(({ children, ...props }, ref) => {
	const { isMobile } = usePopover();

	return isMobile ? (
		<DrawerTitle {...props} ref={ref}>
			{children}
		</DrawerTitle>
	) : (
		<Heading {...props}>{children}</Heading>
	);
});

PopoverTitle.displayName = 'ColidyPopoverTitle';

const PopoverDescription = forwardRef<
	HTMLParagraphElement,
	React.ComponentProps<typeof Paragraph>
>(({ children, ...props }, ref) => {
	const { isMobile } = usePopover();

	return isMobile ? (
		<DrawerDescription {...props} ref={ref}>
			{children}
		</DrawerDescription>
	) : (
		<Paragraph {...props}>{children}</Paragraph>
	);
});

PopoverDescription.displayName = 'ColidyPopoverDescription';

const PopoverBody = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DrawerBody>
>((props, ref) => {
	const { isMobile } = usePopover();

	return isMobile ? (
		<DrawerBody {...props} ref={ref} />
	) : (
		<div className="flex-1 space-y-6 w-full" {...props} ref={ref} />
	);
});

PopoverBody.displayName = 'ColidyPopoverBody';

export {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverTitle,
	PopoverClose,
	PopoverDescription,
	PopoverBody,
};
