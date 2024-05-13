import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../index.css';
import { Link } from 'react-router-dom';
import logo from '../CBIT logo.png';

function NavComponent() {
  return (
    <nav className="navbar navbar-expand-lg my-nav my-0 py-0">
        <div className="container-fluid px-4">
            <Link className="navbar-brand platypi-regular" to="/">
                <>
                <img src={logo} width="40px"></img>
                </>
                <span className="brand-logo">Feedback</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsedNavbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mynavitem"><Link to="/" className=" mylink abel-600" >Home</Link></li>
                    <li className="nav-item dropdown mynavitem">
                        <Link className="mylink dropdown-toggle abel-600" role="button" data-bs-toggle="dropdown">
                          Feedback
                        </Link>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item mylink abel-600" to="/courseFeedback">Course Feedback</Link></li>
                          <li><Link className="dropdown-item mylink abel-600" to="/infrastructureFeedback">Infrastructure Feedback</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item mynavitem"><Link to="/profile" className="mylink abel-600">Profile</Link></li>
                    <li className="nav-item mynavitem"><Link to="/about" className="mylink abel-600">About</Link></li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link abel-600">
                            <div className="btn btn-success abel-600 py-1" >Login / Sign Up</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export {NavComponent};
