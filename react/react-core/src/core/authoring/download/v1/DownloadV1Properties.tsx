import React from "react";
import {DownloadV1ComputedModel} from "./DownloadV1";

export function DownloadV1Properties(props: DownloadV1ComputedModel){

    const {baseCssCls, filenameLabel, fileformatLabel, filesizeLabel, displayFilename, displayFormat, displaySize} = props;

    const renderProperty = (label: string, content: string | undefined, cssClassModifier: string) => {

        const cssClass = `${baseCssCls}__property ${baseCssCls}__property--${cssClassModifier}`;
        return (
            <div className={cssClass}>
                <dt className={baseCssCls + '__property-label'}>{label}</dt>
                <dd className={baseCssCls + '__property-content'}>{content}</dd>
            </div>
        );
    };

    return (
        <dl className={baseCssCls + '__properties'}>
            {displayFilename && renderProperty(filenameLabel, props.filename, 'filename')}
            {displaySize && renderProperty(filesizeLabel, props.size, 'size')}
            {displayFormat && renderProperty(fileformatLabel, props.format, 'format')}
        </dl>
    )
}