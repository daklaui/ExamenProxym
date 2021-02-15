import React from 'react'
import Button from '../../../components/button/Button';

import './FiveSection.css';

function FiveSection() {
    return (
        <div className="CSection">
            <div className="row">
                <div className="col-6">
                    <div className="float-left">
                    <p className="col-12 text1">Subscribe Now for Get Special Features!</p>
                    <p className="col-12 text2">Let's subscribe with us and find the fun.</p>
                    </div>
                   
                </div>
                <div className="col-6">
                    <div className="float-right">
                    <Button  text={"Subscribe Now"}/>
                    </div>
             
                    </div>
            </div>
        </div>
    )
}

export default FiveSection
