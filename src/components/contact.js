import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import '../index.css';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
const ContactForm = () => {
    const useStyles = makeStyles((theme) => ({
        icon: {
            fontSize: "large",
            marginLeft: "45%"
            
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
        modal: {
            marginTop: '70px',
    
            
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
    }));
    const classes = useStyles();

    return (
        <React.Fragment>
                    <Card>
      <CardContent>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className="contactColumn">
            <a href="mailto:jess@jesscode.com"><span className={classes.icon}><EmailIcon /></span>
                <h3>Jess@jesscode.com</h3></a>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} className="contactColumn">
            <a href="tel:+1-270-703-6918"><span className={classes.icon}><ContactPhoneIcon /></span>
                <h3>270-703-6918</h3></a>
            </Grid>
        </Grid>
      </CardContent>
      <CardActions>
      <a href="../assets/images/jessica_tillson.pdf" download>
 <Button className="resume" size="small">View Resume</Button></a>
      </CardActions>
    </Card>
                </React.Fragment>
            )
};

export default ContactForm;