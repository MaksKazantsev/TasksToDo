import React from 'react';
import classes from "./MyInput.module.css"

const MyInput = (props) => {
    return (
        <input type="text" {...props} className={classes.MyInp}/>
    );
};

export default MyInput;