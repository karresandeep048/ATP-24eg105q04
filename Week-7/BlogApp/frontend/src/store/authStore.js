import { create } from "zustand";
import axios from "axios";

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,

  login: async (userCred) => {
    try {
      set({ loading: true, currentUser: null, isAuthenticated: false, error: null });
      const res = await axios.post("http://localhost:4000/auth/login", userCred, { withCredentials: true });
      if (res.status === 200) {
        set({ currentUser: res.data.payload, loading: false, isAuthenticated: true, error: null });
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.message || "Login failed",
      });
    }
  },

  logout: async () => {
    try {
      await axios.get("http://localhost:4000/auth/logout", { withCredentials: true });
    } catch (_) {}
    set({ currentUser: null, loading: false, isAuthenticated: false, error: null });
  },

  checkAuth: async () => {
    try {
      set({ loading: true });
      const res = await axios.get("http://localhost:4000/auth/check-auth", { withCredentials: true });
      set({ currentUser: res.data.payload, isAuthenticated: true, loading: false });
    } catch (err) {
      set({ currentUser: null, isAuthenticated: false, loading: false });
    }
  },
}));
