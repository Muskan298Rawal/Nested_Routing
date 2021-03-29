import React from 'react'
import { useHistory } from 'react-router-dom';
import "../App.css";

function Child(props) {
    let history = useHistory();
    const myobj = props.location.state;
    return (
        <div className="child">
            <h4>id : {myobj.id}</h4>
            <h4>title : {myobj.title}</h4>
            <h4>uid : {myobj.uid}</h4>
            <h4>matches : {myobj.matches}</h4>
            <h4>rank : {myobj.rank}</h4>
           <button className="btn" onClick={() => history.push("/")}>Back</button>
        </div>
    )
}

export default Child
