"use client";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <h2>loading...</h2>
    </LoadingWrapper>
  );
};

export default Loading;
