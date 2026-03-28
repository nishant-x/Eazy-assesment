import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginuser = createAsyncThunk(
  "user/login",
  async (userdata) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userdata),
      });

      if (!res.ok) throw new Error("Login failed");

      const userData = await res.json();

      console.log("Login successful", userData);

      return userData.user;
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
);

export const logoutuser = createAsyncThunk(
  "user/logoutuser",
  async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include"  
      });

      if (!res.ok) throw new Error("Logout failed");

      console.log("Logged out successfully ✅");
    } catch (err) {
      console.error(err.message);
    }
  }
)