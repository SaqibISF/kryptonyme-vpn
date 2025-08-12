import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Server, ServersState } from "@/types/server";

const initialState: ServersState = {
  servers: [],
  isServersLoadedOnce: false,
  totalServers: 0,
};

const serversSlice = createSlice({
  initialState,
  name: "servers",
  reducers: {
    setServers: (
      state,
      action: PayloadAction<{ servers: Server[]; totalServers: number }>
    ) => {
      state.isServersLoadedOnce = true;
      state.servers = action.payload.servers;
      state.totalServers = action.payload.totalServers;
    },
  },
});

export const { setServers } = serversSlice.actions;

export default serversSlice.reducer;
