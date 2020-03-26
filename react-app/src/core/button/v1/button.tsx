import React from 'react';
import {ButtonV1Model} from "../../../../module";


export default function Button(properties : ButtonV1Model) {

    const getContent = () => {
        return (
            <>
                { properties.icon && <span className={'cmp-button__icon cmp-button__icon--' + properties.icon}></span>  }
                <span className="cmp-button__text">Contact Us</span>
            </>
        );
    };

    return (
        <div className="button">
            {
                properties.link &&
                <a className="cmp-button" href={properties.link}>
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

}