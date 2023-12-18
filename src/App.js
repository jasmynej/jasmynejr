import './App.css';
import { useMediaQuery } from 'react-responsive'
import logo from "./images/jasmyne_logo.png"
function App() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div id="home-container" className="flex h-screen">
        <div id="side-1" className="w-2/5">
            <div className="w-full h-1/3" id="circle-pattern">
            </div>
            <div className="flex justify-center items-center h-1/3">
                <div className="leading-loose">
                    <h3 className="text-lg">Hi! 👋🏽 I'm</h3>
                    <h1 className="text-5xl font-bold">Jasmyne Jean-Remy</h1>
                    <h3 className="text-xl font-thin uppercase">Software Engineer + Freelance Web Developer</h3>
                </div>
            </div>
            <div className="w-full h-1/3" id="circle-pattern">
            </div>
        </div>
        <div id="side-2" className="w-3/5">
            <div className="w-full h-10 bg-white flex items-center justify-center gap-4" id="home-nav">
                <div>
                    <p>Resume</p>
                </div>
                <div>
                    <p>Projects</p>
                </div>
                <div>
                    <p>Contact</p>
                </div>
            </div>
            <div className=" w-full flex justify-center items-center h-full">
                <div className="w-96 h-96 rounded-full" id="headshot-image">

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
