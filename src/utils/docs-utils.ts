import { allContents } from "contentlayer/generated";

interface GroupedItem {
    title: string;
    description: string;
    url: string;
    slug: string;
    source_url: string;
}

interface GroupedData {
    title: string;
    slug: string;
    sourceFileDir: string;
    items: GroupedItem[];
}

export const docsTree = Object.values(
    allContents.reduce((acc: { [key: string]: GroupedData }, item) => {
        const category = item._raw.sourceFileDir.split(".")[1].trim();
        const category_slug = category.toLowerCase().replace(" ", "-");

        if (!acc[category]) {
            acc[category] = {
                title: category,
                slug: category_slug,
                sourceFileDir: item._raw.sourceFileDir,
                items: [],
            };
        }

        acc[category].items.push({
            title: item.title,
            description: item.description,
            slug: item.slug,
            url: "/" + item.url.replace(item._raw.sourceFileDir, category_slug),
            source_url: item.url,
        });

        return acc;
    }, {})
).reduce((acc: GroupedData[], item) => {
    // sort items
    item.items = item.items.sort((a, b) => a.title.localeCompare(b.title));
    acc.push(item);
    return acc;
}, []);

export const getDoc = (category: string, slug: string) => {
    let doc: any = docsTree
        .find((doc) => doc.slug === category)
        ?.items.find((item) => item.url === `/${category}/${slug}`);

    doc = allContents.find((d) => d.url === doc?.source_url);
    return doc;
};

export const getNextAndPrev = (category: string, slug: string) => {
    // flat items
    const items = docsTree.flatMap((doc) => doc.items);
    const currentIndex = items.findIndex(
        (item) => item.url === `/${category}/${slug}`
    );

    const prevDoc = items[currentIndex - 1];
    const nextDoc = items[currentIndex + 1];

    return { prevDoc, nextDoc };
};
