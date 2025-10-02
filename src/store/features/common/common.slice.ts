import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    settingsDrawer: {
        open: false
    }
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        toggleSettingsDrawer: (state) => {
            state.settingsDrawer.open = !state.settingsDrawer.open;
        },
    },
});

export const { toggleSettingsDrawer } = commonSlice.actions;
export default commonSlice.reducer;
