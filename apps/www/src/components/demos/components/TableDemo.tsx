'use client';
import { Heading } from '@/colidy-ui/Heading';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/colidy-ui/Table';
import { Badge } from '@/colidy-ui/Badge';
import {
	Dropdown,
	DropdownItem,
	DropdownItems,
	DropdownTrigger,
} from '@/colidy-ui/Dropdown';
import { Card } from '@/colidy-ui/Card';

export const Demo = () => {
	return (
		<Card className="w-full flex flex-col gap-4 !px-6 !py-0">
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeader>Purchase date</TableHeader>
							<TableHeader>Amount</TableHeader>
							<TableHeader>Status</TableHeader>
							<TableHeader invisible>Actions</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{Array.from({ length: 6 }).map((_, i) => (
							<TableRow key={i}>
								<TableCell>
									<span className="text-sm/6 text-muted">
										Mar 6, 2023
									</span>
								</TableCell>
								<TableCell className="text-sm/6">
									$100.00
								</TableCell>
								<TableCell>
									<Badge
										color={
											['green', 'yellow', 'red'][i % 3]
										}
									>
										{
											['Completed', 'Pending', 'Failed'][
												i % 3
											]
										}
									</Badge>
								</TableCell>
								<TableCell>
									<Dropdown>
										<DropdownTrigger>
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
										</DropdownTrigger>
										<DropdownItems>
											<DropdownItem>View</DropdownItem>
											<DropdownItem>Edit</DropdownItem>
											<DropdownItem>Delete</DropdownItem>
										</DropdownItems>
									</Dropdown>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Card>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';
import { Heading } from '@/colidy-ui/Heading';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/colidy-ui/Table';
import { Badge } from '@/colidy-ui/Badge';
import {
	Dropdown,
	DropdownItem,
	DropdownItems,
	DropdownTrigger,
} from '@/colidy-ui/Dropdown';
import { Card } from '@/colidy-ui/Card';

export const Demo = () => {
	return (
		<Card className="w-full flex flex-col gap-4 !px-6 !py-0">
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeader>Purchase date</TableHeader>
							<TableHeader>Amount</TableHeader>
							<TableHeader>Status</TableHeader>
							<TableHeader invisible>Actions</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{Array.from({ length: 6 }).map((_, i) => (
							<TableRow key={i}>
								<TableCell>
									<span className="text-sm/6 text-muted">
										Mar 6, 2023
									</span>
								</TableCell>
								<TableCell className="text-sm/6">
									$100.00
								</TableCell>
								<TableCell>
									<Badge
										color={
											['green', 'yellow', 'red'][i % 3]
										}
									>
										{
											['Completed', 'Pending', 'Failed'][
												i % 3
											]
										}
									</Badge>
								</TableCell>
								<TableCell>
									<Dropdown>
										<DropdownTrigger>
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
										</DropdownTrigger>
										<DropdownItems>
											<DropdownItem>View</DropdownItem>
											<DropdownItem>Edit</DropdownItem>
											<DropdownItem>Delete</DropdownItem>
										</DropdownItems>
									</Dropdown>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Card>
	);
};

`;