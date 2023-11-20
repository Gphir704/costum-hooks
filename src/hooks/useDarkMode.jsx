import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage("first-mode", true);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "black" : "aquamarine";
    document.body.style.color = isDark ? "white" : "red";
  }, [isDark]);
  return [isDark, setIsDark];
};
export default useDarkMode;
