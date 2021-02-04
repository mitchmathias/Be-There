import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import Textfield from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';




export class OrgUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
       
        return (
            <MuiThemeProvider>
                <form >
                    <h1> Enter Company Details</h1>
                    <Textfield
                        varient = "contained"
                        id="Enter the Organizations Name"
                        label="Organization Name"
                        onChange={handleChange('orgName')}
                        defaultValue={values.orgName}
                       
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter User Name"
                        label="User Name"
                        onChange={handleChange('orgUserName')}
                        defaultValue={values.orgUserName}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter your organization email"
                        label="Org Email"
                        onChange={handleChange('orgEmail')}
                        defaultValue={values.orgEmail}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter your Location"
                        label="Org Location"
                        onChange={handleChange('orgLocation')}
                        defaultValue={values.orgLocation}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Enter your Password"
                        label="Password"
                        onChange={handleChange('orgPassword')}
                        defaultValue={values.orgPassword}
                    />
                    <br />
                    <Textfield
                      varient = "contained"
                        id="Confirm Password"
                        label="Confirm Password"
                        onChange={handleChange('orgConfirmPassword')}
                        defaultValue={values.orgConfirmPassword}
                    />
                    <Button
                        varient="contained"
                        label="Continue"
                        color= "primary"
                        onClick={this.continue}
                    >Continue</Button>
                </form>
            </MuiThemeProvider>
        )
    }
}

export default OrgUserDetails;
