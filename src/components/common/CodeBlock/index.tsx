import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState, type ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegCopy } from "react-icons/fa6";
import { TbChecks } from "react-icons/tb";

interface CodeBlockProps {
    language?: string;
    code?: string;
    children?: ReactNode;
    showLineNumbers?: boolean;
    fileName?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
    code, children, language = 'tsx',
    showLineNumbers = false, fileName = "Example.tsx"
}) => {
    const [copied, setCopied] = useState(false);

    // Use code prop if provided, otherwise use children as string
    const codeString = code ?? (typeof children === 'string' ? children : '');

    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Box sx={{
            backgroundColor: '#282a36',
            borderRadius: '0.5em',
            marginBottom: '1em',
        }}>
            <Stack direction="row" alignItems={"center"} justifyContent="space-between" py={1} px={2} color={'white'}>
                <Typography variant="body1">{fileName}</Typography>
                <Button
                    size='small'
                    variant="outlined"
                    startIcon={copied ? <TbChecks /> : <FaRegCopy />}
                    onClick={handleCopy}
                    sx={{
                        textTransform: 'none',
                        borderRadius: 5, px: 2
                    }}>{copied ? 'Code Copied' : 'Copy Code'}</Button>
            </Stack>

            <SyntaxHighlighter
                language={language}
                style={dracula}
                showLineNumbers={showLineNumbers}
                customStyle={{
                    margin: 0,
                    padding: '0.5em 0.5em 0.5em 1em',
                    backgroundColor: '#282a36',
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </Box>
    );
};

export default CodeBlock;
