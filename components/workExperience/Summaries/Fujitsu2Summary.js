import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const Fujitsu2Summary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Fujitsu Consulting: Applications Portfolio Manager</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                On behalf of Fujitsu Consulting for the Saskatchewan Public Employees Pension Plan a data migration plan
                was developed to move pension information from a legacy application to CPAS.  CPAS is a modern Pension
                Management System.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Develop a conversion strategy and fixed cost assessment for the migration of tombstone data from the PEPP & Capital legacy platforms to the new CPAS/db pension administration system.</li>
                <li>Assess alternatives for the fixed cost implementation of a check writing system for the PEPP / Capital / CPAS system.</li>
                <li>Assist the project architect to develop and suggest alternatives for the data archive of tombstone data for the PEPP / Capital / CPAS conversion.</li>
                <br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
            <Typography variant="body2" color="textPrimary" component="ul">
                <li>Data Migration</li>
                <li>Business Analysis</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default Fujitsu2Summary;