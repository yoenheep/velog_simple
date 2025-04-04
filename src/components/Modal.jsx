import { forwardRef, useImperativeHandle, useRef } from "react";
import Cat from "../assets/cat.jpg";
const Modal = forwardRef(({ post, onClick }, ref) => {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
      closeModal: () => {
        dialogRef.current.close();
      },
    };
  });

  if (!post) return null; // ✅ post가 null이면 렌더링하지 않음

  return (
    <dialog ref={dialogRef}>
      <button onClick={onClick}>x</button>
      <h2>{post.title}</h2>
      <p>{post.userId}</p>
      <hr />
      <img src={Cat} />
      <p>{post.body}</p>
    </dialog>
  );
});

export default Modal;
