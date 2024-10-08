import { BsFillInfoSquareFill } from "react-icons/bs";

import "./TheCodeInfo.scss"

const TheCodeInfo = ({info}) => {
    return (
        <p className="code-info"><BsFillInfoSquareFill />{info}</p>
    )
}

export default TheCodeInfo