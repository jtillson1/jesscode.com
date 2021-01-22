import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import WebGallery from './webGallery';
import GraphicGallery from './graphicGallery';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
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

export default function Gallery() {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState('WebGallery');

    const renderPage = () => {
        switch (currentPage) {
            case 'WebGallery':
                return <WebGallery />;
            case 'GraphicGallery':
                return <GraphicGallery />;
        }
    };
  
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : true);
    };
    return (
<React.Fragment>
            <div className="jumbotron"></div>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary" className="webBtn" onClick={() => { setCurrentPage('WebGallery') }}>
                            Web Dev
</Button>
                    </Grid>
                    <Grid item>
                        <Button className="graphicsBtn" onClick={() => { setCurrentPage('GraphicGallery') }} >
                            Graphic Design
</Button>
                    </Grid>
                </Grid>
            </div>
            {renderPage()}
        </React.Fragment>
    )
};