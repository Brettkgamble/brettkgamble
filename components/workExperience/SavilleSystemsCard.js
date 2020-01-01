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
import SavilleSummary from "./Summaries/SavilleSummary";



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

export default function SavilleSystemsCard() {
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
        title="Saville Systems / ADC"
        subheader="September 1998 - August 1999"
      />
      <CardContent>
          <Typography variant="subtitle1" component ="h2">
          <strong>Implementation Analyst</strong>
          </Typography>
            <Typography variant="subtitle2" color="textSecondary">
            <strong>Core Accomplishments</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="ul">
                <li>Implementation of an AS400 Billing System for Sigecom LLC United States</li>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                < br />
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" >
              <strong>Professional Accomplishments</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="ul">
                <li>Implementation Analysis</li>
                <li>Business Analysis</li>
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
                    <SavilleSummary />
              </Modal>
      </CardContent>
    </Card>
  );
}