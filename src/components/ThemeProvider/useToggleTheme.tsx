import { useTheme } from "./context";

const useToggleTheme = () => {
  const { toggle } = useTheme();

  return { toggle };
};

export default useToggleTheme;
