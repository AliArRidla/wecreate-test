import React from "react";

const Footer = () => {
    return (     
         
         <div className="container ">
         <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-bottom d-flex justify-content-around">
             <div className="col mb-3">
             <a className="navbar-brand" href="#">CHAMP</a>
             <p className="text-content mt-4">CHAMP is a global leader electronic components and services, guiding makers and manufacturers from design to delivery.</p>
             <button className="btn btn-primary tombol primary-color my-4">
                 Start A Project
             </button>
             </div>
 
             <div className="col mb-3">
                 <p className="text-heading">Head Office - Singapore</p>
                 <p className="text-content">16 New Industrial Road #02-01/02 Hudson TechnoCentre. Singapore 536204</p>
                 <p className="text-content">T: (65) 6274 7488</p>
                 <p className="text-content">E: sales@champ.com.sg</p>
             </div>
 
             <div className="col mb-3">
                 <div className="row">
                     <p className="text-heading">Representative</p>
                     <div className="col text-content">                    
                         <p>China</p>
                         <p>Malaysia</p>
                         <p>Thailand</p>
                     </div>
                     <div className="col text-content">                    
                         <p>Taiwan</p>
                         <p>Vietnam</p>
                         <p>Philippines</p>
                     </div>
                     <div className="col text-content">                    
                         <p>Indonesia</p>
                         <p>India</p>
                     </div>
                 </div>   
                 <div className="row">
                 <p className="text-heading">Member of</p>
                     </div>         
             </div>
 
         </footer>
         </div>
     );
};
export default Footer;