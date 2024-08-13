function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <img
          src="https://target.scene7.com/is/image/Target/GUEST_3d962311-4a0b-47f9-8146-28740dfa2d53?wid=488&hei=488&fmt=pjpeg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Little Lemon
      </a>
      <ul className="navbar-nav ml-auto d-flex flex-row">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;




