import logo from "../images/Jasmyne Jean-Remy Logo.png"
import "./layout.css"
import {NavLink, useNavigate} from "react-router-dom";
function Layout({children,activePage}){
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex flex-col">
            <header className="w-full grid grid-cols-2 items-center">

                <img src={logo} className="w-20 ml-2" alt="jasmyne jean-remy name surrounded by flowers" onClick={()=>{navigate("/")}}/>
                <div className="flex w-1/2 justify-between justify-self-end mr-3" id="nav-items">
                    <div className={activePage === 'resume'? 'nav-item active':'nav-item'}>
                        <NavLink to="/resume">
                            <p>Resume</p>
                        </NavLink>
                    </div>
                    <div className={activePage === 'skills'? 'nav-item active':'nav-item'}>
                        <p>Skills</p>
                    </div>
                    <div className={activePage === 'services'? 'nav-item active':'nav-item'}>
                        <p>Services</p>
                    </div>
                    <div className={activePage === 'contact'? 'nav-item active':'nav-item'}>
                        <p>Contact</p>
                    </div>
                </div>
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="text-center p-2">
                <p>This Website was made with React JS, Tailwind CSS and &#128150;</p>
            </footer>
        </div>
    )
}

export default Layout;