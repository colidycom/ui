import { Paragraph } from "@/colidy-ui/Paragraph";
import { Card } from "@/colidy-ui/Card";
import { Heading } from "@/colidy-ui/Heading";
import { Badge } from "@/colidy-ui/Badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/colidy-ui/Table";
import { Select, SelectItem } from "@/colidy-ui/Select";

export default function BrowserDemo() {
    const browsers = [
        {
            name: "Chrome",
            percentage: 45,
            icon: "/brands/chrome.svg",
        },
        {
            name: "Firefox",
            percentage: 24,
            icon: "/brands/firefox.svg",
        },
        {
            name: "Safari",
            percentage: 16,
            icon: "/brands/safari.svg",
        },
    ];

    const referrers = [
        {
            name: "Organic Search",
            clicks: 14520,
            color: "bg-green-400",
        },
        {
            name: "Direct",
            clicks: 1200,
            color: "bg-yellow-400",
        },
        {
            name: "x.com",
            clicks: 3453,
            color: "bg-gray-950",
        },
        {
            name: "facebook.com",
            clicks: 2345,
            color: "bg-blue-400",
        },
        {
            name: "linkedin.com",
            clicks: 1434,
            color: "bg-indigo-400",
        },
        {
            name: "Other",
            clicks: 1045,
            color: "bg-gray-400",
        },
    ].sort((a, b) => b.clicks - a.clicks);

    const sales = [
        {
            name: "Store",
            amount: 6540,
            icon: "/brands/shopify.svg",
        },
        {
            name: "Subscription",
            amount: 3200,
            icon: "/brands/stripe.svg",
        },
        {
            name: "Ads",
            amount: 2780,
            icon: "/brands/google-ads.svg",
        },
    ];

    const getPercentage = (clicks: number) => {
        const total = referrers.reduce(
            (acc, referrer) => acc + referrer.clicks,
            0
        );
        return Math.round((clicks / total) * 100);
    };

    const orders = [
        {
            date: "2024-08-07",
            customer: "Joshua Adams",
            product: "PlayStation 5",
            amount: 499.99,
        },
        {
            date: "2024-08-07",
            customer: "Emily Johnson",
            product: "iPhone 14",
            amount: 799.99,
        },
        {
            date: "2024-08-07",
            customer: "Michael Smith",
            product: "Samsung Galaxy S21",
            amount: 699.99,
        },
        {
            date: "2024-08-07",
            customer: "Sarah Williams",
            product: "MacBook Air",
            amount: 999.99,
        },
        {
            date: "2024-08-07",
            customer: "David Brown",
            product: "Dell XPS 13",
            amount: 1199.99,
        },
        {
            date: "2024-08-07",
            customer: "Jennifer Davis",
            product: "PlayStation 5",
            amount: 499.99,
        },
        {
            date: "2024-08-07",
            customer: "James Miller",
            product: "iPad Pro",
            amount: 899.99,
        },
        {
            date: "2024-08-07",
            customer: "Patricia Wilson",
            product: "Sony WH-1000XM4 Headphones",
            amount: 349.99,
        },
        {
            date: "2024-08-07",
            customer: "Robert Moore",
            product: "Google Pixel 6",
            amount: 599.99,
        },
        {
            date: "2024-08-07",
            customer: "Linda Taylor",
            product: "Xbox Series S",
            amount: 299.99,
        },
    ];

    const team = [
        { name: "John Doe", role: "CEO" },
        { name: "Jane Doe", role: "CTO" },
        { name: "Alice Doe", role: "Developer" },
        { name: "Bob Doe", role: "Developer" },
        { name: "Eve Doe", role: "Designer" },
    ];

    const rolesSet = new Set();
    team.forEach((member) => rolesSet.add(member.role));
    const roles = Array.from(rolesSet);

    const activities = [
        {
            date: "2024-08-07",
            activity: "John Doe added a new product",
        },
        {
            date: "2024-08-07",
            activity: "Jane Doe updated the homepage",
        },
        {
            date: "2024-08-07",
            activity: "Alice Doe fixed a bug",
        },
        {
            date: "2024-08-07",
            activity: "Bob Doe refactored the codebase",
        },
        {
            date: "2024-08-07",
            activity: "Eve Doe designed a new feature",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="!p-6 flex flex-col justify-between">
                    <header>
                        <Heading size="h2">Browsers</Heading>
                        <Paragraph className="mt-2 text-muted !text-base">
                            The most popular browsers used by our users in the
                            last 30 days.
                        </Paragraph>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
                        {browsers.map((browser, i) => (
                            <div
                                className="bg-tertiary rounded-sm p-3 flex flex-col justify-between items-between w-full"
                                key={i}
                            >
                                <img
                                    src={browser.icon}
                                    className="w-6 h-6 mb-4"
                                />
                                <div>
                                    <Paragraph>{browser.name}</Paragraph>
                                    <strong className="text-base text-foreground">
                                        {browser.percentage}%
                                    </strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
                <Card className="!p-6 flex flex-col justify-between">
                    <header>
                        <Heading size="h2">Referral Traffic</Heading>
                        <div className="flex items-center rounded overflow-hidden mt-2">
                            {referrers.map((referrer, i) => (
                                <div
                                    className={`flex items-center gap-2 ${referrer.color} p-2`}
                                    key={i}
                                    style={{
                                        width: `${getPercentage(
                                            referrer.clicks
                                        )}%`,
                                    }}
                                />
                            ))}
                        </div>
                    </header>
                    <ul className="mt-4">
                        {referrers.map((referrer, i) => (
                            <li
                                key={i}
                                className="flex items-center justify-between gap-2 text-sm mt-2"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-4 h-4 rounded-full ${referrer.color}`}
                                    />
                                    <Paragraph>{referrer.name}</Paragraph>
                                </div>
                                <p className="text-sm">
                                    {Intl.NumberFormat("en-US", {
                                        notation: "compact",
                                    }).format(referrer.clicks)}
                                </p>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card className="!p-6 flex flex-col justify-between">
                    <header>
                        <Heading size="h2">Total sales</Heading>
                        <div className="mt-2 flex items-center gap-2">
                            <p className="text-4xl">
                                <span className="text-muted">$</span>
                                <strong className="text-foreground">
                                    {Intl.NumberFormat("en-US").format(
                                        sales.reduce(
                                            (acc, sale) => acc + sale.amount,
                                            0
                                        )
                                    )}
                                </strong>
                            </p>
                            <Badge color="green">+20%</Badge>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
                        {sales.map((sale, i) => (
                            <div
                                className="bg-tertiary rounded-sm p-3 flex flex-col justify-between items-between w-full"
                                key={i}
                            >
                                <img src={sale.icon} className="w-6 h-6 mb-4" />
                                <div>
                                    <Paragraph>{sale.name}</Paragraph>
                                    <p className="text-base text-foreground">
                                        <span className="text-muted">$</span>
                                        <span className="text-foreground font-semibold">
                                            {Intl.NumberFormat("en-US").format(
                                                sale.amount
                                            )}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
                <Card className="!p-6 lg:col-span-3">
                    <header>
                        <Heading size="h2">Recent orders</Heading>
                        <Paragraph className="mt-2 text-muted !text-base">
                            The most recent orders placed by our customers.
                        </Paragraph>
                    </header>
                    <Table className="mt-6 w-full">
                        <TableHead>
                            <TableRow>
                                <TableHeader>Order number</TableHeader>
                                <TableHeader>Purchase date</TableHeader>
                                <TableHeader>Customer</TableHeader>
                                <TableHeader>Product</TableHeader>
                                <TableHeader>Amount</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order, i) => (
                                <TableRow key={i}>
                                    <TableCell className="text-sm">
                                        {1000 + i}
                                    </TableCell>
                                    <TableCell className="text-sm text-muted">
                                        {/* May 6, 2024 */}
                                        {new Date(
                                            order.date
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </TableCell>
                                    <TableCell className="text-sm">
                                        {order.customer}
                                    </TableCell>
                                    <TableCell className="text-sm">
                                        {order.product}
                                    </TableCell>
                                    <TableCell className="text-sm">
                                        <span className="text-muted">$</span>
                                        <span className="text-foreground font-semibold">
                                            {Intl.NumberFormat("en-US").format(
                                                order.amount
                                            )}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
                <div className="lg:col-span-2 grid gap-6">
                    <Card className="!p-6 h-min">
                        <header>
                            <Heading size="h2">Team members</Heading>
                            <Paragraph className="mt-2 text-muted !text-base">
                                Our team members and their roles.
                            </Paragraph>
                        </header>
                        <div className="mt-6 space-y-3">
                            {team.map((member, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between gap-2"
                                >
                                    <div className="flex items-center gap-2 w-3/5 flex-shrink-0">
                                        <img
                                            src={
                                                "https://api.dicebear.com/9.x/miniavs/svg?backgroundColor=b6e3f4&seed=" +
                                                member.name
                                                    .toLowerCase()
                                                    .replace(" ", "_")
                                            }
                                            className="w-9 h-9 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm">
                                                {member.name}
                                            </p>
                                            <p className="text-muted text-xs">
                                                {member.name
                                                    .toLowerCase()
                                                    .replace(" ", "_")}
                                                @company.com
                                            </p>
                                        </div>
                                    </div>
                                    <Select defaultValue={member.role}>
                                        {roles.map((role: any, i) => (
                                            <SelectItem key={i} value={role}>
                                                {role}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="!p-6 h-min">
                        <header>
                            <Heading size="h2">Recent activities</Heading>
                            <Paragraph className="mt-2 text-muted !text-base">
                                The most recent activities performed by our team
                                members.
                            </Paragraph>
                        </header>
                        <div className="mt-6 space-y-3">
                            {activities.map((activity, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        src={
                                            "https://api.dicebear.com/9.x/miniavs/svg?backgroundColor=b6e3f4&seed=" +
                                            activity.activity
                                                .toLowerCase()
                                                .replace(" ", "_")
                                        }
                                        className="w-9 h-9 rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold text-sm">
                                            {activity.activity}
                                        </p>
                                        <p className="text-muted text-xs">
                                            {new Date(
                                                activity.date
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
