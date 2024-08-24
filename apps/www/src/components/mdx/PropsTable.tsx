'use client';

import { useEffect, useState } from 'react';
import { Tooltip } from '@/colidy-ui/Tooltip';
import { Badge } from '@/colidy-ui/Badge';
import * as Demos from '@/demos';

export const PropsTable = ({ file }: { file: string }) => {
	const componentData = (Demos as any)?.[file + 'Config'];
	if (!componentData) return <div>Error loading component data</div>;

	if (!componentData.props) return null;
	return (
		<div className="overflow-x-auto rounded border border-border/50 shadow-sm">
			<table className="w-full !my-0">
				<thead>
					<tr className="border-b border-border/50">
						<th className="!py-3 !px-4 text-left">Prop</th>
						<th className="!py-3 !px-4 text-left">Type</th>
						<th className="!py-3 !px-4 text-left">Default</th>
					</tr>
				</thead>
				<tbody>
					{componentData.props.map((prop: any, index: number) => {
						const typeIsFunction = prop.type.includes('() =>');
						const propMarked =
							prop.type.startsWith('`') &&
							prop.type.endsWith('`');
						const nonMarkedType = propMarked
							? prop.type.slice(1, -1)
							: prop.type;

						const typeIsArray = nonMarkedType.includes('|');
						const types = typeIsArray
							? nonMarkedType.split('|')
							: [];
						return (
							<tr
								key={index}
								className="border-b border-border/50 last:border-none odd:bg-border/10"
							>
								<td className="!py-3 !px-4">
									<div className=" flex gap-2">
										<div className="flex">
											<span>{prop.prop}</span>
											{prop.required && (
												<span className="text-red-500">
													*
												</span>
											)}
										</div>
										<Tooltip
											content={
												<p className="!text-sm">
													{prop.description}
												</p>
											}
										>
											<span className="text-gray-500 hover:bg-zinc-500/10 w-6 h-6 flex justify-center items-center rounded-sm transition-colors">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width={16}
													height={16}
													color={'currentColor'}
													fill={'none'}
												>
													<path
														d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
														stroke="currentColor"
														strokeWidth="1.5"
													/>
													<path
														d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
														stroke="currentColor"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M11.992 8H12.001"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
										</Tooltip>
									</div>
								</td>
								<td className="!py-3 !px-4 flex items-center gap-1">
									<div className="flex flex-wrap gap-1">
										{typeIsFunction ? (
											<Badge color="gray">function</Badge>
										) : typeIsArray ? (
											types.map(
												(
													type: string,
													index: number
												) => (
													<Badge
														key={index}
														color="gray"
													>
														{type.trim()}
													</Badge>
												)
											)
										) : (
											<Badge color="gray">
												{nonMarkedType}
											</Badge>
										)}
									</div>
									{typeIsFunction && (
										<Tooltip
											content={
												<Badge color="gray">
													{nonMarkedType}
												</Badge>
											}
										>
											<span className="text-gray-500 hover:bg-zinc-500/10 w-6 h-6 flex justify-center items-center rounded-sm transition-colors">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													width={16}
													height={16}
													color={'currentColor'}
													fill={'none'}
												>
													<path
														d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
														stroke="currentColor"
														strokeWidth="1.5"
													/>
													<path
														d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
														stroke="currentColor"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M11.992 8H12.001"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
										</Tooltip>
									)}
								</td>
								<td className="!py-3 !px-4">
									{prop.default ? (
										<Badge color="gray">
											{prop.default}
										</Badge>
									) : (
										<Badge color="gray">null</Badge>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
