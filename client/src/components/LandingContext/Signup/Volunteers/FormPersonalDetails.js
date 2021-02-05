import React, { Component } from 'react'
// import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
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
      
            // <MuiThemeProvider>
            <>
                    <h4>Personal Details</h4>
                
                    <div className="form-group">
                    <Textfield
                        varient = "outlined"
                        id="outlined-search"
                        label="Username"
                        onChange={handleChange('username')}
                        defaultValue={values.username}
                    />
                    </div>
                    <div className="form-group">
                    <Textfield
                      varient = "contained"
                        id="Enter a Password"
                        label="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    />
                    </div>
                    <div className="form-group">
                    <Textfield
                      varient = "contained"
                        id="Confrim Password"
                        label="Confrim Password"
                        onChange={handleChange('confirmpassword')}
                        defaultValue={values.confirmPassword}
                    />
                    </div>
                    <div className="form-group">
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
                    </div>
                
                </>
            // </MuiThemeProvider>
        )
    }
}


export default FormPersonalDetails;
