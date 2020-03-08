import React from 'react';
import Link from 'next/link';

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
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styleClasses from './puntMachine.module.css';
import {Icon} from "@material-ui/core";

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
  },
}));

export default function PuntMachine() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ML Race Predictor"
        subheader="ML algorithm for Harness Racing"
      />
      <CardMedia
        className={styleClasses.cardMedia}
        image="/static/images/harness.jpg"
        title="Mchaine Learning predictor for Harness Racing"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Brings together a massive dataset from the Australian Harness Racing
          Industry for all races since 1985.  Uses various ML techniques to predict
          race times for individual horses based on a feature set of more than 50 attributes.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">*/}
        {/*  <FavoriteIcon />*/}
        {/*</IconButton>*/}
        {/*<IconButton aria-label="share">*/}
        {/*  <ShareIcon />*/}
        {/*</IconButton>*/}
        <IconButton aria-label="link" href="https://hrttracker.appspot.com/" target="_blank">
          <LinkIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <strong>Architecture:</strong></Typography>
          <Typography variant="body1" color="textPrimary" component="ul">
            <ul className={styleClasses.cardContentUl}>
              <li>React / Next Frontend</li>
              <li>Python Endpoints served by Google Application Engine</li>
              <li>PostgreSql Database</li>
              <li>Python / Node Cron webcrawlers</li>
              <li>Python ML recommendation engine</li>
              <li>Bokeh for data visualization</li>
            </ul>

          </Typography>
          <Typography paragraph>
            Predicts race time estimates for a particular horse based on previous track experience,
            genetics, winnings, temperature and many other features.
          </Typography>
          <Typography paragraph>
            Primarily a data project to support continuous machine learning this project has its roots
            in several academic papers and thesis.  Based on the harness racing industry in Australia,
            the dataset has more than 90,000 individual races and a dataset of over a million entries.
          </Typography>
          <Typography>
            A work in progress......
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}