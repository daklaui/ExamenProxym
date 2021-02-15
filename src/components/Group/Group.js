import React from 'react'
import './Group.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faServer,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
function Group({textNumber,text}) {
    return (
        <div className="row group  d-flex justify-content-center" >
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center icon-bg">
                <FontAwesomeIcon className="icon" color="red" icon={text=="Users"?faUser:text=="Servers"?faServer:faMapMarkerAlt}/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-number">{textNumber}</div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text">{text}</div>
                </div>
            </div>

        </div>
    )
}

export default Group
