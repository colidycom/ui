export default function Error() {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
            <h1 className="text-xl text-foreground">
                <span className="font-semibold">404</span>{" "}
                <span className="text-muted">—</span>{" "}
                <span className="text-foreground">Page not found</span>
            </h1>
        </div>
    );
}
