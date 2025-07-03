import { Link, useLocation } from "react-router-dom";

function NavBar({ searchQuery, setSearchQuery }) {
  const location = useLocation();

  return (
    <nav>
      <h2>Netflix</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        {location.pathname === "/" && (
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
