import { NavLink } from "react-router-dom";

function Layout({ children, message, search, setMessage, setSearch }) {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">React + MongoDB</p>
          <h1>Library Management System</h1>
        </div>
        <input
          className="search"
          placeholder="Search books or members"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>

      <nav className="nav-tabs" aria-label="Main navigation">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/members">Members</NavLink>
        <NavLink to="/issues">Issue History</NavLink>
      </nav>

      {message && (
        <button className="toast" type="button" onClick={() => setMessage("")}>
          {message}
        </button>
      )}

      {children}
    </main>
  );
}

export default Layout;
