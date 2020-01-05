import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const CurrentSummary = () => (

    <Paper >
        <CardContent>
            <Typography paragraph variant="h5" color="textPrimary">Seeking New Opportunities</Typography>
            <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
            <Typography paragraph>
                Since August 1, 2019 I have been studying 7 days a week and approximately 8 hours a day to develop
                my Python and Data Science skills.  Primarily this is being achieved through coursework on Udemy and Datacamp,
                but I am also working daily on my own portfolio, codewars, codersrank, and hackersrank to improve my skills
                with Python, Ruby, SQL, Java, JavaScript, CSS, Shell & Powershell.  I am also learning rudimentary French.<br />
            </Typography>
            <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
            <Typography paragraph>
                Several hours a day learning is quickly providing me with additional tools and projects so that I am constantly
                learning.  I am working on several projects including a React / Next based Web Application to assist people
                looking to purchase a used vehicle.  This is data intensive, and requires a well thought out front-end, a python
                back-end, and integrates with PostgreSQL via Google App Engine End-points.
            </Typography>
            <Typography paragraph>
                I am also working on an App to track the growth and changes in the business of CrossFit, this portfolio site,
                a harness racing handicapping system using Machine Learning, and reading as much as I can about data engineering
                that I can.  Websites like hackersrank, codersrank, kaggle, and various others also help me to engage with others who
                are exploring data engineering.
            </Typography>
                <br />
            {/*<Typography paragraph variant="h6" color="textPrimary">Skills</Typography>*/}
            {/*<Typography variant="body2" color="textPrimary" component="ul">*/}
            {/*    <li>Enterprise Architecture</li>*/}
            {/*    <li>Strategic Planning</li>*/}
            {/*    <li>I.T Governance</li>*/}
            {/*    <li>Portfolio Management</li>*/}
            {/*    <li>Vendor Management</li>*/}
            {/*</Typography>*/}
        </CardContent>
    </Paper>

);

export default CurrentSummary;