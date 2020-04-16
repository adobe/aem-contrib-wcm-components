import React from 'react';
import {ButtonV1} from "@adobe/core-contrib-core";
import {Link} from '../../../utils/Link';

export class SpaButtonV1 extends ButtonV1{

    renderComponent(){
        return (
            <div className="button" onClick={this.handleOnClick}>
                {
                    this.props.link &&
                    <Link  aria-label={this.props.ariaLabel} className="cmp-button" to={this.props.link}>
                        {this.getContent()}
                    </Link>
                }
                {   !this.props.link &&
                <button className="cmp-button">
                    {this.getContent()}
                </button>
                }
            </div>
        )
    }
}