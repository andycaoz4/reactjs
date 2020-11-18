import React, { Component } from 'react';
import Stagger from 'react-css-stagger';

import '../../css/bootstrap.css';
import '../../css/main.css';


class Main extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: ''
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        })
    }

    render() {
        const { currentUserEmail, currentUserName } = this.state;

        return (
            <div className="row zpy-34">
                <div className="top-panel col-12 zp-44">
                    <h1 className="zmb-0">Welcome <br className="d-block d-md-none"/>{ currentUserName }</h1>
                    <p>Email: { currentUserEmail }</p>
                    <p>You have reached the authorized area of the portal.</p>
                </div>
                <div className="col-12 mx-auto zpy-34">
                    <Stagger transition="fadeIn" delay={200} className="row text-center vertical-center">
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box1" href="https://leplb0540.upoint.alight.com/web/accenture/home" target="_blank" rel="noopener noreferrer">Benefits Portal</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box2" href="https://myte.accenture.com/" target="_blank" rel="noopener noreferrer">Timesheets & Expenses</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box3" href="https://myemail.accenture.com/" target="_blank" rel="noopener noreferrer">Email</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box8" href="https://policies.accenture.com/policy/0033?expand=true#US" target="_blank" rel="noopener noreferrer">US Holidays</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box4" href="https://w2.accenture.com/" target="_blank" rel="noopener noreferrer">W2 & Tax Documents</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box7" href="https://myearnings.accenture.com/EarningStatement/Default.aspx" target="_blank" rel="noopener noreferrer">Earnings & Paystubs</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box5" href="https://myholdings.accenture.com/Main/Default.aspx" target="_blank" rel="noopener noreferrer">ESPP</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center mx-auto zmb-24 zpx-14">
                                <div className="row">
                                    <a className="col-10 mx-auto box-link box6" href="https://leplb0540.upoint.alight.com/web/accenture/savings-summary?linkId=DC_PRTL_SVNGS_SMRY_LND_NAV&technicalNameForLink=DC_PRTL_SVNGS_SMRY_LND_NAV&userFriendlyNameForLink=Savings%20Landing%20Page%20on%20UPoint&domain=Ben-DC&baseClientIndicator=Base&ref=e3dfafbc_c764_43e9_bbe0_0a226b6fb352sptr95c4769d_0b10_4520_9f27_12e9dc965867&nav_item=e3dfafbc_c764_43e9_bbe0_0a226b6fb352sptr95c4769d_0b10_4520_9f27_12e9dc965867" target="_blank" rel="noopener noreferrer">401K & Retirement</a>
                                </div>
                            </div>
                        </Stagger>
                </div>
            </div>
            
        );
    }
}

export default Main;