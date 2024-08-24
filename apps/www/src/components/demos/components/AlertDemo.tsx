'use client';
import { Alert } from '@/colidy-ui/Alert';

export const Demo = () => {
	return (
		<div>
			<Alert
				title="Are you sure you want to delete your profile?"
				description="If you delete your profile, all your data will be lost."
				onSuccess={() => alert('Profile deleted')}
				onCancel={() => alert('Profile not deleted')}
			>
				<button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
					Delete profile
				</button>
			</Alert>
		</div>
	);
};

// @end-example
import { TextField } from '@/colidy-ui/TextField';
export default {
	props: [
		{
			prop: 'children',
			type: '`React.ReactNode`',
			default: null,
			required: true,
			description: 'The content to display in the alert.',
		},
		{
			prop: 'title',
			type: '`string`',
			default: null,
			required: true,
			description: 'The title of the alert.',
		},
		{
			prop: 'description',
			type: '`string`',
			default: null,
			required: true,
			description: 'The description of the alert.',
		},
		{
			prop: 'cancelText',
			type: '`string`',
			default: 'Cancel',
			required: false,
			description: 'The text to display on the cancel button.',
		},
		{
			prop: 'confirmText',
			type: '`string`',
			default: 'Confirm',
			required: false,
			description: 'The text to display on the confirm button.',
		},
		{
			prop: 'onSuccess',
			type: '`() => void`',
			default: null,
			required: true,
			description:
				'The function to call when the user confirms the alert.',
		},
		{
			prop: 'onCancel',
			type: '`() => void`',
			default: null,
			required: true,
			description:
				'The function to call when the user cancels the alert.',
		},
	],
	examples: [
		{
			title: 'Basic Alert',
			description: 'A basic alert with a title and description.',
			imports: `import { Alert } from "@/colidy-ui/Alert";`,
			code: `<Alert
            title="Are you sure you want to delete your profile?"
            description="If you delete your profile, all your data will be lost. And you won't be able to recover it."
        >
            <button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
                <span>Delete profile</span>
            </button>
        </Alert>`,
			component: () => {
				return (
					<Alert
						title="Are you sure you want to delete your profile?"
						description="If you delete your profile, all your data will be lost. And you won't be able to recover it."
					>
						<button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
							<span>Delete profile</span>
						</button>
					</Alert>
				);
			},
		},
		{
			title: 'Alert with Custom Button Texts',
			description: 'Change the text of the cancel and confirm buttons.',
			imports: `import { Alert } from "@/colidy-ui/Alert";`,
			code: `<Alert
            title="Are you sure you want to delete your profile?"
            description="If you delete your profile, all your data will be lost."
            confirmText="Yes, delete"
            cancelText="No, cancel"
        >
            <button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
                <span>Delete profile</span>
            </button>
        </Alert>`,
			component: () => {
				return (
					<Alert
						title="Are you sure you want to delete your profile?"
						description="If you delete your profile, all your data will be lost."
						confirmText="Yes, delete"
						cancelText="No, cancel"
					>
						<button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
							<span>Delete profile</span>
						</button>
					</Alert>
				);
			},
		},
		{
			title: 'Alert with Body',
			description: 'Add a body addtional content to the alert.',
			imports: `import { Alert } from "@/colidy-ui/Alert";\nimport { TextField } from "@/colidy-ui/TextField";`,
			code: `<Alert
            title="Are you sure you want to delete your profile?"
            description="If you delete your profile, enter your password to confirm."
        >
            <button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
                <span>Delete profile</span>
            </button>

            <TextField
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
        </Alert>`,
			component: () => {
				return (
					<Alert
						title="Are you sure you want to delete your profile?"
						description="If you delete your profile, enter your password to confirm."
					>
						<button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
							<span>Delete profile</span>
						</button>

						<TextField
							label="Password"
							type="password"
							placeholder="Enter your password"
						/>
					</Alert>
				);
			},
		},
	],
};

// @start-demo-string
export const DemoString = `'use client';
import { Alert } from '@/colidy-ui/Alert';

export const Demo = () => {
	return (
		<div>
			<Alert
				title="Are you sure you want to delete your profile?"
				description="If you delete your profile, all your data will be lost."
				onSuccess={() => alert('Profile deleted')}
				onCancel={() => alert('Profile not deleted')}
			>
				<button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-12 h-12 !outline-none text-primary backdrop-blur">
					Delete profile
				</button>
			</Alert>
		</div>
	);
};

`;
