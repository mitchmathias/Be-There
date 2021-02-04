import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import Textfield from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';




export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        //process form
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
       
        return (
            <MuiThemeProvider>
                <form >
                    <h1> Enter User Details</h1>
                    <Textfield
                        varient = "contained"
                        id="Enter first Name"
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                       
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter last Name"
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter email"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter your city"
                        label="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <Button
                        varient="contained"
                        label="Continue"
                        color= "primary"
                        // style={styles.button}
                        onClick={this.continue}
                    >Continue</Button>

                </form>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
