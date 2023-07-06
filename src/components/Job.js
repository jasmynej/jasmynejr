function Job({job}){
    return (
        <div className="m-4">
            <h4 className="text-2xl border-b-2">{job.title}</h4>
            <h4>{job.company}, {job.location}</h4>
            <p>{job.dates}</p>
            <ul id="summary" className="list-disc ml-10">
                {job.details.map((detail)=>{
                    return (
                        <li>{detail}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Job;