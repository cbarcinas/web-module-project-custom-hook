import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("toggleDarkMode");

  return [darkMode, setDarkMode];
};
