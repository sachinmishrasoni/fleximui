// import type { PaletteMode } from "@mui/material";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    mode: 'light' | 'dark' | 'system';
    direction: 'ltr' | 'rtl';
}

const localMode = localStorage.getItem('mode') || 'system';
const isValidMode = (mode: string | null): mode is ThemeState['mode'] =>
    mode === 'light' || mode === 'dark' || mode === 'system';
const mode: ThemeState['mode'] = isValidMode(localMode) ? localMode : 'system';

const initialState: ThemeState = {
    mode,
    direction: 'ltr',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<ThemeState['mode']>) => {
            state.mode = action.payload;
            localStorage.setItem('mode', state.mode);
        },
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('mode', state.mode);
        },
        toggleDirection: (state) => {
            state.direction = state.direction === 'ltr' ? 'rtl' : 'ltr';
        },
    },
});

export const { setMode, toggleMode, toggleDirection } = themeSlice.actions;

export default themeSlice.reducer;
