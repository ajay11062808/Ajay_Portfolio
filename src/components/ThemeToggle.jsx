import useThemeStore from "../components/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all"
    >
      {theme === "light" ? (
        <SunIcon className="w-6 h-6 text-gray-800" >light</SunIcon>
      ) : (
        <MoonIcon className="w-6 h-6 text-yellow-500">dark</MoonIcon>
      )}
    </button>
  );
};

export default ThemeToggle;
