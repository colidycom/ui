export const pages = (pathname: string) => [
    {
        title: "Homepage",
        isActive: () => pathname === "/",
        href: "/",
    },
    {
        title: "Documentation",
        isActive: () => pathname.startsWith("/docs"),
        href: "/docs",
    },
    {
        title: "Themes",
        href: "/themes",
        isActive: () => pathname.startsWith("/themes"),
        label: "NEW",
    },
    {
        title: "Templates",
        href: "/templates",
        isActive: () => pathname.startsWith("/templates"),
        disabled: true,
        label: "SOON",
    },
];
