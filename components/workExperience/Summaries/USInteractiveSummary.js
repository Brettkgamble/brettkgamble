import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const USInteractiveSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">US Interactive: Business Analyst</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                A key resource on a multi-vendor team implementing improved CRM systems for Vodafone.
                Time was spent training in Mumbai, India and then deployed to Dusseldorf, Germany
                where Vodafone was located.  The team consisted of several non-english speaking teams
                including staff from Germany, the Netherlands, Israel, and South East Asia.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Defined systems integration between the the CRM and Billing System using a proprietary hook.</li>
                <li>Lived for 6 months in Mumbai, India and then several months in Dusseldorf, Germany</li>
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

export default USInteractiveSummary;