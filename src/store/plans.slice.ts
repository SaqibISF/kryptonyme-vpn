import { Plan, PlansState, PurchasedPlan } from "@/types/plan";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PlansState = {
  isPlansLoadedOnce: false,
  plans: [],
  isActivePlanLoadedOnce: false,
  activePlan: null,
};

const plansSlice = createSlice({
  initialState,
  name: "plans",
  reducers: {
    setPlans: (state, action: PayloadAction<Plan[]>) => {
      state.isPlansLoadedOnce = true;
      state.plans = action.payload;
    },

    setActivePlan: (state, action: PayloadAction<PurchasedPlan>) => {
      state.isActivePlanLoadedOnce = true;
      state.activePlan = action.payload;
    },
  },
});

export const { setPlans, setActivePlan } = plansSlice.actions;

export default plansSlice.reducer;
