import { create } from "zustand";

const useThemeStore = create((set) => {
  // Initialize theme properly on the client side
  const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : "light";
  const initialTheme = storedTheme || "light";

  // Ensure correct class is applied on initial load
  if (typeof window !== "undefined") {
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }

  return {
    theme: initialTheme,
    setTheme: (newTheme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
      set({ theme: newTheme });
    },
    toggleTheme: () => set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
      return { theme: newTheme };
    }),
  };
});

export default useThemeStore;
