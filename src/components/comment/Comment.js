import React from 'react';
import {Link} from "react-router-dom";

function Comment({commet}) {
    return (
        <div>
            <Link to={`${commet.id }`} state={{...commet}}><h4>{commet.name}</h4></Link>
        </div>
    );
}

export default Comment;