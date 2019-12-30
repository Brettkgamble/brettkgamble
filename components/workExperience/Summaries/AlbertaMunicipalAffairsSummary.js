import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const AlbertaMunicipalAffairsSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Alberta Municipal Affairs: Manager Information Technology Architecture & Planning</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                As the Manager of I.T Planning & Architecture I was responsible for I.T strategy which included I.T Governance,
                Portfolio Management (new development & maintenance) and Enterprise Architecture.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Development of I.T Strategic Plan</li>
                <li>Implementation of I.T Governance as a subset of COBIT</li>
                <li>Implementation of SharePoint use Policies and Guidelines</li>
                <li>Member of Ministry Planning Team</li>
                <li>Implementation of Pilot project for Appian Business Process Automation</li>
                <li>Implementation of I.T Project Portfolio Management</li>
                <li>Member of Government Enterprise Architecture Team</li>
            </Typography>
                <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Enterprise Architecture</li>
                <li>Strategic Planning</li>
                <li>I.T Governance</li>
                <li>Portfolio Management</li>
                <li>Vendor Management</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default AlbertaMunicipalAffairsSummary;