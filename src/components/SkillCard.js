import { useMediaQuery } from 'react-responsive'
function SkillCard({name,image}){
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div className={isTabletOrMobile ? "w-screen border-2 rounded text-center flex flex-col items-center justify-center" : "w-1/5  border-2 rounded text-center flex flex-col items-center justify-center p-4 "}>
            <img src={image} alt={`${name} logo`} className="h-24"/>
            <p className="text-3xl font-semibold">{name}</p>
        </div>
    )
}

export default SkillCard;