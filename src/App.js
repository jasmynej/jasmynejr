import './App.css';
import headshot from "./images/headshot.jpeg"
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
     <div className="h-full w-full flex justify-center items-center">
        <div id="intro" className="flex items-center gap-2 p-4 border-8 border-dotted ">
            <div>
                <h1 className="text-6xl font-bold tracking-wide">Hi! I'm Jasmyne Jean-Remy</h1>
                <p className="text-3xl font-light">I am a Software Engineer and a Freelance Web Developer located in NYC</p>
            </div>
            <div>
                <img id="headshot" src={headshot} alt="jasmyne" className="w-96 rounded-full"/>
            </div>
        </div>
     </div>
    </Layout>
  );
}

export default App;
