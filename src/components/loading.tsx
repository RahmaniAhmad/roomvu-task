import styled from "styled-components";

const Loading = () => {
  const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <LoadingWrapper>
      <h2>loading...</h2>
    </LoadingWrapper>
  );
};

export default Loading;
