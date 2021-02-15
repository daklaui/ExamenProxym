import React from 'react'
import Free from "../../assets/images/Free.png";
import './Card.css'
import CheckBox from "../CheckBox/CheckBox";
function Card({ title, price, arrayText,marginTop ,unite}) {
    return (
        <div className="col-lg-4 col-md-2 d-flex justify-content-center">
            <div className="card">
                <img src={Free} className="img_Card" />
                <p className="cardTitle" > {title} </p>
                <div className="checkboxes">
                {arrayText.map(data => (
                    <CheckBox type={'card'} text={data}></CheckBox>
                ))}
                </div>
            
                <p className="priceFree" style={{marginTop:marginTop}} >{price} {title!="Free Plan"?<span className="unite">{" / " + unite}</span>:""}</p>
                <div className="priceBtn">
                    <button className="btnSelect"> Select </button>
                </div>

            </div>

        </div>
    )
}

export default Card
