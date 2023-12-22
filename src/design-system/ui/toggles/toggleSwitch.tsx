import styled from "styled-components";
import {
  SwitchButton,
  SwitchInput,
  SwitchLabel,
  SwitchWrapper,
} from "./toggleSwitch.styled";

interface ToggleSwitchProps {
  isChecked?: boolean;
  handleToggle?: () => void;
}

export const ToggleSwitch = ({
  isChecked = true,
  handleToggle,
}: ToggleSwitchProps) => {
  return (
    <SwitchWrapper>
      <SwitchInput
        id="switch-checkbox"
        className="switch-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <SwitchLabel className="switch-label" htmlFor="switch-checkbox">
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </SwitchWrapper>
  );
};
