import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Modal from '../Modal/Modal';
import CurrentSummary from "./Summaries/CurrentSummary";



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    fontSize: '0.6rem',
  },
}));

export default function CurrentCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showModal, setShowmodal] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleModal = () => {
    setShowmodal(!showModal);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
       avatar={
          <Avatar aria-label="workExperience" className={classes.avatar}
             src="../../static/images/flags/canada.png"
             title="Canada">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Current"
        subheader="August 2019 ... Current"
      />
      <CardContent>
          <Typography variant="subtitle1" component ="h2">
          <strong>Seeking Employment</strong>
          </Typography>
            <Typography variant="subtitle2" color="textSecondary">
            <strong>Core Accomplishments</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="ul">
                <li>Udemy: React (with Hooks, Redux, Router)</li>
                <li>Udemy: CSS - The Complete Guide</li>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                < br />
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" >
              <strong>In-Progress</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="ul">
                <li>Udemy: Server Side Rendering with Next & React</li>
                <li>Udemy: Complete Ruby on Rails Developer</li>
                <li>Udemy: Data Science Course 2020</li>
                <li>Udemy: Calculus 1</li>
                <li>Udemy: Git & GitHub Masterclass</li>
                <li>Udemy: Web Scraping in Node JS</li>
                <li>Udemy: 3 Minute French</li>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                < br />
            </Typography>
          <Typography onClick={handleModal} variant="body2" color="textSecondary" component="p">
                Read More <strong>Here</strong>
            </Typography>
          {/*<button onClick={handleModal}>Read more here</button>*/}
              <Modal
                  show={showModal}
                  modalClosed={handleModal}>
                    <CurrentSummary />
              </Modal>
      </CardContent>
    </Card>
  );
}