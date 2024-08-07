import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/mdx/Header";
import { Footer } from "@/components/Footer";
import { OnThisPage } from "@/components/OnThisPage";
import { getDoc, getNextAndPrev } from "@/utils/docs-utils";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: any;
}>) {
    const { category, slug } = params;
    const document = await getDoc(category, slug);

    if (!document) return notFound();

    const { prevDoc, nextDoc } = getNextAndPrev(category, slug);
    return (
        <div>
            <div className="container">
                <Sidebar />

                <div className="lg:pl-[19.5rem]">
                    <div className="max-w-4xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
                        <Header
                            category={
                                category[0].toUpperCase() + category.slice(1)
                            }
                            title={document.title}
                            description={document.description}
                            buttons={document.buttons}
                        />
                        {document.body && children}
                        <div className="flex justify-between mt-12">
                            {prevDoc && (
                                <Link
                                    className="text-muted hover:text-foreground bg-zinc-500/10 px-4 py-2 rounded text-sm hover:bg-zinc-500/20 active:bg-zinc-500/30 transition-colors group flex items-center"
                                    href={"/docs" + prevDoc?.url}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={16}
                                        height={16}
                                        color={"currentColor"}
                                        fill={"none"}
                                    >
                                        <path
                                            d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {prevDoc?.title}
                                </Link>
                            )}
                            {nextDoc && (
                                <Link
                                    className="text-muted hover:text-foreground bg-zinc-500/10 px-4 py-2 rounded text-sm hover:bg-zinc-500/20 active:bg-zinc-500/30 transition-colors group flex items-center"
                                    href={"/docs" + nextDoc?.url}
                                >
                                    {nextDoc?.title}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={16}
                                        height={16}
                                        color={"currentColor"}
                                        fill={"none"}
                                    >
                                        <path
                                            d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            )}
                        </div>
                        <Footer inDocs />
                        <OnThisPage doc={document} />
                    </div>
                </div>
            </div>
        </div>
    );
}
