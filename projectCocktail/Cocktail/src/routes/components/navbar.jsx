import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
      <> 
            <div class="placeholder">
                <div class="parallax-window">
                    <div class="tm-header">
                        <div class="row tm-header-inner">
                            <div class="col-md-6 col-12">
                                <img src="/product_images/simple-house-logo.png" alt="Logo" class="tm-site-logo" /> 
                                <div class="tm-site-text-box">
                                    <h1 class="tm-site-title">Cocktail Room</h1>
                                    <h6 class="tm-site-description">a bar where we meet</h6>	
                                </div>
                            </div>
                            
                            <nav className="col-md-6 col-12 tm-nav">
                                <ul className="tm-nav-ul">
                                    <li className="tm-nav-li">
                                        <NavLink to="/" exact className="tm-nav-link" activeClassName="active">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="tm-nav-li tm-nav-dropdown-li">
                                        <a className="tm-nav-link" activeClassName="active">Produits</a>
                                        <div className="tm-nav-dropdown">
                                            <NavLink to="/cocktails">Cocktails</NavLink>
                                            <NavLink to="/aperitifs">Apéritifs</NavLink>
                                            <NavLink to="/desserts">Desserts</NavLink>
                                            <NavLink to="/glaces">Glaces et Smoothies</NavLink>
                                            <NavLink to="/ambiances">Ambiance et idées</NavLink>
                                            <NavLink to="/ateliers">Ateliers</NavLink>
                                        </div>
                                    </li>
                                    <li className="tm-nav-li">
                                        <NavLink to="/apropos" className="tm-nav-link" activeClassName="active">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="tm-nav-li">
                                        <NavLink to="/contact" className="tm-nav-link" activeClassName="active">
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}