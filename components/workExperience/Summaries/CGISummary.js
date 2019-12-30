import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const CGISummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">CGI: Team Lead & Business Analyst</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                An aggressive 3 month project to develop and implement an online Electronic Disposition System for
                Sustainable Resources Development.  This was an agile project (very new methodology at the time) that
                also implemented experimental technology to upload imaging and supporting documents for resource
                exploration and automatically prepare and print documentation bundles for manual review processes.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Prepare and obtain Ministerial approval for the project</li>
                <li>Development from scratch of a JAVA based web portal on time, budget and schedule (49 days)</li>
                <li>Use of Agile methodology for project delivery</li>
                <li>Continual project reporting using iterative methods</li>
                <li>Risk Management.  In particular the management of the introduction of new technologies to the department
                    (including the use of Crystal Reports on UNIX and the automated print processing of Microsoft documents from a
                    UNIX platform).  Further to this, another risk successfully managed included the Agile/Iterative approach
                    which had never been undertaken by CGI within Edmonton.</li>
            </Typography>
                <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Business Analysis</li>
                <li>Agile Project Management</li>
                <li>Risk Management</li>
                <li>Team Management</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default CGISummary;