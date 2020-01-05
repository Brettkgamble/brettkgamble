import React, { Fragment } from 'react';
import HeaderComponent from "../header/header";
import css from './Main.css';
import Head from 'next/head'
import Skills from "../skills/skills";
import NonTechnicalSkills from "../non-technical-skills/nontechskills";
import SimpleCollapse from "../Collapse/Collapse";
import WorkExperienceLayout2010_Current from "./workExperienceLayout2010_Current";
import WorkExperienceLayout2005_2010 from "./workExperienceLayout2005_2010";
import WorkExperienceLayout1999_2005 from "./workExperienceLayout1999_2005";
import WorkExperienceLayout1985_1998 from "./workExperienceLayout1985_1998";

const MainLayout = (props) => (
    <>
        <Head>
             <meta
                name ="viewport"
                content="minimim-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <style>
                @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
            </style>
        </Head>
        <HeaderComponent />
        <SimpleCollapse
            collapseComponent={<Skills/>}
            sectionlabel={'Show Technical Skills'}
        />
         <SimpleCollapse
            collapseComponent={<NonTechnicalSkills/>}
            sectionlabel={'Show Non-Technical Skills'}
        />
        <SimpleCollapse
            collapseComponent={<WorkExperienceLayout2010_Current/>}
            sectionlabel={'Work Experience 2010 - Current'}
        />
        <SimpleCollapse
            collapseComponent={<WorkExperienceLayout2005_2010/>}
            sectionlabel={'Work Experience 2005 - 2010'}
        />
        <SimpleCollapse
            collapseComponent={<WorkExperienceLayout1999_2005/>}
            sectionlabel={'Work Experience 1999 - 2005'}
        />
        <SimpleCollapse
            collapseComponent={<WorkExperienceLayout1985_1998/>}
            sectionlabel={'Work Experience 1985 - 1998'}
        />


    </>
)

export default MainLayout;