"use client";
import { getPost } from "@/api/post/getPost";
import Loading from "@/components/loading";
import PostDetails from "@/components/postDetails";
import { formatDateWithoutDay, getDateByDays } from "@/lib/dateHelper";
import { IPost } from "@/types/types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Post = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<IPost | undefined>();
  const {
    data: post,
    error,
    isLoading,
  } = useQuery(["post", params.id], () => getPost(params.id));

  useEffect(() => {
    const mappedData = {
      ...post,
      date: formatDateWithoutDay(getDateByDays(Number(params.id) ?? 1)),
    };
    setData(mappedData);
  }, [params.id, post]);
  if (isLoading) {
    return <Loading />;
  }
  return <>{data && <PostDetails post={data} />}</>;
};

export default Post;
