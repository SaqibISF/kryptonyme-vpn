import { AppState } from "@/types/app.state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
  isLogoutModalOpen: false,
  isLegalNoticeLoadedOnce: false,
  termsAndConditions: "",
  privacyPolicy: "",
};

const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    setLogoutModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isLogoutModalOpen = action.payload;
    },

    setLegalNotes: (
      state,
      action: PayloadAction<{
        termsAndConditions: string;
        privacyPolicy: string;
      }>
    ) => {
      state.isLegalNoticeLoadedOnce = true;
      state.termsAndConditions = action.payload.termsAndConditions;
      state.privacyPolicy = action.payload.privacyPolicy;
    },
  },
});

export const { setLogoutModalOpen, setLegalNotes } = appSlice.actions;

export default appSlice.reducer;
