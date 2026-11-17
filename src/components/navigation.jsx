export default function Navigation() {
  return (
    <nav className="nav">
      <div className="navOption navOption1">
        <a className="nav__link">About Us</a>
        <a className="nav__link">My Account</a>
        <a className="nav__link">Featured Products</a>
      </div>

      <div className="navOption navOption2">
        <a className="nav__link">Order Tracking</a>
        <select className="navSelect">
          <option className="navOption">English</option>
          <option className="navOption">Chinese</option>
        </select>
        <select className="navSelect">
          <option className="navOption">USD</option>
          <option className="navOption">NDT</option>
        </select>
      </div>
    </nav>
  );
}