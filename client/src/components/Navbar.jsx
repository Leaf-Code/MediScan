import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="links" to="/home">
        Home
      </Link>

      <Link className="links" to="/createUser">
        Register
      </Link>

      <Link className="links" to="/FindPatient">
        Find 👨🏻‍💻
      </Link>
    </nav>
  );
}

export default Navbar;
