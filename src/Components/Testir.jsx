import React from "react";
const Testir=(props)=>{
    return <>
    <h3 className="text-center mt-5">{props.monial}</h3>
    <p className="text-center">{props.our}</p>
    <div className="col-md-4">
        <div className="row bird">
         <p>{props.This}</p>
        <div className="row">
            <div className="col-md-6">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6">
                <p>{props.sig}</p>
            </div>
        <div className="row">
            <p>{props.fine}</p>
        </div>
        </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="row bird">
         <p>{props.Mahad}</p>
        <div className="row">
            <div className="col-md-6 ">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6">
                <p>{props.sig}</p>
            </div>
        <div className="row">
            <p >{props.fine}</p>
        </div>
        </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="row bird">
         <p>{props.Really}</p>
        <div className="row">
            <div className="col-md-6">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6">
                <p>{props.sig}</p>
            </div>
        <div className="row">
            <p>{props.fine}</p>
        </div>
        </div>
        </div>
    </div>
    
    
    
    
    </>




}
export default Testir;