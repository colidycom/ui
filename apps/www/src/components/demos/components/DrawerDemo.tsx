'use client';
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerBody,
	DrawerFooter,
	DrawerClose,
} from '@/colidy-ui/Drawer';

export const Demo = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				<button>Open Drawer</button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Drawer Title</DrawerTitle>
					<DrawerDescription>Drawer Description</DrawerDescription>
				</DrawerHeader>
				<DrawerBody>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</DrawerBody>
				<DrawerFooter>
					<DrawerClose>
						<button>Close Drawer</button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
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
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerBody,
	DrawerFooter,
	DrawerClose,
} from '@/colidy-ui/Drawer';

export const Demo = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				<button>Open Drawer</button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Drawer Title</DrawerTitle>
					<DrawerDescription>Drawer Description</DrawerDescription>
				</DrawerHeader>
				<DrawerBody>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</DrawerBody>
				<DrawerFooter>
					<DrawerClose>
						<button>Close Drawer</button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

`;