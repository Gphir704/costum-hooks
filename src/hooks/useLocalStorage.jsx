import { useEffect, useState } from "react";

const useLocalStorage = (key, Default) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? Default
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
