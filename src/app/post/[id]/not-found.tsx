"use client";
import styled from "styled-components";

const PostNotFountWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PostNotFount = () => {
  return (
    <PostNotFountWrapper>
      <h2>oops!!! We couldnt find it.</h2>
    </PostNotFountWrapper>
  );
};

export default PostNotFount;
