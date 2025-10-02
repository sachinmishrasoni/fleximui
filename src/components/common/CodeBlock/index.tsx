import { alpha, Box, Button, Stack, Typography } from '@mui/material';
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
    showLineNumbers = true, fileName = "Example.tsx"
}) => {
    const [copied, setCopied] = useState(false);

    // Use code prop if provided, otherwise use children as string
    const codeString =
        code ||
        (typeof children === 'string' ? children : React.Children.toArray(children).join(''));

    const handleCopy = async () => {
        try {
            if (!codeString) return;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                // Modern API
                await navigator.clipboard.writeText(codeString);
            } else {
                // Fallback for unsupported browsers
                const textarea = document.createElement("textarea");
                textarea.value = codeString;
                textarea.style.position = "fixed"; // avoid scrolling to bottom
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }

            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy code:", err);
        }
    };


    return (
        <Box sx={{
            // width: '100%',
            backgroundColor: '#282a36',
            borderRadius: '0.5em',
            marginTop: '1em',
            marginBottom: '1em',
            '& pre': {
                scrollbarColor: theme => `${theme.palette.primary.main} ${alpha(theme.palette.background.paper, 0.1)}`,
            }
        }}>
            <Stack direction="row" alignItems={"center"} justifyContent="space-between" py={1} px={2} 
            sx={{
                backgroundColor: theme => alpha(theme.palette.background.paper, 0.1),
                color: theme => theme.palette.primary.contrastText
            }}
            >
                <Typography variant="body1">{fileName}</Typography>
                <Button
                    size='small'
                    // variant="outlined"
                    startIcon={copied ? <TbChecks /> : <FaRegCopy />}
                    onClick={handleCopy}
                    sx={{
                        textTransform: 'none',
                        borderRadius: 5, px: 1
                    }}>{copied ? 'Copied !' : 'Copy Code'}</Button>
            </Stack>

            <SyntaxHighlighter
                language={language}
                style={dracula}
                showLineNumbers={showLineNumbers}
                customStyle={{
                    width: '100% !important',
                    maxHeight: '25em',
                    margin: 0,
                    padding: '0.5em 0.5em 0.5em 1em',
                    fontSize: '0.9em',
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </Box>
    );
};

export default CodeBlock;
