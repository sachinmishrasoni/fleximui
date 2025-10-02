import type { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    mode: 'light' | 'dark';
    direction: 'ltr' | 'rtl';
}

const localMode = localStorage.getItem('mode') || 'dark';
const isValidMode = (mode: string | null): mode is PaletteMode =>
    mode === 'light' || mode === 'dark';
const mode: PaletteMode = isValidMode(localMode) ? localMode : 'dark';

const initialState: ThemeState = {
    mode,
    direction: 'ltr',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('mode', state.mode);
        },
        toggleDirection: (state) => {
            state.direction = state.direction === 'ltr' ? 'rtl' : 'ltr';
        },
    },
});

export const { toggleMode, toggleDirection } = themeSlice.actions;

export default themeSlice.reducer;
