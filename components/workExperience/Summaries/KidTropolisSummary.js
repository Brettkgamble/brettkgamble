import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const KidTropolisSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">KidTropolis: General Manager</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                Responsible and accountable for the management of both the corporate and operational facilities.
                Mandate included a strategic focus on customer service, developing an employee culture and profitability.
                Management of Human Resources, Accounting, Sales & Marketing, Operations and Information Technology. Responsible
                for a dynamic workforce of more than 50 staff.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Implementation of an organizational structure accountable for the delivery and execution of the strategic mandate.</li>
                <li>Design and implementation of the organizations information technology architecture.</li>
                <li>Design and delivery of several strategies to deliver exceptional customer service and educational programming within the facility.</li>
                <li>Implementation of organizational processes and business process management for human resources, operations, accounting and finance.</li>
                <li>Implementation of cash-flow, balance sheet and profit & loss reporting to the business owners.</li>
                <li>Development of protocols to establish and maintain contact with organizational sponsors and partners</li>
                <li>Deliver against contractual obligations to partners and sponsors.</li>
            </Typography>
                <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>General Management</li>
                <li>Team Building</li>
                <li>Startup - Planning & Execution</li>
                <li>Prioritization in a fast moving environment</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default KidTropolisSummary;