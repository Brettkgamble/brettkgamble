import React, { Component } from 'react';
import classes from './ntskills.module.css';

const NonTechnicalSkills = () => (
    <div className={classes.container}>
        <div className ={classes.resume}>
            <div className={classes.section_label__right}>
                non-technical skills
            </div>
        </div>
        <div className={classes.resume_skills}>
            <ul>
                <li>Exp.</li>
                <li>Adv.</li>
                <li>Int.</li>
                <li>Beg.</li>
            </ul>
        </div>
        <div className={classes.analysis_end}>
            <div className={classes.figure}>
                <div className={classes.analysis}>
                    <p>Analysis</p>
                    <div className={classes.bar}>
                        <div className={classes.expert}></div>
                        <label>Process Analysis</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.expert, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>Business Analysis</label>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.resume_skills_manage}>
            <ul>
                <li>Exp.</li>
                <li>Adv.</li>
                <li>Int.</li>
                <li>Beg.</li>
            </ul>
        </div>
        <div className={classes.mng}>
            <div className={classes.figure}>
                <div className={classes.management}>
                    <p>Management</p>
                    <div className={classes.bar}>
                        <div className={classes.intermediate}></div>
                        <label>Project <br />Management</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.advanced, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>Portfolio <br />Management</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={classes.advanced}></div>
                        <label>I.T Tactical <br />Planning</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.advanced, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <label>Team <br />Leadership</label>
                    </div>
                      <div className={classes.bar}>
                        <div className={classes.intermediate}></div>
                        <label>I.T <br />Governance</label>
                    </div>
                    <div className={classes.bar}>
                         <div className={[classes.advanced, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>I.T Strategic <br />Planning</label>
                    </div>

                </div>
            </div>
        </div>
        <div className={classes.resume_skills_stuff}>
            <ul>
                <li>Exp.</li>
                <li>Adv.</li>
                <li>Int.</li>
                <li>Beg.</li>
            </ul>
        </div>
        <div className={classes.stuff_end}>
            <div className={classes.figure}>
                <div className={classes.other}>
                    <p>Other</p>
                    <div className={classes.bar}>
                        <div className={[classes.intermediate, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>Class 1 Driver</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={classes.expert}>
                        </div>
                       <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>CrossFit Level 1 Coach</label>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default NonTechnicalSkills;
