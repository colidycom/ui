'use client';

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogBody,
	DialogFooter,
	DialogClose,
} from '@/colidy-ui/Dialog';

import { TextField } from '@/colidy-ui/TextField';
import { useState } from 'react';

export const Demo = () => {
	const [firstName, setFirstName] = useState('John');
	const [lastName, setLastName] = useState('Doe');
	const [email, setEmail] = useState('john_doe@example.com');

	return (
		<div>
			<Dialog>
				<DialogTrigger>
					<button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-auto h-12 !outline-none text-primary backdrop-blur">
						Edit profile
					</button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit Profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when
							you&apos;re done.
						</DialogDescription>
					</DialogHeader>

					<DialogBody className="space-y-4">
						<TextField
							label="First Name"
							placeholder="John"
							className="w-full"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<TextField
							label="Last Name"
							placeholder="Doe"
							className="w-full"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
						<TextField
							label="Email"
							placeholder="hello@colidy.com"
							className="w-full"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</DialogBody>
					<DialogFooter className="gap-2">
						<DialogClose
							className="hover:bg-zinc-500/10 px-4 py-2.5 rounded transition-colors text-sm"
							type="button"
						>
							Cancel
						</DialogClose>
						<button
							className="bg-foreground text-primary px-4 py-2.5 rounded transition-colors text-sm font-semibold"
							type="button"
						>
							Save Changes
						</button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `"use client";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
    DialogClose,
} from "@/colidy-ui/Dialog";

import { TextField } from "@/colidy-ui/TextField";
import { useState } from "react";

export const Demo = () => {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("john_doe@example.com");

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <button className="bg-foreground px-4 py-2 rounded flex justify-between items-center gap-6 w-auto !outline-none text-colored backdrop-blur text-sm shadow-sm">
                        Edit profile
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogBody className="space-y-4">
                        <TextField
                            label="First Name"
                            placeholder="John"
                            className="w-full"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            label="Last Name"
                            placeholder="Doe"
                            className="w-full"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            placeholder="hello@colidy.com"
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </DialogBody>
                    <DialogFooter className="gap-2">
                        <DialogClose
                            className="hover:bg-zinc-500/10 px-4 py-2.5 rounded transition-colors text-sm"
                            type="button"
                        >
                            Cancel
                        </DialogClose>
                        <button
                            className="bg-foreground text-primary px-4 py-2.5 rounded transition-colors text-sm font-semibold"
                            type="button"
                        >
                            Save Changes
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

`;
