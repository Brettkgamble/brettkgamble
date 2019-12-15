import React, { Fragment } from 'react';
import classes from './workExperienceLayout.module.css';
import RecipeReviewCard from "../workExperience/recipeReviewCard";
import Crossfit5413Card from "../workExperience/crossfit5413Card";
import CanadaNorthCard from "../workExperience/canadaNorthCard";
import KidsUncomplicatedCard from "../workExperience/kidsUncomplicatedCard";
import CrossFitAuroraCard from "../workExperience/crossFitAuroraCard";
import AlbertaMunicipalAffairsCard from "../workExperience/albertaMunicipalAffairsCard";
import TelusCard from "../workExperience/telus";
import FujitsuCard from "../workExperience/FujitsuCard";
import KidtropolisCard from "../workExperience/KidtropolisCard";
import CGICard from "../workExperience/cgi";
import OrangeCard from "../workExperience/OrangeCard";
import VenteloCard from "../workExperience/VenteloCard";
import USInteractiveCard from "../workExperience/USInteractiveCard";
import SavilleSystemsCard from "../workExperience/SavilleSystemsCard";
import OptusCard from "../workExperience/OptusCard";
import Alcatel from "../workExperience/Alcatel";

const WorkExperienceLayout = () => (
    <Fragment >
        <div className={classes.container}>
            <Crossfit5413Card />
            <CanadaNorthCard />
            <KidsUncomplicatedCard/>
            <CrossFitAuroraCard />
            <AlbertaMunicipalAffairsCard />
            <TelusCard />
            <CGICard />
            <KidtropolisCard />
            <FujitsuCard />
            <OrangeCard />
            <VenteloCard/>
            <USInteractiveCard />
            <SavilleSystemsCard/>
            <OptusCard/>
            <Alcatel/>
        </div>
    </Fragment>
)

export default WorkExperienceLayout;