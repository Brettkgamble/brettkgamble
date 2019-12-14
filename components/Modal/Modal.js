import React, { Fragment, Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";


class Modal extends Component {
    componentDidUpdate(){
        if (this.props.show){
            document.body.style.overflowY = 'hidden';
        }
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        overflowY: 'auto',
                        maxHeight: '75%'
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default React.memo(
    Modal,
    (prevProps, nextProps ) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);
