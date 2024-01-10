import React from 'react';
import classes from "./MyModal.module.css"

const MyModal = ({children, modal, setModal}) => {

    const rootClasses = [classes.MyModal]
    if(modal) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
            <div className={classes.MyModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;