import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Highlighter = ({
    language = "javascript",
    children,
}: {
    language?: string;
    children: React.ReactNode;
}) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            customStyle={{
                backgroundColor: "transparent",
                borderRadius: "0",
                border: "0",
                margin: "0",
                padding: "1rem",
            }}
            wrapLines
            wrapLongLines
        >
            {children as any}
        </SyntaxHighlighter>
    );
};

export default Highlighter;
