import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/mdx/Header";
import { Footer } from "@/components/Footer";
import { OnThisPage } from "@/components/OnThisPage";
import { getDoc } from "@/utils/docs-utils";
import { notFound } from "next/navigation";

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

    return (
        <div>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
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
                        <Footer category={category} slug={slug} />
                        <OnThisPage doc={document} />
                    </div>
                </div>
            </div>
        </div>
    );
}
