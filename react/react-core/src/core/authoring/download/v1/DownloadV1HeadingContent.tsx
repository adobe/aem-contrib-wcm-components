import React from "react";
import {DownloadV1ComputedModel} from "./DownloadV1";

export const DownloadV1HeadingContent:React.FC<DownloadV1ComputedModel> = (props:DownloadV1ComputedModel) => {

    return (
        <>
            {!!props.url || !!props.handleOnClick && (
                <a onClick={props.handleOnClick}
                   className={props.baseCssCls + '__title-link'}
                   href={props.href}>
                    {props.title}
                </a>
            )}
            {!props.url && ( <> {props.title} </>)}
        </>
    )
};
