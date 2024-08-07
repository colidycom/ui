import { cn } from "@colidy/ui-utils";
import { forwardRef, RefAttributes } from "react";

const Table = forwardRef<
    HTMLTableElement,
    React.TableHTMLAttributes<HTMLTableElement>
>((props, ref) => <table ref={ref} {...props} />);

Table.displayName = "ColidyTable";

const TableHead = forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn(
            "text-left text-sm/6 border-b border-border text-muted font-medium",
            className
        )}
        {...props}
    />
));

TableHead.displayName = "ColidyTableHead";

const TableBody = forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn(className)} {...props} />
));

TableBody.displayName = "ColidyTableBody";

const TableRow = forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>((props, ref) => <tr ref={ref} {...props} />);

TableRow.displayName = "ColidyTableRow";

const TableCell = forwardRef<
    HTMLTableCellElement,
    React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            "py-4 border-b !border-border/50 text-foreground",
            className
        )}
        {...props}
    />
));

TableCell.displayName = "ColidyTableCell";

const TableHeader = forwardRef<
    HTMLTableHeaderCellElement,
    { invisible?: boolean } & React.HTMLAttributes<HTMLTableHeaderCellElement>
>(({ className, invisible, ...props }, ref) => (
    <th
        ref={ref}
        className={cn("py-2", className, {
            invisible: invisible,
        })}
        {...props}
    />
));

TableHeader.displayName = "ColidyTableHeader";

const TableCaption = forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>((props, ref) => <caption ref={ref} {...props} />);

TableCaption.displayName = "ColidyTableCaption";

export {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableHeader,
    TableCaption,
};
