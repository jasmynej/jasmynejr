import logo from "../images/Jasmyne Jean-Remy Logo.png"
import {useState} from "react";
import {useNavigate,NavLink} from "react-router-dom";
function MobileNav({activePage}){
    const [showNav,setShowNav] = useState(false)
    const navigate = useNavigate();
    return (
        <header className="w-full flex justify-between">
            <img src={logo} alt="jasmyne jean-remy logo" className="w-1/6" onClick={()=>{navigate("/")}}/>
            <button onClick={()=>{setShowNav(!showNav)}}><i className="fi fi-rr-menu-burger text-3xl mr-1"></i></button>
            { showNav &&
                <div className="h-screen bg-white w-2/3 absolute top-0 right-0">
                    <button onClick={()=>{setShowNav(!showNav)}}><i className="fi fi-rr-menu-burger text-3xl"></i></button>
                    <div className="flex flex-col gap-10">
                        <div className={activePage === 'resume'? 'nav-item active':'nav-item'}>
                            <NavLink to="/resume">
                                <p className="text-2xl">Resume</p>
                            </NavLink>
                        </div>
                        <div className={activePage === 'skills'? 'nav-item active':'nav-item'}>
                            <NavLink to="/skills">
                                <p className="text-2xl">Skills</p>
                            </NavLink>
                        </div>
                        <div className={activePage === 'services'? 'nav-item active':'nav-item'}>
                            <NavLink to="/services">
                                <p className="text-2xl">Services</p>
                            </NavLink>
                        </div>
                        <div className={activePage === 'contact'? 'nav-item active':'nav-item'}>
                            <NavLink to="/contact">
                                <p className="text-2xl">Contact</p>
                            </NavLink>
                        </div>

                    </div>

                </div>
            }

        </header>
    )
}

export default MobileNav;