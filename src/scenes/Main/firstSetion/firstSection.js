import React from 'react'
import './firstSection.css';
import Illustration from '../../../assets/images/Illustration.png';
import Button from '../../../components/button/Button';
function FirstSection() {
    return (
        <div className="section">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    
                    <p className="grandTitre">
                        Want anything to be easy with MyVPN.
               </p>
                    <p className="titreNiveau2">
                        Provide a network for all your needs with ease and fun using MyVPN discover interesting features from us.
               </p>
               <div class="d-flex justify-content-center d-none d-sm-block d-sm-none d-md-block">
               <Button  text={"Get Started"} />
               </div>
                 
                </div>
                <div className="col-lg-6 col-md-6 d-none d-sm-block d-sm-none d-md-block">
                    <img src={Illustration} className="img" />
                </div>
            </div>
        </div>

    )
}

export default FirstSection
