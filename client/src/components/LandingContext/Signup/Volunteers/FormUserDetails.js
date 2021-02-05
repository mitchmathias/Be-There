import React, { Component } from 'react'
// import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card'


export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        //process form
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;

        return (
            // <MuiThemeProvider>
            <form className="justify-content-center mb-3">
                <h4>User Details</h4>
                <div className="form-group">
                    <TextField
                        varient="outlined"
                        id="outlined-search"
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}

                    />
                </div>
                <div className="form-group">
                    <TextField
                        varient="contained"
                        id="Enter last Name"
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        varient="contained"
                        id="Enter email"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        varient="contained"
                        id="Enter your city"
                        label="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                </div>
                <div className="form-group">
                    <Button
                        varient="contained"
                        label="Continue"
                        color="primary"
                        // style={styles.button}
                        onClick={this.continue} >

                        Continue </Button>
                </div>

            </form>

            // </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
