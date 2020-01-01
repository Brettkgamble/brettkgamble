import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const SavilleSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Saville Systems: Implementation Analyst</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                Re-located as a new hire to Saville Systems located in Edmonton, Canada.  Responsible for
                the implementation of the Saville Systems AS400 billing system for a client located in
                Evansville, Indiana, United States.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Implementation of an AS400 based billing system for a startup Telecoms company</li>
                <br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Business Analysis</li>
                <li>Systems Analysis</li>
                <li>Billing Systems Subject Matter Expertise</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default SavilleSummary;