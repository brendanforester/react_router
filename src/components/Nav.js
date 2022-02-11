import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to ={"/"} className="spaceTwo">Home</Link>
            <Link to ={"/data"} className="spaceTwo">Data</Link>
            <Link to ={"/cool"} className="spaceTwo">Cool</Link>
        </nav>
    )
}

export default Nav;