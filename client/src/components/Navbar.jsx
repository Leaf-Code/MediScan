import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px" }}>
      <Link className="links" to="/home" style={{ marginRight: "10px" }}>
        Home
      </Link>

      <Link className="links" to="/createUser" style={{ marginRight: "10px" }}>
        Register
      </Link>

      <Link className="links" to="/FindPatient" style={{ marginRight: "10px" }}>
        Find 👨🏻‍💻
      </Link>
    </nav>
  );
}

export default Navbar;
