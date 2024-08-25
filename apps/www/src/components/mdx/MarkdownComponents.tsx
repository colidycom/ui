import { LinkedHeading } from './LinkedHeading';
import { ParagraphAnchor } from '@/colidy-ui/Paragraph';
import { CodeBlock } from './CodeBlock';

// DEMOS
export {
	UseFormDemo,
	UseToggleDemo,
	UseDarkModeDemo,
	UseKeyPressDemo,
	UseScrollPositionDemo,
	UseOnlineStatusDemo,
	UseLocalStorageDemo,
	UseHoverDemo,
	UseOnClickOutsideDemo,
	UseDebounceDemo,
	UseViewportDemo,
	UsePreviousDemo,
	UseIntervalDemo,
	UseTimeoutDemo,
	UseFetchDemo,
	UseMediaQueryDemo,
	UseFocusDemo,
	UseTableOfContentsDemo,
	DropdownDemo,
	DialogDemo,
	HeadingDemo,
	LabelDemo,
	ParagraphDemo,
	SelectDemo,
	SwitchDemo,
	TableDemo,
	TextFieldDemo,
	TooltipDemo,
	PopoverDemo,
	HoverCardDemo,
	ButtonDemo,
	DataTableDemo,
	RippleDemo,
	CheckBoxDemo,
	DrawerDemo,
	SliderDemo,
	AlertDemo,
	AccordionDemo,
	AvatarDemo,
	BadgeDemo,
	PreviewDemo,
} from '../demos';

// COMPONENTS
export * from '@/colidy-ui/Tabs';
export { Code, Installation, Packages } from './Installation';
export * from './Examples';
export * from './PropsTable';

export const h1 = ({ id, ...props }: any) => (
	<LinkedHeading id={id} level={1} {...props} />
);
export const h2 = ({ id, ...props }: any) => (
	<LinkedHeading id={id} level={2} {...props} />
);
export const h3 = ({ id, ...props }: any) => (
	<LinkedHeading id={id} level={3} {...props} />
);
export const h4 = ({ id, ...props }: any) => (
	<LinkedHeading id={id} level={4} {...props} />
);
export const h5 = ({ id, ...props }: any) => (
	<LinkedHeading id={id} level={5} {...props} />
);
export const h6 = ({ id, ...props }: any) => (
	<LinkedHeading id={id} level={6} {...props} />
);
export const a = (props: any) => (
	<ParagraphAnchor
		{...props}
		target={props.href.startsWith('http') ? '_blank' : '_self'}
	/>
);
export const p = (props: any) => <p className="text-muted" {...props} />;
export const code = (props: any) =>
	props['data-language'] ? (
		<code {...props} />
	) : (
		<code
			className="text-colored bg-zinc-500/10 font-sans px-2 py-1 text-sm rounded"
			{...props}
		/>
	);

export const pre = ({
	filename,
	raw,
	copy,
	className,
	children,
	withCopy,
	basicCodeBlock,
	...props
}: any) => <CodeBlock content={raw} filename={filename} />;

export const hr = () => <hr className="border-border/50" />;
export { ColorPalette } from './ColorPalette';
export { CustomizeTheme } from './CustomizeTheme';
