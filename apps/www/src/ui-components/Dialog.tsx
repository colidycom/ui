'use client';

import { cn } from '@colidy/ui-utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Paragraph } from '@/colidy-ui/Paragraph';
import { Heading } from '@/colidy-ui/Heading';
import {
	createContext,
	forwardRef,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useViewport } from '@colidy/hooks';
import {
	Drawer,
	DrawerBody,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from './Drawer';

const DialogContext = createContext<{ isMobile: boolean }>({
	isMobile: false,
});
const useDialog = () => useContext(DialogContext);

const classes = {
	content: [
		'relative max-h-[85vh] sm:max-w-xl bg-primary border rounded-lg flex flex-col',
		'data-[state=open]:animate-translateYIn data-[state=open]:sm:animate-scaleIn data-[state=closed]:animate-translateYOut data-[state=closed]:sm:animate-scaleOut',
	].join(' '),
	overlay: [
		'bg-black/50 fixed inset-0 flex items-end justify-center sm:items-center z-50 p-4 sm:p-0',
		'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
	].join(' '),
	title: 'text-foreground m-0 sm:text-[17px] text-[18px] font-medium max-w-[80%] mx-auto sm:mx-0 sm:mb-0',
	description:
		'text-muted mt-[10px] mb-5 text-[16px] sm:text-[15px] leading-normal',
};

const Dialog = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DialogPrimitive.Root>
>((props, ref) => {
	const { width } = useViewport();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(width <= 1024);
	}, [width]);

	return (
		<DialogContext.Provider value={{ isMobile }}>
			{isMobile ? (
				<Drawer {...props} ref={ref} />
			) : (
				<DialogPrimitive.Root {...props} />
			)}
		</DialogContext.Provider>
	);
});

Dialog.displayName = 'ColidyDialog';

const DialogTrigger = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof DialogPrimitive.Trigger>
>((props, ref) => {
	const { isMobile } = useDialog();

	return isMobile ? (
		<DrawerTrigger asChild {...props} ref={ref} />
	) : (
		<DialogPrimitive.Trigger asChild {...props} />
	);
});

DialogTrigger.displayName = 'ColidyDialogTrigger';

const DialogPortal = DialogPrimitive.Portal;
const DialogClose = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof DialogPrimitive.Close>
>((props, ref) => {
	const { isMobile } = useDialog();

	return isMobile ? (
		<DrawerClose {...props} ref={ref} />
	) : (
		<DialogPrimitive.Close {...props} />
	);
});

DialogClose.displayName = 'ColidyDialogClose';

const DialogContent = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof DialogPrimitive.Content>
>(({ children, className, ...props }, ref) => {
	const { isMobile } = useDialog();

	return isMobile ? (
		<DrawerContent {...(props as any)} ref={ref}>
			{children}
		</DrawerContent>
	) : (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay className={classes.overlay}>
				<DialogPrimitive.Content
					className={cn(classes.content, className)}
					ref={ref}
					{...props}
				>
					{children}
				</DialogPrimitive.Content>
			</DialogPrimitive.Overlay>
		</DialogPrimitive.Portal>
	);
});

DialogContent.displayName = 'ColidyDialogContent';

const DialogTitle = forwardRef<
	HTMLHeadingElement,
	React.ComponentProps<typeof DialogPrimitive.Title>
>(({ children, ...props }, ref) => {
	const { isMobile } = useDialog();

	return isMobile ? (
		<DrawerTitle {...props} ref={ref}>
			{children}
		</DrawerTitle>
	) : (
		<DialogPrimitive.Title asChild ref={ref}>
			<Heading size="h2">{children}</Heading>
		</DialogPrimitive.Title>
	);
});

DialogTitle.displayName = 'ColidyDialogTitle';

const DialogDescription = forwardRef<
	HTMLParagraphElement,
	React.ComponentProps<typeof DialogPrimitive.Description>
>(({ children, ...props }, ref) => {
	const { isMobile } = useDialog();

	return isMobile ? (
		<DrawerDescription {...props} ref={ref}>
			{children}
		</DrawerDescription>
	) : (
		<DialogPrimitive.Description asChild ref={ref}>
			<Paragraph>{children}</Paragraph>
		</DialogPrimitive.Description>
	);
});

DialogDescription.displayName = 'ColidyDialogDescription';

const DialogHeader = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { isMobile } = useDialog();

	return isMobile ? (
		<DrawerHeader className={className} {...props} />
	) : (
		<div
			className={cn(
				'flex flex-col space-y-1.5 text-center sm:text-left px-8 pt-8 pb-6',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});

DialogHeader.displayName = 'ColidyDialogHeader';

const DialogFooter = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { isMobile } = useDialog();

	return isMobile ? (
		<DrawerFooter {...props} ref={ref} />
	) : (
		<div
			className={cn(
				'flex flex-col-reverse sm:flex-row sm:justify-end gap-2 px-8 pt-6 pb-8',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});

DialogFooter.displayName = 'ColidyDialogFooter';

const DialogBody = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { isMobile } = useDialog();
	return isMobile ? (
		<DrawerBody
			className={cn(
				'flex-grow overflow-y-auto flex-1 px-8 py-2',
				className
			)}
			{...props}
		/>
	) : (
		<div
			className={cn(
				'flex-grow overflow-y-auto flex-1 px-8 py-2',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});

DialogBody.displayName = 'ColidyDialogBody';

export {
	Dialog,
	DialogTrigger,
	DialogPortal,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogBody,
};
