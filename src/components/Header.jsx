import "./Header.css"
import { Link } from "react-router"

function Header({ itemQuantity }) {
  return (
    <div className="header">
      <section className="left-sec">
        <Link to="/" className="web-icon">🦇</Link>
        <p>BAT GUY</p>
      </section>


      <section className="right-sec">
        <div className="theme-switcher">
          <input type="radio" id="light-theme" name="theme-changer"/>
          <label htmlFor="light-theme">☀️</label>
          <input type="radio" id="dark-theme" name="theme-changer" />
          <label htmlFor="dark-theme">🌙</label>
        </div>

        <Link to="/cart" className="cartSum">🛒 Cart items: {itemQuantity.length}</Link>
      </section>
    </div>
  );
}

export default Header