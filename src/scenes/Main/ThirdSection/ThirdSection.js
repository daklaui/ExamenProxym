import React from 'react'
import './ThirdSection.css';
import Illustration2 from '../../../assets/images/Illustration2.png';
import CheckBox from '../../../components/CheckBox/CheckBox';
function ThirdSection() {
    return (
        <div className="Section03">
            <div className="row justify-content-center align-items-center">
            <div className="col-lg-7 col-md-7 d-none d-sm-block d-sm-none d-md-block">
                  <img src={Illustration2} className="img_section"/>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-5">
                       <div className="col-12">
                           <p className="text_h1">We Provide Many Features You Can Use</p>
                       </div>
                       <div className="col-12">
                           <p className="text_h2"> You can explore the features that we provide with fun and have their own functions each feature. </p>
                       </div>
                       <div className="col-12">
                       <CheckBox text="Powerfull online protection."/>
                       <CheckBox text="Internet without borders."/>
                       <CheckBox text="Supercharged VPN"/>
                       <CheckBox text="No specific time limits."/>
                       </div>

                </div>
            </div>
        </div>
    )
}

export default ThirdSection
