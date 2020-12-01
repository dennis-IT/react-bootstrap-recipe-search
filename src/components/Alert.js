import React from 'react';

const Alert = (props) => {
    return (
        <div className="note">
            <p>{props.alert}</p>
        </div>
    );
};

export default Alert