"use client";

import { getPosts } from "@/api/post/getPosts";
import Loading from "@/components/loading";
import PostDetails from "@/components/postDetails";
import { formatDateWithoutDay, getDateByDays } from "@/lib/dateHelper";
import { IPost } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const PostWrapper = styled.div`
  &:hover {
    transform: scale(1.01);
  }
`;

export default function Home() {
  const [data, setData] = useState<Array<IPost>>([]);
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["posts"], () => getPosts());

  useEffect(() => {
    posts &&
      posts.map(
        (post: IPost) =>
          (post.date = formatDateWithoutDay(getDateByDays(post.id ?? 1)))
      );
    posts && setData(posts.sort((a: any, b: any) => b.id - a.id));
  }, [posts]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {data &&
        data.map((post) => {
          return (
            <PostWrapper data-testid="post-wrapper" key={post.id}>
              <Link href={`/post/${post.id}`}>
                <PostDetails
                  key={post.id}
                  post={post}
                  isFirst={post.id === data.length}
                />
              </Link>
            </PostWrapper>
          );
        })}
    </>
  );
}
