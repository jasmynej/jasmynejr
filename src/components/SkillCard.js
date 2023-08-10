import { useMediaQuery } from 'react-responsive'
import {useNavigate} from "react-router-dom";

function SkillCard({name,image}){
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const navigate = useNavigate();
    return (
        <div className={isTabletOrMobile ? "w-screen border-2 rounded text-center flex flex-col items-center justify-center" : "w-1/5  border-2 rounded text-center flex flex-col items-center justify-center p-4 "} onClick={()=>{navigate(name)}}>
            <img src={image} alt={`${name} logo`} className="h-24"/>
            <p className="text-3xl font-semibold">{name}</p>
        </div>
    )
}

export default SkillCard;