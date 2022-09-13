import {useLocation} from "react-router-dom";


function CommentDetails() {
    let Location = useLocation();
    console.log(Location);
    let {state:commet} = Location;
    return (
        <div>
            {
                JSON.stringify(commet)
            }
        </div>
    );
}

export default CommentDetails;