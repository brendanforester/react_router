import {Link} from "react-router-dom";

function Item(props){
    return(
        <div className="space">
            <Link to ={":id"}>Name: {props.name} - Age: {props.age} - Color: {props.color} - ID: {props.id}</Link>
        </div>
    )
}

export default Item;