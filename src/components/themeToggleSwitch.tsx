import { toggleTheme } from "@/app/store/reducers";
import { ThemeToggle } from "@/design-system/ui";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggleSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return <ThemeToggle isChecked={isDarkMode} handleToggle={handleToggle} />;
};

export default ThemeToggleSwitch;
