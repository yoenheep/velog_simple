export default function Main({ post }) {
  return (
    <div>
      <img src="./assets/react.svg" />
      <div className="container">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
