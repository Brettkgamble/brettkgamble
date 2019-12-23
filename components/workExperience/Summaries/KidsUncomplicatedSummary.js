import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

const KidsUncomplicatedSummary = () => (

    <Paper >
        <CardContent>
          <Typography paragraph variant="h5" color="textPrimary">Kids Uncomplicated: Technical Lead</Typography>
          <Typography paragraph variant="h6" color="textPrimary">Profile</Typography>
          <Typography paragraph>
            Primary responsibilities were to assist the owner in completing grant applications for
              National Research Council of Canada 'Eureka' grant funding and applications to Tech Edmonton
              for Product Demonstration (PDP).
          </Typography>
            <Typography paragraph>
            Provided Information Technology consultancy for the development of a smartphone application to
            be used by Caregivers of Autistic children to video child 'events' or 'episodes' to assist
            professionals in providing real-time practitioner advice.  The goal was to have the technology automatically
            recognize the child (amongst a group of people) and provide background blurring to adhere to
            privacy rules regarding the filming of children.
            </Typography>
            <Typography paragraph>
            We achieved a leap forward when the developer
            took my advice to move the image processing from the device and upload it to a server for processing
            prior to human consumption.  We achieved this goal, and the team eventually were able to perform
            image processing on the device, as well as to secure a patent.
          </Typography>
          <Typography paragraph variant="h6" color="textPrimary">Core Accomplishments</Typography>
           <Typography variant="body2" color="textPrimary" component="ul">
                <li>Successful Eureka Grant Funding</li>
                <li>Successful Tech Edmonton PDP funding</li>
                <li>Successful development of facial recognition Smartphone technology</li>
            </Typography>
            <br />
            <Typography paragraph variant="h6" color="textPrimary">Skills</Typography>
           <Typography variant="body2" color="textPrimary" component="ul">
                <li>Business Planning</li>
                <li>Fund Raising - National Research Council of Canada, Tech Edmonton</li>
                <li>Strategic Planning</li>
            </Typography>
        </CardContent>
    </Paper>

);

export default KidsUncomplicatedSummary;