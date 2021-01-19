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
import Paper from '@material-ui/core/Paper';
import aboutPhoto from '../assets/images/selfie.jpeg';
import clsx from 'clsx';
import AccordionActions from '@material-ui/core/AccordionActions';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import backgroundImg from '../assets/images/bg.png';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),

    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        color: '#000000',
        textAlign: 'center',

    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
}));
export default function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/* <div className={classes.root}>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <div className={classes.column}>
                            <Typography className={classes.heading}>About Me</Typography>
                        </div>
                        
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div className={classes.column} />
                        <div className={classes.column}>
                                <h3 className="bio" >
                                    After being exposed to basic HTML &amp; CSS in my college graphic design courses, I knew I wanted to learn more.
                                    Post graduation, I enrolled in &amp; completed a Full-Stack Web Development bootcamp.
                            </h3>
                                <h3 className="bio" >
                                    My program inroduced me to and expanded upon some of the industry's leading technologies. I enjoy using what learned to
                                    create clean, efficient sites and applications.
                            </h3>

                        </div>
                        <div className={clsx(classes.column, classes.helper)}>
                        <img className="aboutPhoto" src={aboutPhoto}></img>

                        </div>
                    </AccordionDetails>
                    <Divider />
                  
                </Accordion>
            </div> */}











            {/* Hero unit */}
            <div className="heroContent">
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12} className={classes.heading}>
                            <h2>About Me</h2>
                        </Grid>
                        <Grid item xs={12} sm={7} >
                            <Paper className={classes.paper, "aboutBox"}>
                                <span align="right" className="close"><a href="/">{<CancelIcon />}</a></span>
                                <h3 className="bio" >
                                    After being exposed to basic HTML &amp; CSS in my college graphic design courses, I knew I wanted to learn more.
                                    Post graduation, I enrolled in &amp; completed a Full-Stack Web Development bootcamp.
                            </h3>
                                <h3 className="bio" >
                                    My program inroduced me to and expanded upon some of the industry's leading technologies. I enjoy using what learned to
                                    create clean, efficient sites and applications.
                            </h3>

                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Paper className={classes.paper, "aboutBox"}>
                                <img className="aboutPhoto" src={aboutPhoto}></img>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div className={classes.root}>
                        <Accordion >
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
        </React.Fragment >
    );
};
