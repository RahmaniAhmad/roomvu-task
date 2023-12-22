import { IPost } from "@/types/types";
interface PostProps {
  post: IPost;
  isFirst?: boolean;
}

const PostDetails = ({ post, isFirst = false }: PostProps) => {
  return (
    <div
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <p
        className={isFirst ? "first-link" : "link"}
        style={{
          fontSize: "28px",
          fontWeight: "900",
        }}
      >
        {post.title}
      </p>
      <p
        style={{
          fontSize: "13px",
          paddingTop: "10px",
          opacity: 0.8,
        }}
      >
        {post.date}
      </p>
      <p style={{ fontSize: "16px", paddingTop: "10px" }}>{post.body}</p>
    </div>
  );
};

export default PostDetails;
