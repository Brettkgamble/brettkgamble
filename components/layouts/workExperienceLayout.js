import React, { Fragment } from 'react';
import classes from './workExperienceLayout.module.css';
import RecipeReviewCard from "../workExperience/recipeReviewCard";
import Crossfit5413Card from "../workExperience/crossfit5413Card";

const WorkExperienceLayout = () => (
    <Fragment >
        <div className={classes.container}>
            <Crossfit5413Card />
             <RecipeReviewCard />
              <RecipeReviewCard />
               <RecipeReviewCard />
                <RecipeReviewCard />
                 <RecipeReviewCard />
        </div>
    </Fragment>
)

export default WorkExperienceLayout;