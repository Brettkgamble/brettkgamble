import React, { Fragment } from 'react';
import classes from './workExperienceLayout.module.css';
import CurrentCard from "../workExperience/CurrentCard";
import Crossfit5413Card from "../workExperience/crossfit5413Card";
import CanadaNorthCard from "../workExperience/canadaNorthCard";
import KidsUncomplicatedCard from "../workExperience/kidsUncomplicatedCard";
import CrossFitAuroraCard from "../workExperience/crossFitAuroraCard";
import AlbertaMunicipalAffairsCard from "../workExperience/albertaMunicipalAffairsCard";
import TelusCard from "../workExperience/TelusCard";
import FujitsuCard from "../workExperience/FujitsuCard";
import KidtropolisCard from "../workExperience/KidtropolisCard";
import CGICard from "../workExperience/cgiCard";
import OrangeCard from "../workExperience/OrangeCard";
import VenteloCard from "../workExperience/VenteloCard";
import USInteractiveCard from "../workExperience/USInteractiveCard";
import SavilleSystemsCard from "../workExperience/SavilleSystemsCard";
import OptusCard from "../workExperience/OptusCard";
import AlcatelCard from "../workExperience/AlcatelCard";
import Fujitsu2Card from "../workExperience/Fujitsu2Card";

const WorkExperienceLayout2005_2010 = () => (
    <Fragment >
        <div className={classes.container}>
            <AlbertaMunicipalAffairsCard />
            <TelusCard />
            <CGICard />
            <KidtropolisCard />
            <FujitsuCard />
        </div>
    </Fragment>
)

export default WorkExperienceLayout2005_2010;