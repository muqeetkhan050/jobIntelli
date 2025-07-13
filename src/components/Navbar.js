import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onAddJobClick }) => {
  return (
    <>
      <style jsx>{`
        .gradient-navbar {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border: none;
        }
        
        .navbar-brand-white {
          color: white !important;
          font-family: 'Cantata One, serif';
          font-size: 1.8rem;
          font-weight: 600;
        }
        
        .nav-link-white {
          color: white !important;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-link-white:hover {
          color: #f8f9fa !important;
          text-shadow: 0 0 8px rgba(255,255,255,0.3);
        }
        
        .nav-link-white.active {
          color: #f8f9fa !important;
          font-weight: 600;
        }
        
        .btn-white {
          background-color: white !important;
          color: #667eea !important;
          border: 2px solid white !important;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.95rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .btn-white:hover {
          background-color: #f8f9fa !important;
          color: #764ba2 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .navbar-toggler {
          border-color: white !important;
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }
        
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(255,255,255,0.1);
            border-radius: 8px;
            margin-top: 1rem;
            padding: 1rem;
            backdrop-filter: blur(10px);
          }
        }
      `}</style>
      
      <nav className="navbar navbar-expand-lg gradient-navbar">
        <div className="container d-flex justify-content-between align-items-center w-100">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto order-0">
            <h1 className="navbar-brand mb-0 navbar-brand-white">
              JobIntelli
            </h1>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end order-1"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item active">
                <a className="nav-link nav-link-white active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-white" to="/Applied">Applied</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-white" to="/Interview">Interview</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-white" to="/FinalStatus">Final Status</Link>
              </li>
            </ul>

            <button
              className="btn btn-white ms-3"
              onClick={onAddJobClick}
            >
              Add New Job
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;