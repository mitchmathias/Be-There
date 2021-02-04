import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";





export class Success extends Component {
    continue = (e) => {
        e.preventDefault();
        //process form
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {


        return (
            <MuiThemeProvider>
                    <h1> Thank You for Joining</h1>   
               
            </MuiThemeProvider>
        )
    }
}

export default Success
