import Layout from "../components/Layout";
import react_logo from "../images/react_logo.png"
import js_logo from "../images/js_logo.png"
import postgres_logo from "../images/postgres_logo.png"
import java_logo from "../images/java_logo.png"
import spring_logo from "../images/spring_logo.png"
import aws_logo from "../images/aws_logo.png"
import tailwind_logo from "../images/tailwind_logo.png"
import bootstrap_logo from "../images/bootstrap_logo.png"
import SkillCard from "../components/SkillCard";
import { useMediaQuery } from 'react-responsive'
import {Outlet} from "react-router-dom";
function Skills (){
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <Layout activePage="skills">
            <Outlet/>
            <div className={isTabletOrMobile ? "flex flex-col gap-3 overflow-auto": "flex flex-wrap gap-3 w-screen justify-center"}>

                <SkillCard name="React" image={react_logo}/>
                <SkillCard name="Javascript" image={js_logo}/>
                <SkillCard name="PostgreSQL" image={postgres_logo}/>
                <SkillCard name="Java" image={java_logo}/>
                <SkillCard name="SpringBoot" image={spring_logo}/>
                <SkillCard name="AWS" image={aws_logo}/>
                <SkillCard name="TailwindCSS" image={tailwind_logo}/>
                <SkillCard name="Bootstrap" image={bootstrap_logo}/>
            </div>

        </Layout>
    )
}
export default Skills;