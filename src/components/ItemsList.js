import React from "react";
import {Link} from "react-router-dom";

function ItemList(){

    const list = [
        {
            name:"Billy",
            age: 13,
            color: "yellow",
            id: 1
        },
        {
            name:"Bob",
            age: 68,
            color: "purple",
            id: 2
        },
        {
            name:"Joe",
            age: 34,
            color: "orange",
            id: 3
        }
    ];


    let itemEles = list.map((obj, idx)=>
        <Link key={idx} to ={"/data/"+obj.id}>Name: {obj.name} - Age: {obj.age} - Color: {obj.color} - ID: {obj.id}</Link>
    )


    return(
        <div className="flexColumn">
            {itemEles}
        </div>
    )
}

export default ItemList;