"use client";
import { Button } from "./Button";
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
} from "./Dialog";
import { Children, forwardRef } from "react";

export const Alert = forwardRef<
    HTMLDivElement,
    {
        children: React.ReactNode | React.ReactNode[];
        title: string;
        description: string;
        cancelText?: string;
        confirmText?: string;
        onSuccess?: () => void;
        onCancel?: () => void;
    } & React.HTMLAttributes<HTMLDivElement>
>(
    (
        {
            children,
            title,
            description,
            cancelText = "Cancel",
            confirmText = "Confirm",
            onSuccess,
            onCancel,
            ...props
        },
        ref
    ) => {
        const firstChildren = Children.toArray(children)[0];
        let body = Children.count(children) > 1 ? children : null;
        if (body) {
            body = Children.toArray(children).slice(1);
        }

        return (
            <Dialog {...props}>
                <DialogTrigger>{firstChildren}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    {body && <DialogBody>{body}</DialogBody>}
                    <DialogFooter>
                        <DialogClose type="button" onClick={onCancel} asChild>
                            <Button variant="ghost">{cancelText}</Button>
                        </DialogClose>
                        <DialogClose type="button" onClick={onSuccess} asChild>
                            <Button variant="solid">{confirmText}</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }
);

Alert.displayName = "ColidyAlert";
