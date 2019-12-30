import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const TelusSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Telus Business Process Reengineering Team: Senior Business Analyst</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                As a member of the Business Process Reengineering Team I was a Senior Business Analyst on several projects
                including Project Horizon, Knowledge Management, Pre-qualification Status Interface (a 'quickwins' project),
                and Change of Billing Ownership.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Systems Lead / Architect representing the Business Office Re-engineering team and Project Horizon</li>
                <li>Project Manager – Business Re-engineering Knowledge Management</li>
                <li>Team Lead representing project Horizon and the TELUS Care teams for the National Service Fulfillment process improvement project</li>
                <li>Responsible for gathering and reporting key metrics to support the current versus future state assessment of the Pre-Qualification Status Interface (PSI)</li>
                <li>Provided subject matter expertise to the Process Engineering team regarding test methodologies and Agile Software development for the Change of Business Ownership and Billing Adjustments processes</li>
            </Typography>
                <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Business Analysis</li>
                <li>Process Reengineering</li>
                <li>Project Management</li>
                <li>Telecommunications</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default TelusSummary;