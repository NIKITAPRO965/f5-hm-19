import { memo } from "react"


function Buttons({onClick}){


    return(<>
    <button onClick={onClick} type="button">click on button</button>
    
    </>)
} 

export default memo(Buttons)