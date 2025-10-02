import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider as MUIThemeProvider, responsiveFontSizes } from '@mui/material'
import getTheme from '@/config/getTheme'
import { useAppSelector } from '@/store/hooks'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { mode } = useAppSelector((state) => state.theme);

    const theme = useMemo(() => responsiveFontSizes(getTheme(mode)), [mode]);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    )
}

export default ThemeProvider;
