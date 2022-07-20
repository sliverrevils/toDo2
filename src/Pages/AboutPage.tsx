import {  useNavigate} from "react-router-dom";

export const AboutPage:React.FC=()=>{
    const navigate=useNavigate();
    
        
    return(
        <>
        <h1>СТраница информации</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sed, ea sapiente odit nobis voluptate esse doloremque maxime illum illo.</p>
            <button className="btn" onClick={()=>navigate('/',{replace:true})} > Обратно к списку</button>
        </>

    )
}