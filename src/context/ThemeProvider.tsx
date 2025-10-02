import React, { useEffect, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider as MUIThemeProvider, responsiveFontSizes } from '@mui/material'
import getTheme from '@/config/getTheme'
import { useAppSelector } from '@/store/hooks'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { mode } = useAppSelector((state) => state.theme);
    const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>('light');

    const theme = useMemo(() => responsiveFontSizes(getTheme(resolvedMode)), [resolvedMode]);

    useEffect(() => {
        if (mode === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => setResolvedMode(mediaQuery.matches ? 'dark' : 'light');
            handleChange();
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        } else {
            setResolvedMode(mode);
        }
    }, [mode]);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    )
}

export default ThemeProvider;
