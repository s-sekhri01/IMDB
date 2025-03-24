import { Link } from 'react-router';
import '../App.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>IMDB</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Movie List</Link>
          </li>
          <li>
            <Link to="/details">Movie Details</Link>
          </li>
          <li>
            <a href="/watchlist">Watchlist</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
