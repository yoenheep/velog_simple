import Cat from "../assets/cat.jpg";
export default function Main({ post }) {
  return (
    <div>
      <img src={Cat} />
      <div className="container">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
