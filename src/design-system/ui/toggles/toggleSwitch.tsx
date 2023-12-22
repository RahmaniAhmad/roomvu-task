import styled from "styled-components";

interface ToggleSwitchProps {
  isChecked?: boolean;
  handleToggle?: () => void;
}
export const ToggleSwitch = ({
  isChecked = false,
  handleToggle,
}: ToggleSwitchProps) => {
  const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  const SwitchInput = styled.input`
    display: flex;
    height: 0;
    width: 0;
    visibility: hidden;
  `;

  const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 60px;
    height: 28px;
    border-radius: 100px;
    border: 2px solid gray;
    position: relative;
    transition: background-color 0.2s;
  `;

  const SwitchButton = styled.span`
    content: "";
    position: absolute;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 45px;
    transition: 0.2s;
    background: grey;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    ${SwitchInput}:checked + ${SwitchLabel} & {
      left: calc(100% - 4px);
      transform: translateX(-100%);
    }

    ${SwitchLabel}:active & {
      width: 45px;
    }
  `;
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
