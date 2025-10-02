import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/theme/theme.slice";
import commonReducer from "./features/common/common.slice";

const store = configureStore({
    reducer: {
        common: commonReducer,
        theme: themeReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
