import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked} clicked={props.modalClosed}></div> : null
);

export default backdrop;
