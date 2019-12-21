import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const CrossFit5413Summary = () => (

    <Paper >
        <CardContent>
          <Typography paragraph variant="h5" color="textPrimary">CrossFit 5413: Owner and Founder</Typography>
          <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
          <Typography paragraph>
            As the owner I was accountable for the initial funding and build-out of the 12,500
            square foot facility as well as all of the stages in developing a client base.  Significant
            obstacles were overcome including the meeting of city safety codes that were not originally
            funded and business partnership issues.
          </Typography>
          <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
           <Typography variant="body2" color="textPrimary" component="ul">
                <li>0 to 150 members in 2 years</li>
                <li>0 to $250k in revenue in 2 years</li>
                <li>Redeveloped building to comply with local safety codes</li>
                <li>Coached up to 35 1 hour classes per week while managing a fast growing business</li>
                <li>Successfully hosted 2 Festivus games events with up to 120 Athletes</li>
            </Typography>
            <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
           <Typography variant="body2" color="textPrimary" component="ul">
                <li>Business Planning</li>
                <li>Fund Raising - Banks, Entrepreneurial Capital</li>
                <li>Marketing & Sales</li>
                <li>Customer Service</li>
                <li>Coaching & Mentoring</li>
                <li>Public Speaking</li>
                <li>Team Building</li>
                <li>Staffing</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default CrossFit5413Summary;