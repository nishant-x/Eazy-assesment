import { createSlice } from "@reduxjs/toolkit";
import { loginuser , logoutuser } from "./loginThunk";

let savedUser = null;

try {
  const user = localStorage.getItem("user");
  if (user) savedUser = JSON.parse(user);
} catch (error) {
  console.log("Invalid localStorage data");
}

const initialState = {
  user: savedUser || null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginuser.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })

      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

       // LOGOUT
      .addCase(logoutuser.pending, (state) => {
        state.loading = true;
      })

      .addCase(logoutuser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        localStorage.removeItem("user");
      })

      .addCase(logoutuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });  
  },
});



export default userSlice.reducer;