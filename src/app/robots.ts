import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/", "/docs/*"],
                disallow: ["/api/*", "/_next/*", "/_error"],
            },
        ],
        sitemap: new URL("/sitemap.xml", "https://ui.colidy.com").toString(),
    };
}
