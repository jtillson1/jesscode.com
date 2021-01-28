import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardHeader from '@material-ui/core/CardHeader';
import Nav from './nav';
import '../index.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function GraphicGallery() {
    const classes = useStyles();


    const graphicprojects = [

        {
            name: '1',
            category: 'Web',
            desctiption: 'A react PWA created for tracking events at a food festival',
            github: 'https://github.com/jtillson1/food-festival',
            deploy: 'https://jtillson1.github.io/food-festival'
        },
        {
            name: '2',
            category: 'Web',
            github: 'https://jtillson1.github.io/note-taker',
            deploy: 'https://vu-note-taker.herokuapp.com/'
        },
        {
            name: '3',
            category: 'Web',
            github: 'https://github.com/jtillson1/run-buddy',
            deploy: 'https://jtillson1.github.io/run-buddy'
        },
        {
            name: '4',
            category: 'Web',
            github: 'https://github.com/adamkeyser45/thespeakeasy',
            deploy: 'https://fierce-forest-64673.herokuapp.com/'
        },
        {
            name: '5',
            category: 'Web',
            github: 'https://github.com/jtillson1/Taskinator',
            deploy: 'https://jtillson1.github.io/Taskinator/'
        },
        {
            name: '6',
            category: 'Web',
            github: 'https://github.com/jtillson1/weatherman',
            deploy: 'https://jtillson1.github.io/weatherman/'
        },
        {
            name: '7',
            category: 'Web',
            github: 'https://github.com/adamkeyser45/javadript',
            deploy: 'https://gentle-eyrie-08173.herokuapp.com/'
        },
    ];
     
    return (
        <React.Fragment>
            <CssBaseline />
           
            <main>
             


                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {graphicprojects.map((project) => (
                            <Grid item key={project} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <CardHeader
                                            title={project.name}
                                            subheader={project.category}
                                            titleTypographyProps={{ align: 'center' }}
                                            subheaderTypographyProps={{ align: 'center' }}
                                        />
                                        <Typography>
                                            {project.desctiption}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <Link color="inherit" href={project.github}>
                                                Github Repo
                                             </Link>
                                        </Button>
                                        <Button size="small" color="primary">
                                            <Link color="inherit" href={project.deploy}>
                                                Live Deploy
                                             </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        
            {/* Footer */}
            
            {/* End footer */}
        </React.Fragment>
    );
}