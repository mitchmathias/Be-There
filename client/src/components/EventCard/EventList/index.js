import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
    },
    image: {
        width: 300,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));



export function EventList ({children}){
return (
    <ul className="list-group">{children}</ul>
)}
//above creates a list for each li which will be the event cards displayed down feed
export function EventListItem({
    title,
    body,
    organization,
    date,
}) {
    const classes = useStyles();
    return (
        <li className="list-group-item m-2">
             <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                      {title}
                                 </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Hosted by:{organization}
                                </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                       { body }
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                     { date }
                                </Typography>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </li>
    )
}