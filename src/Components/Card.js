import React from "react";
import star from '../star.jpg'
export default function Card(props){
    return(
        <div className="card">
            <img src = {props.item.img} className="card-image" alt="place"></img>
            <div className="card-stats">
                <span>{props.item.loc} </span>
                    
                    <img src={star} className='star' alt="star"></img>
                    <span> {props.item.rating}</span>
                    
            </div>
            <div className="loc-bio">
                <p><b>{props.item.price}</b> night </p>
            </div>
        </div>
    )
}