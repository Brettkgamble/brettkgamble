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
import Summary from "./Summaries/summary";


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

export default function Crossfit5413Card() {
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
        // avatar={
        //   <Avatar aria-label="brief" className={classes.avatar}>
        //     Forging <br /> &nbsp; Elite <br /> Fitness
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="CrossFit 5413"
        subheader="September 2016 to August 2019"
      />
      {/*<CardMedia*/}
      {/*  className={classes.media}*/}
      {/*  image="/static/images/workExperience/Compass_rose_vector_v5.png"*/}
      {/*  title="Paella dish"*/}
      {/*/>*/}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <h2>Core Accomplishments</h2>
          <ul>
            <li>0 to 150 members in 2 years</li>
            <li>0 to $250k in revenue in 2 years</li>
            <li>Redeveloped building to comply with local safety codes</li>
          </ul>
          <h4>Professional Accomplishments</h4>
          <ul>
            <li>Founded CrossFit 5413 as the largest CrossFit facility in Edmonton</li>
            <li>Integrated 10 professional fitness trainers and coaches</li>
            <li>Built in-house welness services (massage, nutrition)</li>
          </ul>

          <button onClick={handleModal}>Read more here</button>

        </Typography>
        <Modal show={showModal} modalClosed={handleModal}>
              <Summary />
        </Modal>
      </CardContent>
    </Card>
  );
}