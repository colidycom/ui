import { cn } from '@colidy/ui-utils';
import * as HoverCardPrimitives from '@radix-ui/react-hover-card';
import { forwardRef } from 'react';

const HoverCard = HoverCardPrimitives.Root;

const HoverCardTrigger = forwardRef(
	(props: React.ComponentProps<typeof HoverCardPrimitives.Trigger>, ref) => (
		<HoverCardPrimitives.Trigger asChild {...props} />
	)
);

HoverCardTrigger.displayName = 'ColidyHoverCardTrigger';

const HoverCardContent = forwardRef(
	(
		{
			children,
			className,
			...props
		}: React.ComponentProps<typeof HoverCardPrimitives.Content>,
		ref
	) => {
		return (
			<HoverCardPrimitives.Content
				className={cn(
					'min-w-64 bg-popover border rounded p-4 shadow-sm will-change-[opacity,transform] data-[state=open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out',
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
				sideOffset={6}
				{...props}
			>
				{children}
				<HoverCardPrimitives.Arrow className="fill-border" />
			</HoverCardPrimitives.Content>
		);
	}
);

HoverCardContent.displayName = 'ColidyHoverCardContent';

export { HoverCard, HoverCardTrigger, HoverCardContent };
