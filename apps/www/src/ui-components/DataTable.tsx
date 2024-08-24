import {
	ColumnDef,
	useReactTable,
	getCoreRowModel,
	flexRender,
	getSortedRowModel,
	SortingState,
	VisibilityState,
	getPaginationRowModel,
} from '@tanstack/react-table';
import { forwardRef, useMemo, useState } from 'react';
import { TextField } from '@/colidy-ui/TextField';
import {
	Dropdown,
	DropdownItems,
	DropdownTrigger,
	DropdownCheckbox,
	DropdownSub,
	DropdownSubItems,
	DropdownSubTrigger,
	DropdownRadioGroup,
	DropdownRadioItem,
} from '@/colidy-ui/Dropdown';
import { Button } from './Button';

type DataTableProps<TData> = {
	columns: ColumnDef<TData, any>[];
	data: TData[] | undefined;
	isLoading?: boolean;
};
export const DataTable = forwardRef<HTMLDivElement, DataTableProps<any>>(
	({ columns, data, isLoading }, ref) => {
		const [sorting, setSorting] = useState<SortingState>([]);
		const [search, setSearch] = useState<string>('');
		const [columnVisibility, setColumnVisibility] = useState<
			VisibilityState | undefined
		>(
			columns.reduce((acc, column: (typeof columns)[number]) => {
				if (!column) return acc;
				if (!column.id) return acc;
				acc[column.id] = true;
				return acc;
			}, {} as VisibilityState)
		);

		const filteredData = useMemo(
			() =>
				data?.filter(d => {
					return Object.values(d).some(v => {
						return String(v)
							.toLowerCase()
							.includes(search.toLowerCase());
					});
				}) ?? [],
			[data, search]
		);

		const table = useReactTable({
			data: filteredData,
			columns,
			getCoreRowModel: getCoreRowModel(),
			getSortedRowModel: getSortedRowModel(),
			state: {
				sorting,
				columnVisibility,
			},
			onSortingChange: newSorting => setSorting(newSorting),
			onColumnVisibilityChange: newColumnVisibility =>
				setColumnVisibility(newColumnVisibility as VisibilityState),
			getPaginationRowModel: getPaginationRowModel(),
		});

		return (
			<div role="table" className="w-full">
				<header className="flex items-center justify-between mb-4">
					<TextField
						placeholder="Search..."
						value={search}
						onChange={e => setSearch(e.target.value)}
						className="w-72"
						left={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width={12}
								height={12}
								color={'currentColor'}
								fill={'none'}
							>
								<path
									d="M17.5 17.5L22 22"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinejoin="round"
								/>
							</svg>
						}
					/>
					<Dropdown>
						<DropdownTrigger>
							<button className="flex items-center gap-2 hover:bg-zinc-500/5 h-10 w-10 justify-center rounded-sm transition-colors cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width={16}
									height={16}
									color={'currentColor'}
									fill={'none'}
								>
									<path
										d="M10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<path
										d="M10 18C10 15.7909 8.20914 14 6 14C3.79086 14 2 15.7909 2 18C2 20.2091 3.79086 22 6 22C8.20914 22 10 20.2091 10 18Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<path
										d="M22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10C20.2091 10 22 8.20914 22 6Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<path
										d="M22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
								</svg>
							</button>
						</DropdownTrigger>
						<DropdownItems>
							<DropdownSub>
								<DropdownSubTrigger>Columns</DropdownSubTrigger>
								<DropdownSubItems>
									{table.getAllColumns().map(column => (
										<DropdownCheckbox
											key={column.id}
											checked={column.getIsVisible()}
											onCheckedChange={checked =>
												column.toggleVisibility(checked)
											}
											disabled={!column.getCanHide()}
										>
											{column.columnDef.header as any}
										</DropdownCheckbox>
									))}
								</DropdownSubItems>
							</DropdownSub>

							<DropdownSub>
								<DropdownSubTrigger>
									Page Size
								</DropdownSubTrigger>
								<DropdownSubItems>
									<DropdownRadioGroup
										value={table
											.getState()
											.pagination.pageSize.toString()}
										onValueChange={val =>
											table.setPageSize(+val)
										}
									>
										{[10, 20, 30, 40, 50].map(pageSize => (
											<DropdownRadioItem
												key={pageSize}
												value={pageSize.toString()}
											>
												{pageSize}
											</DropdownRadioItem>
										))}
									</DropdownRadioGroup>
								</DropdownSubItems>
							</DropdownSub>
						</DropdownItems>
					</Dropdown>
				</header>
				<div
					ref={ref}
					className="border rounded shadow-sm overflow-x-auto"
				>
					<table className="w-full !my-0">
						<thead className="bg-border/50 border-border border-b">
							{table.getHeaderGroups().map(headerGroup => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map(header => (
										<th
											key={header.id}
											className="whitespace-nowrap text-left !py-2 !px-2 text-sm font-medium text-muted select-none"
										>
											<div
												className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-500/5 w-min rounded-sm transition-colors cursor-pointer"
												onClick={header.column.getToggleSortingHandler()}
											>
												{flexRender(
													header.column.columnDef
														.header,
													header.getContext()
												)}
												{header.column.getIsSorted() ? (
													header.column.getIsSorted() ===
													'asc' ? (
														<ChevronUp size={16} />
													) : (
														<ChevronDown
															size={16}
														/>
													)
												) : (
													<ChevronUpDown size={16} />
												)}
											</div>
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody className="divide-y divide-border/50 bg-secondary">
							{isLoading &&
								Array.from({ length: 10 }).map((_, i) => (
									<tr key={i} className="animate-pulse">
										{columns.map((column, j) => (
											<td
												key={j}
												className="!px-6 !py-4 text-sm"
											>
												<div className="h-6 rounded-sm bg-border/50 w-20"></div>
											</td>
										))}
									</tr>
								))}
							{table.getRowModel().rows.length === 0 && (
								<tr>
									<td
										colSpan={columns.length}
										className="!px-6 !py-4 text-sm text-muted text-center"
									>
										Nothing to see here
									</td>
								</tr>
							)}
							{table.getRowModel().rows.map(row => (
								<tr
									key={row.id}
									className="hover:bg-zinc-600/10 transition-colors border-border"
								>
									{row.getVisibleCells().map(cell => (
										<td
											key={cell.id}
											className="!px-6 !py-4 text-sm"
										>
											{cell?.getValue() as any}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<footer className="flex justify-between items-center mt-4">
					<div className="text-sm text-muted">
						Showing{' '}
						{table.getRowModel().rows.length === 0
							? 0
							: table.getRowModel().rows[0].index + 1}{' '}
						-{' '}
						{table.getRowModel().rows.length === 0
							? 0
							: table.getRowModel().rows[
									table.getRowModel().rows.length - 1
							  ].index + 1}{' '}
						of {filteredData.length} results
					</div>
					<div className="flex items-center gap-4">
						<Button
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
							size="sm"
							variant="outline"
						>
							Previous
						</Button>
						<Button
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
							size="sm"
							variant="outline"
						>
							Next
						</Button>
					</div>
				</footer>
			</div>
		);
	}
);

DataTable.displayName = 'ColidyDataTable';

function ChevronDown({ size }: { size?: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			width={size}
			height={size}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m19.5 8.25-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
}

function ChevronUp({ size }: { size?: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			width={size}
			height={size}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 15.75 7.5-7.5 7.5 7.5"
			/>
		</svg>
	);
}

function ChevronUpDown({ size }: { size?: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			width={size}
			height={size}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
			/>
		</svg>
	);
}
