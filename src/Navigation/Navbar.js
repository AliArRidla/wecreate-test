import React from "react";

const Navbar = () => {
    return (            
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">CHAMP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-item nav-link" href="#">Service</a>
                <a className="nav-item nav-link" href="#">Products</a>
                <a className="nav-item nav-link" href="#">Company</a>
                <a className="nav-item nav-link" href="#">About</a>
                <a className="nav-item nav-link active" href="#">Insights</a>                                
                <a className="nav-item nav-link btn btn-primary primary-color  tombol" href="#">Start A Project</a>
              </div>
            </div>
          </div>
        </nav>  
      </div>              
    );
};
export default Navbar;