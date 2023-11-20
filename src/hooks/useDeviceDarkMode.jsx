import { useEffect } from "react";
import useDarkMode from "./useDarkMode";
import useWindowResize from "./useWindowResize";

const useDeviceDarkMode = () => {
  const breakPoint = 576;
  const width = useWindowResize(window.innerWidth);
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    if (!isDark && width <= breakPoint) {
      setIsDark(false);
    }
    if (isDark && width > breakPoint) {
      setIsDark(true);
    }
  }, [width, isDark]);
  return [isDark, setIsDark];
};
export default useDeviceDarkMode;
