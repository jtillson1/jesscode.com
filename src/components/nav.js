import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Contact from './contact';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import { validateEmail } from '../utils/helpers';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
export default function Nav() {
  const classes = useStyles();
  //OLD NAV
  // const [currentPage, setCurrentPage] = useState('Gallery');
  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'Contact':
  //       return <Contact />;
  //     case 'About':
  //       return <About />;
  //   }
  // };
  //about me accordion handling
  const AccordionDetails = withStyles((theme) => ({
    root: {
    },
  }))(MuiAccordionDetails);
  const [expanded, setExpanded] = React.useState('gallery');
  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };
  return (
    <React.Fragment>
      <Accordion expanded={expanded === 'landingPage'} onChange={handleAccordion('landingPage')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        ><h3 className="accHeader">ABOUT &amp; CONTACT</h3>
        </AccordionSummary>
        <AccordionDetails className="aboutDetails">
          <Grid container className="aboutContact"xs={12}>
            <Grid item>
              <Grid item xs={12} sm={7} md={5} lg={4} className="aboutBox">
                <h3 className="bio" >
                  After being exposed to basic HTML &amp; CSS in my college graphic design courses, I knew I wanted to learn more.
                  Post graduation, I enrolled in &amp; completed a Full-Stack Web Development bootcamp.
                            </h3>
                <h3 className="bio" >
                  My program inroduced me to, and expanded upon, some of the industry's leading technologies. I enjoy using what I learned to
                  create clean, efficient sites and applications.
                            </h3>
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
              </Grid>
              <Grid item item xs={12} sm={7} md={5} lg={4} className="aboutBox">
                <Contact />
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <CssBaseline />
      {/* {checkLogin()} */}
      {/* <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('About') }}>
              About
              </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => { setCurrentPage('Contact') }}>
              Contact
              </Link>
          </nav>
        </Toolbar>
      </AppBar> */}
      
    </React.Fragment>
  );
}