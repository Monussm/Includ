import React from "react";
const Crowd=(props)=>{
    return <>
    
    <div className="col-md-4 col-sm-6">
        <div className="row">
        <i className="fa-solid fa-trophy"></i>
        </div>
        <div className="row">
            <p>{props.among}</p>
        </div>
        <div className="row">
            <p>{props.boring}</p>
        </div>
    </div>
    <div className="col-md-4 col-sm-6">
        <div className="row">
        <i className="fa-solid fa-pen"></i>
        </div>
        <div className="row">
            <p>{props.direct}</p>
        </div>
        <div className="row">
            <p>{props.shine}</p>
        </div>
    </div>
    <div className="col-md-4 col-sm-6">
        <div className="row">
        <i className="fa-solid fa-graduation-cap"></i>
        </div>
        <div className="row">
            <p>{props.nation}</p>
        </div>
        <div className="row">
            <p>{props.top}</p>
        </div>
    </div>
    
    
    
    
    </>





}
export default Crowd;