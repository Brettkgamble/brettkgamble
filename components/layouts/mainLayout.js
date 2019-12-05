import React, { Fragment } from 'react';
import HeaderComponent from "../header/header";
import css from './Main.css';
import Head from 'next/head'
import Skills from "../skills/skills";
import NonTechnicalSkills from "../non-technical-skills/nontechskills";

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
        <Skills />
        <NonTechnicalSkills />
    </>
)

export default MainLayout;