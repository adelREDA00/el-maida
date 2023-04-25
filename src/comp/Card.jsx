import React from 'react'
import cowImg from '../assets/milk.svg'

const Card = (props) => {
    return (
        <div onClick={props.onClick} data-id={props.data.id} className="card">
            <img src={props.data.img} alt="" />
            <h4> {props.data.name} </h4>
            <p>{props.data.des} </p>
        </div>
    )
}

export default Card