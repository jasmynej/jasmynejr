import {useState} from "react";
function Job({job}){
    const [show,setShowDetails] = useState(false)
    return (
        <div className="m-4">
            <h4 className="text-2xl border-b-2 font-semibold title" id="job-title" onClick={()=>{setShowDetails(!show)}}>{job.title}</h4>
            { show &&
                <div id="job-content" style={{ maxHeight: "max-content" }} className="overflow-auto transition-max-height duration-700 ease-in-out" >
                    <h4 className="font-extralight">{job.company}, {job.location}</h4>
                    <p>{job.dates}</p>
                    <ul id="summary" className="list-disc ml-10">
                        {job.details.map((detail)=>{
                            return (
                                <li>{detail}</li>
                            )
                        })}
                    </ul>
                </div>
            }

        </div>
    )
}

export default Job;