import React, { Component } from 'react'
import OrgTeamDetails from './OrgTeamDetails';
import { Redirect } from 'react-router-dom'
import OrgUserDetails from "./OrgUserDetails";
import ConfirmOrg from "./Confirm"
import SuccessOrg from './Success'
import axios from 'axios';



export class OrgForm extends Component {
    constructor() {
        super()
        this.state = {
            step: 1,
            orgName: '',
            orgLocation: '',
            orgEmail: '',
            orgUserName: '',
            orgPassword: '',
            orgConfirmPassword: '',
            orgCity: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    //next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });

    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handleinput field

    handleChange = input => (e) => {
        this.setState({ [input]: e.target.value });
    }
    handleSubmit(e) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        e.preventDefault()

        axios.post('/api/orgusers', {
            
            orgName: this.state.orgName,
            orgLocation: this.state.orgLocation,
            orgEmail: this.state.orgEmail,
            orgUserName: this.state.orgUserName,
            orgPassword: this.state.orgPassword,
            orgConfirmPassword: this.state.orgConfirmPassword,
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({
                        redirectTo: '/home'
                    })
                    this.sendEmail()
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }


    render() {
        //figureing out which step we are on
        const { step } = this.state;
        const { orgName, orgEmail, orgUserName, orgLocation, orgPassword, orgConfirmPassword } = this.state;
        const values = { orgName, orgEmail, orgUserName, orgLocation, orgPassword, orgConfirmPassword }

        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            switch (step) {
                case 1:
                    return (
                        <OrgTeamDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 2:
                    return (
                        <OrgUserDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 3:
                    return (
                        <ConfirmOrg
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    )
                case 4:
                    return (
                        <SuccessOrg />
                    )

                default:
                    console.log("err")
            }
        }
    }
}

export default OrgForm;