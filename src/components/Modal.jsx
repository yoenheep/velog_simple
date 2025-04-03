import Cat from "../assets/cat.jpg";
const Modal = () => {
  return (
    <dialog>
      <button>x</button>
      <h2>title이라는 것</h2>
      <p>누군가</p>
      <hr />
      <img src={Cat} />
      <p>s일단 내용</p>
    </dialog>
  );
};

export default Modal;
