'use client';

import { DataTable } from '@/colidy-ui/DataTable';

import { faker } from '@faker-js/faker';

const peoples = faker.helpers.multiple(
	() => ({
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	}),
	{
		count: 1000,
	}
);

export const Demo = () => {
	return (
		<div className="w-full">
			<DataTable
				columns={[
					{
						header: 'First Name',
						accessorKey: 'firstName',
					},
					{
						header: 'Last Name',
						accessorKey: 'lastName',
					},
					{
						header: 'Email',
						accessorKey: 'email',
					},
				]}
				data={peoples}
			/>
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

import { DataTable } from '@/colidy-ui/DataTable';

import { faker } from '@faker-js/faker';

const peoples = faker.helpers.multiple(
	() => ({
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	}),
	{
		count: 1000,
	}
);

export const Demo = () => {
	return (
		<div className="w-full">
			<DataTable
				columns={[
					{
						header: 'First Name',
						accessorKey: 'firstName',
					},
					{
						header: 'Last Name',
						accessorKey: 'lastName',
					},
					{
						header: 'Email',
						accessorKey: 'email',
					},
				]}
				data={peoples}
			/>
		</div>
	);
};

`;