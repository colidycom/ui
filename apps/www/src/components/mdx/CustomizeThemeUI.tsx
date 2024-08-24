import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/colidy-ui/Accordion';
import { Badge } from '@/ui-components/Badge';
import { Button } from '@/ui-components/Button';
import { Heading } from '@/ui-components/Heading';
import { Paragraph } from '@/ui-components/Paragraph';
import { Switch } from '@/ui-components/Switch';
import {
	Table,
	TableHead,
	TableRow,
	TableHeader,
	TableBody,
	TableCell,
} from '@/ui-components/Table';
import { TextField } from '@/ui-components/TextField';

const accordions = [
	{
		trigger: 'Is it accessible?',
		content: 'Yes. It adheres to the WAI-ARIA design pattern.',
	},
	{
		trigger: 'Is it unstyled?',
		content:
			"Yes. It's unstyled by default, giving you freedom over the look and feel.",
	},
	{
		trigger: 'Can it be animated?',
		content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
	},
];

export default function CustomizeThemeUI() {
	return (
		<>
			<div className="not-prose grid grid-cols-1 lg:grid-cols-2 mt-24 gap-4">
				<div className="space-y-4">
					<div className="flex flex-wrap items-center h-56 border rounded-lg p-4 gap-2 px-12 bg-primary">
						<Button variant="solid">Solid</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="link">Link</Button>
					</div>
					<div className="h-min flex flex-col gap-4 border p-6 shadow-sm rounded bg-secondary">
						<div className="flex flex-col justify-between mb-4 gap-2">
							<Heading size="h1">Dashboard</Heading>
							<Paragraph>
								Welcome back, <strong>John Doe</strong>!
							</Paragraph>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							{[
								{
									title: 'Revenue',
									value: '$123,456.78',
									badge: { color: 'green', value: '+12%' },
								},
								{
									title: 'Expenses',
									value: '$123,456.78',
									badge: { color: 'red', value: '-12%' },
								},
								{
									title: 'Net income',
									value: '$123,456.78',
									badge: { color: 'green', value: '+12%' },
								},
								{
									title: 'Gross margin',
									value: '12%',
									badge: { color: 'green', value: '+12%' },
								},
								{
									title: 'Net margin',
									value: '12%',
									badge: { color: 'green', value: '+12%' },
								},
								{
									title: 'ROI',
									value: '12%',
									badge: { color: 'green', value: '+12%' },
								},
							].map(item => (
								<div
									className="text-muted m-0 text-sm/6 font-medium"
									key={item.title}
								>
									{item.title}
									<div className="text-foreground flex items-center gap-2 font-semibold m-0 text-xl">
										{item.value}{' '}
										<Badge color={item.badge.color}>
											{item.badge.value}
										</Badge>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="h-min flex flex-col gap-4 border p-6 shadow-sm rounded bg-primary">
						<div className="flex justify-between items-center mb-4gap-10">
							<Heading size="h3">Users</Heading>
						</div>
						<div className="flex flex-col gap-4">
							<Table>
								<TableHead>
									<TableRow>
										<TableHeader>Overview</TableHeader>
										<TableHeader>Role</TableHeader>
										<TableHeader invisible>
											Actions
										</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									{[
										'John Doe',
										'Jane Doe',
										'John Smith',
										'Jane Smith',
									].map((name, i) => (
										<TableRow key={i}>
											<TableCell>
												<div className="flex items-center gap-4">
													<img
														className="h-[32px] w-[32px] rounded-full"
														src={`https://randomuser.me/api/portraits/lego/${i}.jpg`}
														alt={name}
													/>
													<div>
														<div className="text-foreground m-0 text-sm/6 font-medium">
															{name}
														</div>
														<div className="text-muted m-0 text-xs/6">
															@
															{name
																.toLowerCase()
																.replace(
																	' ',
																	'.'
																)}
														</div>
													</div>
												</div>
											</TableCell>
											<TableCell>
												<Badge>
													{i % 2 === 0
														? 'Admin'
														: 'User'}
												</Badge>
											</TableCell>
											<TableCell>
												<button
													aria-label="More options"
													id="headlessui-menu-button-:Rfad6akvajta:"
													type="button"
													aria-haspopup="menu"
													aria-expanded="false"
													data-headlessui-state=""
													className="hover:bg-zinc-500/10 w-8 h-8 flex justify-center items-center !outline-none rounded transition-colors text-sm"
												>
													<span
														className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
														aria-hidden="true"
													/>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 16 16"
														width="16"
														height="16"
														fill="currentColor"
														aria-hidden="true"
														data-slot="icon"
													>
														<path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
													</svg>
												</button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
				<div className="space-y-4">
					<div className="w-full">
						<Accordion
							type="single"
							collapsible
							className="max-w-lg"
						>
							{accordions.map(({ trigger, content }) => (
								<AccordionItem key={trigger} value={trigger}>
									<AccordionTrigger>
										{trigger}
									</AccordionTrigger>
									<AccordionContent>
										{content}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className="w-full border bg-primary rounded p-8">
						<Heading size="h3">Sign in</Heading>
						<div className="grid gap-4 mt-6">
							<TextField label="Email" />
							<TextField label="Password" type="password" />
							<div className="flex justify-between items-center">
								<Switch label="Remember me" />
								<Button variant="link">Forgot password?</Button>
							</div>
							<Button variant="solid">Sign in</Button>
						</div>
						<div className="flex items-center justify-center mt-4 gap-4">
							<hr className="w-1/2 bg-muted" />
							<span className="text-muted">or</span>
							<hr className="w-1/2 bg-muted" />
						</div>
						<div className="flex justify-center mt-4 w-full">
							<Button
								variant="outline"
								className="w-full font-medium text-sm"
							>
								<img
									src="/brands/google.svg"
									alt="Google"
									className="w-4 h-4 mr-2"
								/>
								Sign in with Google
							</Button>
						</div>
					</div>
					<div className="flex flex-col gap-4  border p-6 shadow-sm rounded bg-popover">
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
				</div>
			</div>
		</>
	);
}
