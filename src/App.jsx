import { useEffect, useRef, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [post, setPost] = useState([]);
  const [selectPost, setSelectPost] = useState(null);
  const [fillterdPost, setFillterdPost] = useState([]);
  const [search, setSearch] = useState(null);
  const modalRef = useRef(null);
  const searchRef = useRef(null);

  // Api 불러오기
  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPost(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("호출 긑");
      }
    };

    getContent();
  }, []);

  // 모달창 띄우기
  const handleOpen = (id) => {
    const foundPost = post.find((item) => item.id === id);
    setSelectPost(foundPost);
  };

  useEffect(() => {
    if (selectPost && modalRef.current) {
      modalRef.current.open(); // 상태 업데이트 후 모달 열기
    }
  }, [selectPost]); // selectPost가 변경될 때마다 실행

  const handleClose = () => {
    modalRef.current.closeModal();
    setSelectPost(null);
  };

  // 검색어 확인
  const clickSearch = () => {
    if (searchRef.current) {
      const searchValue = searchRef.current.getValue(); // ✅ getValue 함수로 값 가져오기
      setSearch(searchValue);
    }
  };

  // 타이틀 눌럿을 때
  const clickTitle = () => {
    setSearch(null);
    searchRef.current.clearInput();
  };

  // 검색어 필터 거르기
  useEffect(() => {
    if (search) {
      console.log(search);
      const filteredPosts = post.filter((p) => p.userId === Number(search));

      setFillterdPost(filteredPosts);
    } else setFillterdPost(post);
  }, [search, post]);

  return (
    <div id="all">
      <Header ref={searchRef} onClick={clickSearch} onClickTitle={clickTitle} />

      <main>
        {fillterdPost.length > 0 ? (
          fillterdPost.map((post) => (
            <Main
              key={post.id}
              post={post}
              onClick={() => handleOpen(post.id)}
            />
          ))
        ) : (
          <h3>없는 유저입니다.</h3>
        )}
      </main>

      <Modal ref={modalRef} post={selectPost} onClick={handleClose} />
    </div>
  );
}

export default App;
