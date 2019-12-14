import React, { Fragment} from 'react';
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";

// export default function Modal(props) {
const Modal = props => {

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //    return prevProps.show !== props.show || prevProps.children !== props.children;
    // }

    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Fragment>
    );
}

export default React.memo(
    Modal,
    (prevProps, nextProps ) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);
