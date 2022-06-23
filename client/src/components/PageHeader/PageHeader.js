import "./PageHeader.scss";
import { Link , NavLink } from "react-router-dom";
import logo from "../../assets/images/take5-black.png";

const PageHeader = () => {
  return (
      <nav className="nav-bar">
        <div className="nav-logo">
          <Link to="/" className="nav-logo__link">
            <img className="nav-logo__image" src={logo} alt="Brainflix Logo" />
          </Link>
        </div>
        <div className="nav-routes">
          <NavLink to="/" className="nav-routes__home" activeClassName="active">Home</NavLink>
          <NavLink to="/feedback" className="nav-routes__score" activeClassName="active">Score</NavLink>
          <NavLink to="/dashboard" className="nav-routes__dash" activeClassName="active">Dash</NavLink>
        </div>
      </nav>
  )
}

export default PageHeader