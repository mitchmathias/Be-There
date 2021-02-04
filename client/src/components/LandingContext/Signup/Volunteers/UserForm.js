import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import { Redirect } from 'react-router-dom'
import FormUserDetails from "./FormUserDetails";
import Confirm from "./Confirm"
import Success from './Success'
import axios from 'axios';



export class UserForm extends Component {
    constructor() {
        super()
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            city: '',
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
    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        event.preventDefault()

        axios.post('/api/users', {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city
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
        const { firstName, lastName, email, username, city, password, confirmPassword } = this.state;
        const values = { firstName, lastName, email, username, city, password, confirmPassword }

        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            switch (step) {
                case 1:
                    return (
                        <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 2:
                    return (
                        <FormPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 3:
                    return (
                        <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    )
                case 4:
                    return (
                        <Success />
                    )

                default:
                    console.log("err")
            }
        }
    }
}

export default UserForm;