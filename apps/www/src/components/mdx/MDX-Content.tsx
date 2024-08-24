import { useMDXComponent } from "next-contentlayer/hooks";
import * as MDXComponents from "@/components/mdx/MarkdownComponents";

export const MDXContent = ({
    code,
    ...props
}: {
    code: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const Component = useMDXComponent(code);

    return (
        <div {...props}>
            {Component && <Component components={MDXComponents} />}
        </div>
    );
};
