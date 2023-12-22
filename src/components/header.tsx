"use client";

import styled from "styled-components";
import ThemeToggle from "./themeToggle";
import Link from "next/link";
const HeaderWrapper = styled.div`
  padding: 10px 0 10px 0;
`;
const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 0;
`;
const Header = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0 10px 0",
        }}
      >
        <ThemeToggle />
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
    </div>
  );
};

export default Header;
