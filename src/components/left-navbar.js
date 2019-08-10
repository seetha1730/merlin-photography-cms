import React from 'react';
import { Link } from "react-router-dom";
function Navbar(){

    return(
        <ul className="list-group">
            <li className="list-group-item"><Link to="/">Categories</Link></li>
            <li className="list-group-item"><Link to="/camera/">Camera</Link></li>
            <li className="list-group-item"><Link to="/photos/">Photos</Link></li>
            <li className="list-group-item"><Link to="/setting/">Setting</Link></li>

        </ul>


    )


}
export default Navbar;
