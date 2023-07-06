import Layout from "../components/Layout";
import "./styles/resumeStyle.css"
import Job from "../components/Job";
import Education from "../components/Education";
import {jobs} from "../data/work_data";

function Resume(){

    return (
        <Layout activePage="resume">
            <div className="h-full w-full flex flex-col items-center">
                <h1 className="text-center text-5xl font-bold p-2">Jasmyne Jean-Remy</h1>
                <h3 className="text-2xl font-extralight p-2">Software Engineer @ Publicis Sapient</h3>

                    <div className="w-2/3">
                        <div id="work-exp">
                            <h2 className="text-3xl font-semibold border-b-4 p-1">Work Experience</h2>
                            {jobs.map((job)=>{
                                return (
                                    <Job job={job}/>
                                )
                            })}
                        </div>
                        <div id="education">
                            <h2 className="text-3xl font-semibold border-b-4 p-1">Education</h2>
                            <Education/>
                        </div>
                    </div>



            </div>
        </Layout>
    )
}

export default Resume;