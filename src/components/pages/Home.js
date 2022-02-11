import {Link} from "react-router-dom";
// import ColorBlock from "../ColorBlock";

function Home(){

    // const list = [
    //     {main: "red"},
    //     {main: "blue"},
    //     {main: "green"}
    // ];

    const red = {
        backgroundColor: 'red',
        margin: '25px',
        height: '100px',
        width: '100px'
    }
    const blue = {
        backgroundColor: 'blue',
        margin: '25px',
        height: '100px',
        width: '100px'
    }
    const green = {
        backgroundColor: 'green',
        margin: '25px',
        height: '100px',
        width: '100px'
    }

    // let colorEles = list.map((obj, idx)=>
    //     <ColorBlock key={idx} main={obj.main}/>
    // )



    return(
        <div>
                <Link to ={"ColorBlock"}>
                    <div style={red}> </div>
                    <div style={blue}> </div>
                    <div style={green}> </div>
                </Link>
            {/*<Link to ={"ColorBlock"}>*/}
            {/*    <div className="blue"> </div>*/}
            {/*</Link>*/}
            {/*<Link to ={"ColorBlock"}>*/}
            {/*    <div className="green"> </div>*/}
            {/*</Link>*/}
        </div>
    )
}

export default Home;