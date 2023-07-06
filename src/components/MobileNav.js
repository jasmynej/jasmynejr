import logo from "../images/Jasmyne Jean-Remy Logo.png"
import {useState} from "react";
import {useNavigate,NavLink} from "react-router-dom";
function MobileNav(){
    const [showNav,setShowNav] = useState(false)
    const navigate = useNavigate();
    return (
        <header className="w-full flex justify-between">
            <img src={logo} alt="jasmyne jean-remy logo" className="w-1/6" onClick={()=>{navigate("/")}}/>
            <button onClick={()=>{setShowNav(!showNav)}}><i className="fi fi-rr-menu-burger text-3xl mr-1"></i></button>
            { showNav &&
                <div className="h-screen bg-white w-2/3 absolute top-0 right-0">
                    <button onClick={()=>{setShowNav(!showNav)}}><i className="fi fi-rr-menu-burger text-3xl"></i></button>
                    <NavLink to="/resume">
                        <p>Resume</p>
                    </NavLink>
                    <NavLink to="/skills">
                        <p>Skills</p>
                    </NavLink>
                    <NavLink to="/services">
                        <p>Services</p>
                    </NavLink>
                    <NavLink to="/contact">
                        <p>Contact</p>
                    </NavLink>
                </div>
            }

        </header>
    )
}

export default MobileNav;