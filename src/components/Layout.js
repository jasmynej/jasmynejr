import "./layout.css"
import { useMediaQuery } from 'react-responsive'
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
function Layout({children,activePage}){
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div className="w-screen h-screen flex flex-col">
            {isTabletOrMobile ?
                <MobileNav/> :
                <DesktopNav/>
            }

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