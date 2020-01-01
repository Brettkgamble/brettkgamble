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
import OptusSummary from "./Summaries/OptusSummary";



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

export default function OptusCard() {
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
             src="../../static/images/flags/australia.png"
             title="Canada">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Optus Telecommunications"
        subheader="June 1993 - August 1998"
      />
      <CardContent>
          <Typography variant="subtitle1" component ="h2">
          <strong>Various Analysis and Engineering Roles</strong>
          </Typography>
            <Typography variant="subtitle2" color="textSecondary">
            <strong>Core Accomplishments</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="ul">
                <li>Successful management of high value Service Provider Accounts - $6oom Annually</li>
                <li>Identification and analysis of Industry wide billing issues ("Baby Accounts")</li>
                <li>Development of Technical Audit Process for Central Offices</li>
                <li>Network Translations for Nortel DMS switching equipment</li>
                <li>Network Translations for Nortel ESN switching Equipment</li>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                < br />
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" >
              <strong>Professional Accomplishments</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="ul">
                <li>Successful transition from Engineering to Audit</li>
                <li>Developed inhouse systm to manage and report on billing issues</li>
                <li>Achieved world best practices for Service Provider Management</li>
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
                    <OptusSummary />
              </Modal>
      </CardContent>
    </Card>
  );
}