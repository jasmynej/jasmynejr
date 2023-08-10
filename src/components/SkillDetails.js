import {useNavigate, useParams} from "react-router-dom";
function SkillDetails(){
    const navigate = useNavigate();
    const {name} = useParams()
    return (
        <div className="bg-pink-300 h-screen w-screen absolute bg-opacity-60 top-0 left-0 flex items-center justify-center">
            <div className="bg-white h-2/3 w-2/3 p-2">
                <i className="fi fi-rr-circle-xmark text-3xl hover:text-red-500" onClick={()=> {navigate("/skills")}}></i>
                <div>
                    <h1 className="text-4xl font-semibold text-center">{name}</h1>
                    <p className="text-2xl"><span className="font-semibold">Experience:</span> 3 Years</p>
                    <p className="text-2xl font-semibold">Projects</p>
                </div>

            </div>
        </div>
    )
}

export default SkillDetails;