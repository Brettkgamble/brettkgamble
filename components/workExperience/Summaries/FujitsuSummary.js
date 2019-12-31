import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const FujitsuSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Fujitsu Consulting: Applications Portfolio Manager</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                As the Alberta Municipal Affairs Applications Portfolio Manager responsibilities included
                resource management, client consulting, client relationships, service level agreements, delivery estimating,
                planning and scheduling.  Brett also supported the Delivery Manager in ensuring contract compliance and assisted
                in the maintenance of the annual supplementary operating agreement.  Further responsibilities included assisting
                the client to develop a tactical and strategic operating plan, business case preparation and client consulting.
                The entire Delivery and Maintenance team is comprised of approximately 20 employees and contractors.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Management of 15+ Applications Maintenance and Development Staff by preparing resource requests, role descriptions, assignment briefings and career development.</li>
                <li>Efficient management of resources against the baseline budget by preparing resource plans containing current activities and future pipeline work.</li>
                <li>Provide project management, leadership, and direction to the baseline maintenance team.</li>
                <li>Assist where necessary in the preparation of responses to bids (RFP's).</li>
                <li>Responsible for the accurate estimation of out of scope work including project work breakdown structures.</li>
                <li>Assisted in the development of Business Architecture for all business areas within Alberta Municipal Affairs.</li>
                <li>Monitor and develop service level agreements, contract performance (Budget vs Forecast) and application support statistics.</li>
            </Typography>
                <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Applications Portfolio Management</li>
                <li>Project Management</li>
                <li>Business Analysis</li>
                <li>RFP Submission</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default FujitsuSummary;