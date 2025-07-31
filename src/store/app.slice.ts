import { AppState } from "@/types/app.state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
  isLegalNoticeLoadedOnce: false,
  termsAndConditions: "",
  privacyPolicy: "",
};

const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
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

export const { setLegalNotes } = appSlice.actions;

export default appSlice.reducer;
