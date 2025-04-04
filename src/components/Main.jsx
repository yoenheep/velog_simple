import Cat from "../assets/cat.jpg";

export default function Main({ post, onClick }) {
  const handleClick = () => {
    // post.id를 상위 컴포넌트로 전달
    onClick(post.id);
  };

  return (
    <div onClick={handleClick}>
      <img src={Cat} />
      <div className="container">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
