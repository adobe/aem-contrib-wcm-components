import React, {MouseEvent} from 'react';

export interface ButtonV1Model {
    text: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
    handleOnClick?(event: MouseEvent): void
}