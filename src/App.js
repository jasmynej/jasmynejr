import './App.css';
import headshot from "./images/headshot_2.JPG"
import Layout from "./components/Layout";
import { useMediaQuery } from 'react-responsive'

function App() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <Layout>
        {isTabletOrMobile ?
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div>
                    <img id="headshot" src={headshot} alt="jasmyne" className="w-2/4 rounded-full mx-auto"/>
                </div>
                <div className="text-center p-1">
                    <h1 className="text-5xl font-bold tracking-wide">Hi! I'm Jasmyne Jean-Remy</h1>
                    <p className="text-2xl font-light">I am a Software Engineer and a Freelance Web Developer located in NYC</p>
                </div>
            </div>
            :
            <div className="h-full w-full flex justify-center items-center">
                <div id="intro" className="flex items-center gap-2 p-4">
                    <div>
                        <h1 className="text-6xl font-bold tracking-wide">Hi! I'm Jasmyne Jean-Remy</h1>
                        <p className="text-3xl font-light">I am a Software Engineer and a Freelance Web Developer located in NYC</p>
                    </div>
                    <div>
                        <img id="headshot" src={headshot} alt="jasmyne" className="w-96 rounded-full"/>
                    </div>
                </div>
            </div>
        }

    </Layout>
  );
}

export default App;
