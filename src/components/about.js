import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../index.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CancelIcon from '@material-ui/icons/Cancel';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightLight,
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/* Hero unit */}
            <div className="heroContent">

                <Container maxWidth="sm">
                    <span align="left" className="close"><a href="/">{<CancelIcon />}</a></span>
                    <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Jess Tillson
</Typography>
                    <Typography className="bio" variant="h5" align="justify-center" color="textSecondary" paragraph>
                        After being exposed to basic HTML &amp; CSS in my college graphic design courses, I knew I wanted to learn more.
                        Post graduation, I enrolled in &amp; completed a Full-Stack Web Development bootcamp. My bootcamp introduced and expanded upon the most current methods and languages.
</Typography>
                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>A few of the things I've learnd so far...</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="learnedList">

                                <ul className="list">
                                    <li>HTML, CSS, &amp; Git</li>
                                    <li>JavaScript</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>SQL</li>
                                    <li>React</li>
                                    <li>MERN stack</li>
                                    <li>PWA</li>
                                    <li>Bootstrap</li>
                                    <li>API's</li>
                                </ul>

                            </AccordionDetails>
                        </Accordion>

                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};
