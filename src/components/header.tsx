"use client";

import styled from "styled-components";
import ThemeToggle from "./themeToggle";
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 0;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <ThemeToggle />
      <h4>Roomvu Task</h4>
    </HeaderWrapper>
  );
};

export default Header;
