import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const USInteractiveSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Ventelo (GTS) Telecommunications: Business Analyst</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                Migrated several oracle based billing systems to the Euro Currency on time and on budget with no
                production affecting issues.  This involved the conversion of several currencies to the Euro on a
                single specified date which impacted 10's of million database records per billing system.  Many issues
                were overcome and significant problems such as currency rounding and technical billing algorithm were
                identified and resolved.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Development of an extensive project plan with a highly detailed implementation plan.</li>
                <li>Creation of multiple test environments replicating existing production environments on demand.</li>
                <li>Resolution of issues associated with rounding of conversions. In particular the French Franc to the Euro.</li>
                <li>Zero production errors as a result of conversion (Ok...there was one...!).</li>
                <li>Two person team, in an environment with zero budget, at the same time as the Dot.com crash</li>
                <br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Project Management</li>
                <li>Business Analysis</li>
                <li>Sql</li>
                <li>Billing Systems Subject Matter Expertise</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default USInteractiveSummary;