import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const OrangeSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Orange Telecommunications: Business Analyst</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                Worked on various small projects as a Business Analyst at the Bristol Campus in the United Kingdom.
                Developed a method for training 15,000 customer services representatives in emerging technology
                using a 'hive' train the trainer concept.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Developed a proposal for a center of excellence within Customer Services to develop and launch products, technology and process using an iterative ('hive') method.</li>
                <li>Defined and identified various system based product rules so that a common vocabulary could be used to communicate with customers, vendors and staff.</li>
                <li>Represented Customer Service and Billing on the PeopleSoft proof of concept team.</li>
                <li>Delivered a current versus desired state process document that outlined critical Use Cases for Customer Services for both a call center and external High Street locations.</li>
                <br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Business Analysis</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default OrangeSummary;