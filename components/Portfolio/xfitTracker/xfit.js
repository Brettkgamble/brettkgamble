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
import styleClasses from './xfit.module.css';
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

export default function Xfit() {
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
        title="CrossFit Growth Tracker"
        subheader="Affiliate Stats for CrossFit and Blog"
      />
      <CardMedia
        className={styleClasses.cardMedia}
        image="/static/images/Fraser.jpg"
        title="CrossFit Growth Tracker"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Ever wanted to know what it takes to own and operate a CrossFit Affiliate?
          Get the low-down on ownership and the business model here.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">*/}
        {/*  <FavoriteIcon />*/}
        {/*</IconButton>*/}
        {/*<IconButton aria-label="share">*/}
        {/*  <ShareIcon />*/}
        {/*</IconButton>*/}
        <IconButton aria-label="link" href="https://affiliatetracker.appspot.com/" target="_blank">
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
            </ul>

          </Typography>
          <Typography paragraph>
            DealYeti assists used car purchasers by providing real time data to support the decision
            making process when assessing a used car.
          </Typography>
          <Typography paragraph>
            Data is sourced using webcrawlers, which are then parsed, cleaned and stored in a PostgreSql
            database.  The React/Next frontend presents users with a simple but sophisticated search
            method, that presents data in a highly visual and informative format.  Machine learning is
            used to provide predictions of pricing trends, vehicle value. Standard statistical
            analysis is used to visualize information such as vehicle age, price, odometer readings,
            size of market / availability.
          </Typography>
          <Typography>
            The data is also valuable to dealerships in the form of competitive statistical analysis which
            can assist the dealership to price competitively and to understand market share.  In addition,
            the application works as a lead-generator for the dealership, or individual sales consultant who
            is looking for active, pre-screened leads.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}