import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Highlighter = ({
	language = 'javascript',
	children,
}: {
	language?: string;
	children: React.ReactNode;
}) => {
	const [t, setT] = useState('light');
	const { theme } = useTheme();

	useEffect(() => {
		setT(theme || 'light');
	}, [theme]);

	return (
		<SyntaxHighlighter
			language={language}
			style={t === 'light' ? atomOneLight : atomOneDark}
			customStyle={{
				background: 'transparent !important',
				borderRadius: '0',
				border: '0',
				margin: '0',
				padding: '0.2rem',
			}}
			wrapLines
			wrapLongLines
		>
			{children as any}
		</SyntaxHighlighter>
	);
};

export default Highlighter;
