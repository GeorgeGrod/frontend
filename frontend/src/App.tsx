import "./App.css";
import Header from "./Header.tsx";
import PostList from "./PostList.tsx";
import { posts } from "./data/posts.ts";


function App() {
  return (
    <>
      <Header title="Форум" description="Форум, де обговорюють все завгодно"></Header>
      <div className="layout">
        <main>
          <PostList posts={posts}></PostList>
        </main>
      </div>
    </>
  );
}

export default App;
