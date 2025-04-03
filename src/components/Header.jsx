export default function Header() {
  return (
    <header>
      <h1>Nlog</h1>
      <div className="search-container">
        <input type="text" placeholder="검색어 입력바람용" />
        <button>Search</button>
      </div>
    </header>
  );
}
