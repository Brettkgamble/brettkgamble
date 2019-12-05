import React, {Component} from 'react';
import classes from './skills.module.css';

const Skills = () => (
    <div className={classes.container}>
        <div className ={classes.resume}>
            <div className={classes.section_label__right}>
                technical skills
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
        <div className={classes.frontend_end}>
            <div className={classes.figure}>
                <div className={classes.frontend}>
                    <p>Front-end Technologies</p>
                    <div className={classes.bar}>
                        <div className={classes.intermediate}></div>
                        <div className={classes.graph_header}></div>
                        <label>CSS</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.beginner, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>JavaScript</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={classes.intermediate}></div>
                        <div className={classes.graph_header}></div>
                        <label>HTML</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.beginner, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>REACT</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={classes.beginner}></div>
                        <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>NEXTJS</label>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.resume_skills_programming}>
            <ul>
                <li>Exp.</li>
                <li>Adv.</li>
                <li>Int.</li>
                <li>Beg.</li>
            </ul>
        </div>
        <div className={classes.program}>
            <div className={classes.figure}>
                <div className={classes.programming}>
                    <p>Programming</p>
                    <div className={classes.bar}>
                        <div className={[classes.intermediate, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>Python</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={classes.beginner}>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>Ruby On Rails</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.intermediate, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>MySQL</label>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.resume_skills_data}>
            <ul>
                <li>Exp</li>
                <li>Adv</li>
                <li>Int</li>
                <li>Beg</li>
            </ul>
        </div>
        <div className={classes.data}>
            <div className={classes.figure}>
                <div className={classes.dataengineering}>
                    <p>Data-Engineering</p>
                    <div className={classes.bar}>
                        <div className={classes.beginner}>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>Probability</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.beginner, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>Statistics</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={classes.beginner}>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>Deep Learning</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.beginner, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>Visualization</label>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.resume_skills_arch}>
            <ul>
                <li>Exp</li>
                <li>Adv</li>
                <li>Int</li>
                <li>Beg</li>
            </ul>
        </div>
        <div className={classes.arch}>
            <div className={classes.figure}>
                <div className={classes.architecture}>
                    <p>Architecture</p>
                    <div className={classes.bar}>
                        <div className={classes.expert}>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>Business Architecture</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={[classes.advanced, classes.alt].join(' ')}>
                            <div>
                                <img src="../../static/images/dots.jpg"/>
                            </div>
                        </div>
                        <div className={classes.graph_header}></div>
                        <label>I.T Architecture</label>
                    </div>
                    <div className={classes.bar}>
                        <div className={classes.intermediate}>
                        </div>
                        <div className={[classes.graph_header, classes.dark].join(' ')}></div>
                        <label>Cloud Computing</label>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default Skills;
