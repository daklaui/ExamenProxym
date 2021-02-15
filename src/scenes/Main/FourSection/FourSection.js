import React from 'react'
import Card from '../../../components/Card/Card';
import './FourSection.css';

function FourSection() {
    return (
        <div className="QSection">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <p className="text_niveau_h1 ">Choose Your Plan</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <p className="text_niveau_h2 ">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>


            </div>
            <div className="row">
                <Card title={"Free Plan"} price={"Free"}  marginTop={"130px"}  arrayText={["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices"]} />
                <Card title={"Standard Plan"} price={"$9"} marginTop={"80px"} unite={"mo"}  arrayText={["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices","Connect Anyware"]} />
                <Card title={"Premium Plan"} price={"$12"} marginTop={"40px"} unite={"mo"}  arrayText={["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices","Connect Anyware","Get New Features"]} />
            </div>
        </div>
    )
}

export default FourSection
