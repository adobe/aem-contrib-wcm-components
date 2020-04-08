import React from 'react';
import {ButtonV1Model} from "../../../types";

export const Button = function Button(properties : ButtonV1Model) {

    const getContent = () => {
        return (
            <>
                { properties.icon && <span className={'cmp-button__icon cmp-button__icon--' + properties.icon}></span>  }
                <span className="cmp-button__text">{properties.text}</span>
            </>
        );
    };

    return (
        <div className="button">
            {
                properties.link &&
                <a aria-label={properties.ariaLabel} className="cmp-button" href={properties.link}>
                    {getContent()}
                </a>
            }
            {   !properties.link &&
                <button className="cmp-button">
                    {getContent()}
                </button>
            }
        </div>
    )

};