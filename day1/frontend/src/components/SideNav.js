import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <ul className="sideNav">
      <li>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  )
}

export default SideNav;