import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardHeader from '@material-ui/core/CardHeader';
import image1 from '../assets/images/web/0.png';
import image2 from '../assets/images/web/1.png';
import image3 from '../assets/images/web/2.png';
import image4 from '../assets/images/web/3.png';
import image5 from '../assets/images/web/4.png';
import image6 from '../assets/images/web/5.png';
import image7 from '../assets/images/web/6.png';
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
        boxShadow: '0px 0px 20px #b3b3b3',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        borderTop: '5px solid #b3b3b3',
        flexGrow: 1,
    },
    Button: {
        border: 'ipx solid #000000'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function WebGallery() {
    const classes = useStyles();

    const webProjects = [

        {
            name: 'Food Festival',
            category: 'Web',
            desctiption: 'A react PWA created for tracking events at a food festival',
            github: 'https://github.com/jtillson1/food-festival',
            deploy: 'https://jtillson1.github.io/food-festival',
            image: image1
        },
        {
            name: 'Note Taker',
            category: 'Web',
            github: 'https://jtillson1.github.io/note-taker',
            deploy: 'https://vu-note-taker.herokuapp.com/',
            image: image2
        },
        {
            name: 'Run Buddy',
            category: 'Web',
            github: 'https://github.com/jtillson1/run-buddy',
            deploy: 'https://jtillson1.github.io/run-buddy',
            image: image3
        },
        {
            name: 'SpeakEasy',
            category: 'Web',
            github: 'https://github.com/adamkeyser45/thespeakeasy',
            deploy: 'https://fierce-forest-64673.herokuapp.com/',
            image: image4
        },
        {
            name: 'Taskinator',
            category: 'Web',
            github: 'https://github.com/jtillson1/Taskinator',
            deploy: 'https://jtillson1.github.io/Taskinator/',
            image: image5
        },
        {
            name: 'WeatherMan',
            category: 'Web',
            github: 'https://github.com/jtillson1/weatherman',
            deploy: 'https://jtillson1.github.io/weatherman/',
            image: image6
        },
        {
            name: 'javadript',
            category: 'Web',
            github: 'https://github.com/adamkeyser45/javadript',
            deploy: 'https://gentle-eyrie-08173.herokuapp.com/',
            image: image7
        },
    ];


    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {webProjects.map((project) => (
                            <Grid item key={project} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={project.image}
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
                                        <Button size="small">
                                            <Link color="inherit" className="webButton" href={project.github}>
                                                Github Repo
                                             </Link>
                                        </Button>
                                        <Button size="small"  >
                                            <Link color="inherit" className="webButton" href={project.deploy}>
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
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
        </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}