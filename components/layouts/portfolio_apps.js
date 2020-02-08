import React, { Fragment } from 'react';
import classes from './workExperienceLayout.module.css';
import Flashbidz from '../Portfolio/flashbidz/flashbidz';
import Xfit from "../Portfolio/xfitTracker/xfit";

const Portfolio_apps = () => (
    <Fragment >
        <div className={classes.container}>
            <Flashbidz />
            <Xfit />
        </div>
    </Fragment>
)

export default Portfolio_apps;