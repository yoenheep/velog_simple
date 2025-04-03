import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("호출 긑");
      }
    };

    getContent();
  }, []);

  console.log(post);

  return (
    <div id="all">
      <Header />

      <main>
        {post.map((post) => {
          <Main post={post} />;
        })}
      </main>

      <Modal />
    </div>
  );
}

export default App;
