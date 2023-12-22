import { toggleTheme } from "@/app/store/reducers";
import { ToggleSwitch } from "@/design-system/ui";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeToggleWrapper>
      <ToggleSwitch isChecked={isDarkMode} handleToggle={handleToggle} />
      {isDarkMode ? <LightMode /> : <DarkMode />}
    </ThemeToggleWrapper>
  );
};

export default ThemeToggle;
