'use client';

import { Button } from '@/ui-components/Button';
import { TextField } from '@/ui-components/TextField';
import { useForm } from '@colidy/hooks';

export const Demo = () => {
	const initialValues = { username: '', email: '', password: '' };

	const validate = {
		username: (value: string) => {
			if (!value) throw new Error('Username is required');
		},
		email: (value: string) => {
			if (!value) throw new Error('Email is required');
			if (!/\S+@\S+\.\S+/.test(value))
				throw new Error('Email is invalid');
		},
		password: (value: string) => {
			if (!value) throw new Error('Password is required');
			if (value.length < 6)
				throw new Error('Password must be at least 6 characters');
		},
	};

	const { values, errors, handleChange, handleSubmit, resetForm } = useForm({
		initialValues,
		validate,
	});

	const onSubmit = () => {
		console.log(values);
		resetForm(); // Reset form after submission
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4 w-full max-w-sm"
		>
			<TextField
				name="username"
				label="Username"
				value={values.username}
				onChange={handleChange}
				error={errors.username}
			/>
			<TextField
				name="email"
				label="Email"
				value={values.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<TextField
				name="password"
				label="Password"
				type="password"
				value={values.password}
				onChange={handleChange}
				error={errors.password}
			/>
			<div className="flex justify-end">
				<Button type="submit">Submit</Button>
			</div>
		</form>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { Button } from '@/ui-components/Button';
import { TextField } from '@/ui-components/TextField';
import { useForm } from '@colidy/hooks';

export const Demo = () => {
	const initialValues = { username: '', email: '', password: '' };

	const validate = {
		username: (value: string) => {
			if (!value) throw new Error('Username is required');
		},
		email: (value: string) => {
			if (!value) throw new Error('Email is required');
			if (!/\S+@\S+\.\S+/.test(value))
				throw new Error('Email is invalid');
		},
		password: (value: string) => {
			if (!value) throw new Error('Password is required');
			if (value.length < 6)
				throw new Error('Password must be at least 6 characters');
		},
	};

	const { values, errors, handleChange, handleSubmit, resetForm } = useForm({
		initialValues,
		validate,
	});

	const onSubmit = () => {
		console.log(values);
		resetForm(); // Reset form after submission
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4 w-full max-w-sm"
		>
			<TextField
				name="username"
				label="Username"
				value={values.username}
				onChange={handleChange}
				error={errors.username}
			/>
			<TextField
				name="email"
				label="Email"
				value={values.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<TextField
				name="password"
				label="Password"
				type="password"
				value={values.password}
				onChange={handleChange}
				error={errors.password}
			/>
			<div className="flex justify-end">
				<Button type="submit">Submit</Button>
			</div>
		</form>
	);
};

`;