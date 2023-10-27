import "./Navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="container_nav"> 
            <ul className="links_nav">
                <li>
                    <Link to="/happy_cake">Inicio</Link>
                </li>
                <li>
                    <Link to="contacto">Contacto</Link>
                </li>
            </ul>
            <div className="logo">
                <Link to="/happy_cake">Happy<span>Cake</span></Link>
            </div>
        </nav>
    )
}

export default NavBar