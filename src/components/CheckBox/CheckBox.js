import React from 'react'
import Checkbox from '../../assets/images/Checkbox.png';
import Vector1 from '../../assets/images/Vector1.png';
import './CheckBox.css';
function CheckBox({ text, type}) {
    if(type=="card")
    {
        return (
      
            <div className="row">
                <div className="col-1 ">
                   <img src={Vector1} />
                </div>
                <div className="col-10">
                    <p className="text">
                        {text}
                    </p>
                </div>
            </div>
        )
    }
    else
    {
        return (
      
            <div className="row maringRow">
                <div className="col-1 ">
                    <img src={Checkbox} />
                </div>
                <div className="col-10">
                    <p className="text">
                        {text}
                    </p>
                </div>
            </div>
        )
    }
   
}

export default CheckBox
