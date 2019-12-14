import React, { Fragment } from 'react';
import classes from './workExperienceLayout.module.css';
import RecipeReviewCard from "../workExperience/recipeReviewCard";
import Crossfit5413Card from "../workExperience/crossfit5413Card";
import CanadaNorthCard from "../workExperience/canadaNorthCard";
import KidsUncomplicatedCard from "../workExperience/kidsUncomplicatedCard";
import CrossFitAuroraCard from "../workExperience/crossFitAuroraCard";
import AlbertaMunicipalAffairsCard from "../workExperience/albertaMunicipalAffairsCard";

const WorkExperienceLayout = () => (
    <Fragment >
        <div className={classes.container}>
            <Crossfit5413Card />
            <CanadaNorthCard />
            <KidsUncomplicatedCard/>
            <CrossFitAuroraCard />
            <AlbertaMunicipalAffairsCard />
        </div>
    </Fragment>
)

export default WorkExperienceLayout;