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
    favs,
    date,
}) {
    const classes = useStyles();
    return (
        <li className="list-group-item">
             <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="/public/images./sky.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Title Of event here{title}
                                 </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {organization}Hosted by:
                                </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                       { body }description of event if needed can be taken out but
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                     { date }and Time
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{favs}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </li>
    )
}