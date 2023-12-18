import logo from "../images/jasmyne_logo.png"
import "./layout.css"

import {useNavigate,NavLink} from "react-router-dom";
function DesktopNav({activePage}){
    const navigate = useNavigate();
    return (
        <header className="w-full grid grid-cols-2 items-center">
            <img src={logo} className="w-20 ml-2" alt="jasmyne jean-remy name surrounded by flowers" onClick={()=>{navigate("/")}}/>
            <div className="flex w-1/2 justify-between justify-self-end mr-3" id="nav-items">
                <div className={activePage === 'resume'? 'nav-item active':'nav-item'}>
                    <NavLink to="/resume">
                        <p>Resume</p>
                    </NavLink>
                </div>
                <div className={activePage === 'skills'? 'nav-item active':'nav-item'}>
                    <NavLink to="/skills"><p>Skills</p></NavLink>
                </div>
                <div className={activePage === 'services'? 'nav-item active':'nav-item'}>
                    <NavLink to="/services">
                        <p>Services</p>
                    </NavLink>
                </div>
                <div className={activePage === 'contact'? 'nav-item active':'nav-item'}>
                    <NavLink to="/contact">
                        <p>Contact</p>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}
export default DesktopNav;