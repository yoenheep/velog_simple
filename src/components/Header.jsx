import { forwardRef, useImperativeHandle, useRef } from "react";

const Header = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current.value,
    clearInput: () => {
      inputRef.current.value = "";
    }, // ✅ 검색창 초기화 함수 추가
  }));

  return (
    <header>
      <div onClick={props.onClickTitle}>
        <h1>Nlog</h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="userid 입력바람용" ref={inputRef} />
        <button onClick={props.onClick}>Search</button>
      </div>
    </header>
  );
});

export default Header;
