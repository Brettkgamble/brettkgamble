import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import ArrowIcon from '@material-ui/icons/keyboardArrowDown';

import css from './header.module.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
        const scrollTo = require('scroll-to');
      window.addEventListener("resize", this.updateDimensions.bind(this));
      window.removeEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    // componentWillUnmount() {
    //   window.removeEventListener("resize", this.updateDimensions.bind(this));
    // }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
            <div className={css.container}>
                {/*<div className={css.header__imageContainer}>*/}
                {/*    <img src="../../static/images/Head_shot_sketch05x.png" alt="Brett Gamble" className={css.header__image}/>*/}
                {/*</div>*/}
                <div className={css.header}>
                        <h3>Brett Gamble!</h3>
                        <h4>Junior Technology Consultant <br />Data Engineer</h4>
                </div>
                <div className={css.scrollDownBtn}>

                    <Fab className={css.scrBtn} mini ="true" onClick={this.onScrollToIntro.bind(this)}>
                        <KeyboardArrowDownIcon />
                    </Fab>
                </div>

            </div>
        );
    }
}

export default HeaderComponent;
