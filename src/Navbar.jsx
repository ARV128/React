 
import { Link } from "react-router-dom";
function Navbar() {
    



  return (

      <div className="navbar">
     
        <Link to="/" className="navbar-items">Pocetna  </Link> 
        <Link to="/korpa" className="navbar-items">Korpa  </Link> 
          

       <Link to="/kontakt" className="navbar-items"> Kontakt </Link>
   </div>
    
  );
}

export default Navbar;
