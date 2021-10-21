import { Link } from "react-router-dom";
export default function Reports(){
    return (
        <div>
            <h1>Reports</h1>
            <Link to={'/Home'}><button type='button'>Back</button></Link>
        </div>
    );
}