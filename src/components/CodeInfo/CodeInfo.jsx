import { BsFillInfoSquareFill } from 'react-icons/bs';

import './CodeInfo.scss';

const CodeInfo = ({ info }) => {
    return (
        <p className="code-info">
            <BsFillInfoSquareFill />
            {info}
        </p>
    );
};

export default CodeInfo;
