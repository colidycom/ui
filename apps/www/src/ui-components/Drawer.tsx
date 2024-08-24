import { cn } from '@colidy/ui-utils';
import React, {
	forwardRef,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';
import { Drawer as Vaul } from 'vaul';
import { useViewport } from '@colidy/hooks';
import { Button } from './Button';
import { Cancel01 } from '@colidy/icons/outline/Cancel01';

const DrawerContext = createContext<{
	direction: string;
	isMobile?: boolean;
}>({ direction: 'right', isMobile: false });

const DrawerProvider = DrawerContext.Provider;
const useDrawer = () => useContext(DrawerContext);

const mobileWidth = 1024;
const defaultPosition = 'right';
const defaultMobilePosition = 'bottom';

const classes = {
	overlay: 'fixed inset-0 bg-black/40 z-[99]',
	content: (direction: string) =>
		cn('!outline-none bg-primary fixed z-[100] flex flex-col', {
			'rounded border max-h-[98%] bottom-2 left-2 right-2 after:hidden':
				direction === 'bottom',
			'rounded border max-h-[98%] top-2 left-2 right-2 after:hidden':
				direction === 'top',
			'rounded border w-[30rem] left-2 top-2 bottom-2 after:hidden':
				direction === 'left',
			'rounded border w-[30rem] right-2 bottom-2 top-2 after:hidden':
				direction === 'right',
		}),
	handle: (direction: string) => {
		const t = 'h-12 flex items-center justify-center bg-border';
		const b = 'h-12 flex items-center justify-center bg-border mt-6';
		switch (direction) {
			case 'top':
				return t;
			case 'bottom':
				return b;
			case 'left':
				return 'hidden';
			case 'right':
				return 'hidden';
			default:
				return 'hidden';
		}
	},
};
const Drawer = forwardRef(
	(
		{
			shouldScaleBackground = true,
			direction,
			snapPoints,
			...props
		}: React.ComponentProps<typeof Vaul.Root>,
		ref
	) => {
		const [isMobile, setIsMobile] = useState(false);
		const { width } = useViewport();
		useMemo(() => {
			setIsMobile(width <= mobileWidth);
		}, [width]);

		return (
			<DrawerProvider
				value={{
					direction:
						direction || isMobile
							? defaultMobilePosition
							: defaultPosition,
					isMobile,
				}}
			>
				<Vaul.Root
					shouldScaleBackground={shouldScaleBackground}
					snapPoints={
						(snapPoints
							? snapPoints
							: isMobile
							? undefined
							: direction === 'right' || direction === 'left'
							? []
							: []) as any
					}
					direction={
						direction || isMobile
							? defaultMobilePosition
							: defaultPosition
					}
					{...props}
				/>
			</DrawerProvider>
		);
	}
);

Drawer.displayName = 'ColidyDrawer';
const DrawerPortal = Vaul.Portal;
const DrawerNested = forwardRef(
	({ direction, ...props }: React.ComponentProps<typeof Vaul.Root>, ref) => {
		const { isMobile } = useDrawer();
		return (
			<DrawerProvider
				value={{
					direction:
						direction || isMobile
							? defaultMobilePosition
							: defaultPosition,
					isMobile,
				}}
			>
				<Vaul.NestedRoot
					direction={
						direction || isMobile
							? defaultMobilePosition
							: defaultPosition
					}
					data-drawer-dir={
						isMobile ? defaultMobilePosition : defaultPosition
					}
					{...props}
				/>
			</DrawerProvider>
		);
	}
);

DrawerNested.displayName = 'ColidyDrawerNested';

const DrawerTitle = forwardRef(
	({ className, ...props }: React.ComponentProps<typeof Vaul.Title>, ref) => (
		<Vaul.Title className="font-medium text-lg" {...props} />
	)
);

DrawerTitle.displayName = 'ColidyDrawerTitle';

const DrawerDescription = forwardRef(
	(
		{ className, ...props }: React.ComponentProps<typeof Vaul.Description>,
		ref
	) => <Vaul.Description className="text-sm text-muted" {...props} />
);

DrawerDescription.displayName = 'ColidyDrawerDescription';

const DrawerTrigger = forwardRef(
	(props: React.ComponentProps<typeof Vaul.Trigger>, ref) => (
		<Vaul.Trigger asChild {...props} />
	)
);

DrawerTrigger.displayName = 'ColidyDrawerTrigger';

const DrawerClose = Vaul.Close;

const DrawerHandle = forwardRef(
	(
		{ className, ...props }: React.ComponentProps<typeof Vaul.Handle>,
		ref
	) => {
		const { direction } = useDrawer();
		return (
			<Vaul.Handle
				className={cn(classes.handle(direction), className)}
				{...props}
			/>
		);
	}
);

DrawerHandle.displayName = 'ColidyDrawerHandle';

const DrawerOverlay = forwardRef(
	(
		{ className, ...props }: React.ComponentProps<typeof Vaul.Overlay>,
		ref
	) => <Vaul.Overlay className={cn(classes.overlay, className)} {...props} />
);

DrawerOverlay.displayName = 'ColidyDrawerOverlay';

type DrawerBodyProps = {
	overlay?: React.ComponentProps<typeof DrawerOverlay>;
	handle?: React.ComponentProps<typeof DrawerHandle>;
	portal?: React.ComponentProps<typeof DrawerPortal>;
};
type DrawerContentProps = DrawerBodyProps &
	React.ComponentProps<typeof Vaul.Content>;

const DrawerContent = forwardRef(
	(
		{
			overlay,
			handle,
			portal,
			children,
			className,
			...props
		}: DrawerContentProps,
		ref
	) => {
		const { direction } = useDrawer();
		const isHaveTitle = React.Children.toArray(children).some(
			(child: any) => child.type === Vaul.Title
		);
		const isHaveDescription = React.Children.toArray(children).some(
			(child: any) => child.type === Vaul.Description
		);

		return (
			<DrawerPortal {...portal}>
				<Vaul.Content
					className={cn(classes.content(direction), className)}
					{...props}
				>
					{!isHaveTitle && <Vaul.Title />}
					{!isHaveDescription && <Vaul.Description />}
					{direction === 'bottom' && <DrawerHandle {...handle} />}
					<div className="flex-1 overflow-y-auto">{children}</div>
					{direction === 'top' && <DrawerHandle {...handle} />}
				</Vaul.Content>
				<DrawerOverlay {...overlay} />
			</DrawerPortal>
		);
	}
);

DrawerContent.displayName = 'ColidyDrawerContent';

const DrawerHeader = forwardRef(
	(
		{
			className,
			showClose,
			children,
			...props
		}: React.HTMLProps<HTMLDivElement> & { showClose?: boolean },
		ref
	) => {
		const { isMobile } = useDrawer();

		return (
			<div className="border-b p-6 font-medium flex justify-center lg:justify-between items-center text-base text-center lg:text-left">
				<span className={className}>{children}</span>
				{(!isMobile || showClose) && (
					<DrawerClose>
						<Button iconOnly variant="ghost">
							<Cancel01 size={16} />
						</Button>
					</DrawerClose>
				)}
			</div>
		);
	}
);

DrawerHeader.displayName = 'ColidyDrawerHeader';

const DrawerBody = forwardRef(
	(
		{ className, children, ...props }: React.HTMLProps<HTMLDivElement>,
		ref
	) => {
		return <div className="flex-1 p-6 space-y-6 w-full">{children}</div>;
	}
);

DrawerBody.displayName = 'ColidyDrawerBody';

const DrawerFooter = forwardRef(
	({ className, ...props }: React.HTMLProps<HTMLDivElement>, ref) => (
		<div
			className={cn(
				'border-t p-6 font-medium flex flex-col-reverse gap-2 lg:flex-row justify-between items-center text-base',
				className
			)}
			{...props}
		/>
	)
);

DrawerFooter.displayName = 'ColidyDrawerFooter';

export {
	Drawer,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHandle,
	DrawerOverlay,
	DrawerBody,
	DrawerTitle,
	DrawerDescription,
	DrawerNested,
	DrawerHeader,
	DrawerFooter,
};
