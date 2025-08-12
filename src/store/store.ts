import { configureStore } from "@reduxjs/toolkit";
import app from "./app.slice";
import plans from "./plans.slice";
import servers from "./servers.slice";

const store = configureStore({ reducer: { app, plans, servers } });

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export default store;
