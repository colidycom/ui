'use client';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/colidy-ui/HoverCard';
import { Button } from '@/colidy-ui/Button';

export const Demo = () => {
	return (
		<div>
			<HoverCard>
				<HoverCardTrigger>
					<a
						className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
						href="https://twitter.com/colidycom"
						target="_blank"
						rel="noreferrer noopener"
					>
						<img
							className="block h-[45px] w-[45px] rounded-full"
							src="https://pbs.twimg.com/profile_images/1784329479302610946/SZxHZH8R_400x400.jpg"
							alt="Colidy"
						/>
					</a>
				</HoverCardTrigger>
				<HoverCardContent>
					<div className="flex flex-col gap-4">
						<div className="flex justify-between gap-10">
							<img
								className="block h-[60px] w-[60px] rounded-full"
								src="https://pbs.twimg.com/profile_images/1784329479302610946/SZxHZH8R_400x400.jpg"
								alt="Colidy"
							/>
							<div>
								<Button
									size="sm"
									color="blue"
									className="rounded-full"
								>
									Follow
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div>
								<div className="text-foreground m-0 text-base/5 font-medium">
									Colidy
								</div>
								<div className="text-muted m-0 text-sm/4">
									@colidycom
								</div>
							</div>
							<div className="text-muted m-0 text-sm/6 max-w-56">
								Colidy is a application library for enterpruners
								to create own online store.
							</div>
							<div className="flex gap-4">
								<div className="flex gap-2 items-center">
									<div className="text-mauve12 m-0 text-sm">
										1,234
									</div>
									<div className="text-muted m-0 text-sm/4">
										Following
									</div>
								</div>
								<div className="flex gap-2 items-center">
									<div className="text-mauve12 m-0 text-sm">
										1,234
									</div>
									<div className="text-muted m-0 text-sm/4">
										Followers
									</div>
								</div>
							</div>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
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
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/colidy-ui/HoverCard';
import { Button } from '@/colidy-ui/Button';

export const Demo = () => {
	return (
		<div>
			<HoverCard>
				<HoverCardTrigger>
					<a
						className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
						href="https://twitter.com/colidycom"
						target="_blank"
						rel="noreferrer noopener"
					>
						<img
							className="block h-[45px] w-[45px] rounded-full"
							src="https://pbs.twimg.com/profile_images/1784329479302610946/SZxHZH8R_400x400.jpg"
							alt="Colidy"
						/>
					</a>
				</HoverCardTrigger>
				<HoverCardContent>
					<div className="flex flex-col gap-4">
						<div className="flex justify-between gap-10">
							<img
								className="block h-[60px] w-[60px] rounded-full"
								src="https://pbs.twimg.com/profile_images/1784329479302610946/SZxHZH8R_400x400.jpg"
								alt="Colidy"
							/>
							<div>
								<Button
									size="sm"
									color="blue"
									className="rounded-full"
								>
									Follow
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div>
								<div className="text-foreground m-0 text-base/5 font-medium">
									Colidy
								</div>
								<div className="text-muted m-0 text-sm/4">
									@colidycom
								</div>
							</div>
							<div className="text-muted m-0 text-sm/6 max-w-56">
								Colidy is a application library for enterpruners
								to create own online store.
							</div>
							<div className="flex gap-4">
								<div className="flex gap-2 items-center">
									<div className="text-mauve12 m-0 text-sm">
										1,234
									</div>
									<div className="text-muted m-0 text-sm/4">
										Following
									</div>
								</div>
								<div className="flex gap-2 items-center">
									<div className="text-mauve12 m-0 text-sm">
										1,234
									</div>
									<div className="text-muted m-0 text-sm/4">
										Followers
									</div>
								</div>
							</div>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	);
};

`;