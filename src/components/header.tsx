"use client";

import styled from "styled-components";
import Link from "next/link";
import ThemeToggleSwitch from "./themeToggleSwitch";

const HeaderWrapper = styled.div`
  padding: 10px 0 10px 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0 10px 0",
        }}
      >
        <ThemeToggleSwitch />
        <h4>Roomvu Task</h4>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0 10px 0",
        }}
      >
        <Link style={{ fontSize: "24px", fontWeight: "900" }} href="/">
          overreacted
        </Link>
        <span style={{ fontStyle: "italic" }}>by Ahmad Rahmani</span>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
