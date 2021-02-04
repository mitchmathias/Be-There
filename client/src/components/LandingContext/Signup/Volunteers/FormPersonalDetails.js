import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import Textfield from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, handleChange } = this.props;
       
        return (
      
            <MuiThemeProvider>
                <form >
                    <h1>Enter Personal Details</h1>
                    <Textfield
                        varient = "contained"
                        id="Enter UserName"
                        label="UserName"
                        onChange={handleChange('username')}
                        defaultValue={values.username}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter a Password"
                        label="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Confrim Password"
                        label="ConfrimPassword"
                        onChange={handleChange('confirmpassword')}
                        defaultValue={values.confirmPassword}
                    />
                    <br />
                    <Button
                        varient="contained"
                        label="Continue"
                        color= "primary"
                        // style={styles.button}
                        onClick={this.back}
                    >Previous</Button>
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


export default FormPersonalDetails;
