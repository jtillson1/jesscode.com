import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../index.css';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
const useStyles = makeStyles((theme) => ({
 
    footer: {
        backgroundColor: "#3c3c3c",
        paddingTop:"2%",
        paddingBottom: "2%" 
        
    },
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container >
                <Grid className="footCol" xs={6} sm={3} >
                  <a href="https://www.instagram.com/jess_tillson/?hl=en"><InstagramIcon style={{ fontSize: 60 }}/></a>
                  </Grid>
                  <Grid className="footCol" xs={6} sm={3} >
                  <a href="https://www.linkedin.com/in/jessica-tillson-149944139/"><LinkedInIcon style={{ fontSize: 60 }}/></a>
                </Grid>
                <Grid className="footCol" xs={6} sm={3} >
                <a href="mailto:jess@jesscode.com"><EmailIcon style={{ fontSize: 60 }}/></a>
                </Grid>
                <Grid className="footCol" xs={6} sm={3} >
                <a href="tel:+1-270-703-6918"><CallRoundedIcon style={{ fontSize: 60 }} /></a>
                </Grid>
                <Grid className="footCol" xs={12} >
                    &copy; JessCode.Com
                </Grid>

               
            </Grid>
    </footer>
    )


};
