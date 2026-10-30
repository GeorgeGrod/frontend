
import type { Post } from "../types/post";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post}></PostCard>
        </li>
      ))}
    </div>
  );
}

export default PostList;