import React from "react";
import {DownloadV1ComputedModel} from "./DownloadV1";

export const DownloadV1Description:React.FC<DownloadV1ComputedModel> = (props:DownloadV1ComputedModel) => {

    const html:string = String(props.description || '');
    return (
        <div className={props.baseCssCls + '__description'} dangerouslySetInnerHTML={{__html: html}}></div>
    );

};
