import React from "react";
import {useParams} from "react-router-dom";

function Items(){

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

    const params = useParams();

    const curObj = list.find(obj => String(obj.id) === params.id);
// console.log(list.find(obj => String(obj.id) === params.id));


    return(
        <h3>
            Name: {curObj.name} - Age: {curObj.age} - Color: {curObj.color} - ID: {curObj.id}
        </h3>
    )
}

export default Items;