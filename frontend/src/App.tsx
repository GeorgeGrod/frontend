
import { useGetPostsQuery } from "./api/baseApi";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  const { data, isLoading, isError } = useGetPostsQuery();

  return (
    <>
      <Header
        title="Форум"
        description="Форум, де обговорюють все завгодно"
      />

      <div className="layout">
        <main>
          {isLoading && <p>Loading..</p>}
          {isError && <p>Loading error</p>}
          {data ? <PostList posts={data} /> : <p>Still no posts</p>}
        </main>
      </div>
    </>
  );
}

export default App;
