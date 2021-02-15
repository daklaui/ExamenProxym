import React from 'react'
import Group from '../../../components/Group/Group';
import './SecondSection.css';
function SecondSection() {
    return (
        <div className="section02">
            <div className="row largeScreen_cards">
                <div className="col-3">
                    <Group text={"Users"} textNumber={"90+"} />
                </div>
                <div className="col-1">
                    <svg width="3" height="129" viewBox="0 0 3 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.76257V127.336" stroke="#EEEFF2" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="col-3">
                    <Group text={"Locations"} textNumber={"30+"} />
                </div>
                <div className="col-1">
                    <svg width="3" height="129" viewBox="0 0 3 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.76257V127.336" stroke="#EEEFF2" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="col-3">
                    <Group text={"Servers"} textNumber={"50+"}/>
                </div>


            </div>

            <div className="row mobile_cards">
                <div className="col-xs-12 col-sm-12 d-flex justify-content-center">
                <Group text={"Users"} textNumber={"90+"} />
                </div>
               
                <div className="col-xs-12 col-sm-12 d-flex justify-content-center">
                <Group text={"Locations"} textNumber={"30+"} />
                </div>
               
                <div className="col-xs-12 col-sm-12 d-flex justify-content-center">
                <Group text={"Servers"} textNumber={"50+"}/>
                </div>


            </div>
        </div>
    )
}

export default SecondSection
