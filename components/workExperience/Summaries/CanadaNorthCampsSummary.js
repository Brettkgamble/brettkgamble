import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const CanadaNorthCampsSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Canada North Camps: Manager Transportation & Logistics</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                Responsible for the end to end supply chain and logistics for all Canada North Camps (CNC) operations.<br />
                <br />
            </Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Managed a team of 5 class-1 drivers and several class-3 drivers</li>
                <li>Managed a team of support personnel incl. Mechanics, Admin, and Warehouse staff</li>
                <li>Project Managed the movement of 120 oversized lodges from Suncor facility to a CNC owned Camp</li>
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Project Managed the movement of the Water Treatment Plant 'Borealis' from Suncor to a CNC owned site.</li>
                <li>Implemented a pilot project for the 'Odoo' Inventory Management system</li>
            </Typography>
                <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Project Management</li>
                <li>Team Management</li>
                <li>Coaching & Mentoring</li>
                <li>Staffing</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default CanadaNorthCampsSummary;