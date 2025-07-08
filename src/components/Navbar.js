import '../App.css';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex justify-content-between align-items-center w-100">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="mx-auto order-0">
                    <h1
                        className="navbar-brand mb-0"
                        style={{
                            fontFamily: 'Cantata One, serif',
                            fontSize: '1.8rem',
                            fontWeight: 600,
                            color: 'black',
                        }}
                    >
                        JobIntelli
                    </h1>
                </div>

                <div className="collapse navbar-collapse justify-content-end order-1" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                  
                    </ul>

                    {/* Add New Job Button */}
                    <button className="btn btn-primary ms-3" style={{
                        backgroundColor: '#3b82f6',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        transition: 'background-color 0.3s ease',
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
                    >
                        Add New Job
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;