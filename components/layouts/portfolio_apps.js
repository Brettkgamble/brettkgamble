import React, { Fragment } from 'react';
import classes from './workExperienceLayout.module.css';
import Flashbidz from '../Portfolio/flashbidz/flashbidz';
import Xfit from "../Portfolio/xfitTracker/xfit";
import PuntMachine from "../Portfolio/puntMachine/puntMachine";

const Portfolio_apps = () => (
    <Fragment >
        <div className={classes.container}>
            <Flashbidz />
            <Xfit />
            <PuntMachine />
        </div>
    </Fragment>
)

export default Portfolio_apps;