import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const OptusSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Optus Telecommunications: Various</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                Initially worked as a Network Engineeer specializing in Network Translations for the Nortel DMS Network
                and then transferred to Internal Audit as a Technical Auditor.  Head hunted internally to a
                new group was being formed within the Group Credit area to focus on streamlining collections management for the company's
                high profile network clients and service providers.  As a team we had a mandate to achieve best practice
                in collections for the $600m portfolio and were able to bring all service providers back to contract
                terms within 12 months.  Final position held was as a Billing Analyst and represented Billing for several
                projects including Number Portability.  During my time as a Billing Analyst I detected a problem that was
                industry wide, which became known as 'baby accounts'.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Network Translations for Central Office Switching Equipment</li>
                <li>Successful implementation of Number Portability</li>
                <li>Successful management of a $600m collections portfolio</li>
                <li>Identification of 'Baby Accounts' issue</li>
                <br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Business Analysis</li>
                <li>Systems Analysis</li>
                <li>Network Engineering</li>
                <li>Electronics Engineering</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default OptusSummary;