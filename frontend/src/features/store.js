import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersclice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});