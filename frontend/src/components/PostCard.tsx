import type { Post } from "../types/post";


interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <span className="tag">{post.category}</span>
      <h2 className="post-card-title">{post.title}</h2>
      <p className="post-card-content">{post.content}</p>
      <footer>{post.author}</footer>
    </article>
  );
}

export default PostCard;
