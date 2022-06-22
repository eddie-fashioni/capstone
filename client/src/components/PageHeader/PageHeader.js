import "./PageHeader.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/take5-black.png";

const PageHeader = () => {
  return (
      <nav className="nav-bar">
        <div className="nav-logo">
          <Link to="/" className="nav-logo__link">
            <img className="nav-logo__image" src={logo} alt="Brainflix Logo" />
          </Link>
        </div>
      </nav>
  )
}

export default PageHeader