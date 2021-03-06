import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText } from "@material-ui/core";





export class Confirm extends Component {
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
        const { values: { firstName, lastName, email, city, username } } = this.props


        return (
            // <MuiThemeProvider>
                <form >
                    <h4> Confirm Info</h4>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="First Name: "
                                secondary={firstName} 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Last Name: "
                                secondary={lastName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Email: "
                                secondary={email}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="User name: "
                                secondary={username}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="City: "
                                secondary={city}
                            />
                        </ListItem>
                    </List>
                    <br />
                    <Button
                        varient="contained"
                        label="Continue"
                        color="primary"
                        // style={styles.button}
                        onClick={this.back}
                    >Previous</Button>
                    <Button
                        varient="contained"
                        label="Confirm & Continue"
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    >Submit</Button>
                   

                </form>
            // </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;
