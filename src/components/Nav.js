import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-secondary fixed-top">
    <div className="container-fluid">
      <span className="navbar-brand text-white">Mathix</span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <AiOutlineMenu style={{ color: 'white', fontSize: '25px' }} />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto nav-bar">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="v-line d-none d-md-block" />
          <li className="nav-item">
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li className="v-line d-none d-md-block" />
          <li className="nav-item">
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
