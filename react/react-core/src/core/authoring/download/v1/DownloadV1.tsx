/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React, {MouseEvent} from 'react';
import {CoreComponentModel} from "../../../AbstractCoreComponent";
import {DownloadV1HeadingContent} from "./DownloadV1HeadingContent";
import {DownloadV1Properties} from "./DownloadV1Properties";
import {EditorPlaceHolder} from "../../../common/placeholder";
import {DownloadV1Description} from "./DownloadV1Description";


export interface DownloadV1LabelsModel {
    filename?: string
    filesize?: string;
    fileformat?: string;
}

export interface DownloadV1Model extends CoreComponentModel{
    url?: string
    title: string
    titleType: string
    description?: string
    actionText?: string
    filename?: string
    displaySize?: boolean
    displayFilename?: boolean
    displayFormat?: boolean
    format?: string
    size?: string
    extension?: string

    labels?: DownloadV1LabelsModel;

    handleOnClick?(event: MouseEvent): void
}


export interface DownloadV1ComputedModel extends DownloadV1Model{
    baseCssCls: string
    containerCssCls: string
    handleOnClick(event: MouseEvent): void
    href: string
    filenameLabel: string
    filesizeLabel: string
    fileformatLabel: string
    displayProperties: boolean
}

export function DownloadV1IsEmptyFn(props:DownloadV1Model): boolean{
    return (props.url == null || props.url.length === 0) && props.handleOnClick == null;
}

export function computeDownloadV1Properties(props:DownloadV1Model):DownloadV1ComputedModel{

    const handleOnClick = (event:MouseEvent) => {
        if(props.handleOnClick){
            props.handleOnClick(event);
        }
    };

    const baseCssCls = 'cmp-download';
    const href = (!!props.url && props.url.length > 0) ? props.url : '#';

    const displayFilename:boolean =  props.displayFilename === true && !!props.filename && props.filename.trim().length > 0;
    const displaySize:boolean =  props.displaySize === true && !!props.size  && props.size.trim().length > 0;
    const displayFormat:boolean =  props.displayFormat === true && !!props.format && props.format.trim().length > 0;

    const { filename = 'Filename', filesize = 'Size',  fileformat = 'Format'} = props.labels || {};

    return {
        ...props,
        displayFilename:displayFilename,
        displaySize: displaySize,
        displayFormat: displayFormat,
        displayProperties: displayFilename || displaySize || displayFormat,
        filenameLabel: filename,
        filesizeLabel: filesize,
        fileformatLabel: fileformat,
        baseCssCls: baseCssCls,
        containerCssCls: baseCssCls + ( props.isInEditor  ? ' cq-dd-file' : ''),
        href: href,
        handleOnClick: handleOnClick
    };
}

function DownloadV1(props:DownloadV1Model){

    const computedProps:DownloadV1ComputedModel = computeDownloadV1Properties(props);
    const isEmpty = DownloadV1IsEmptyFn(props);
  
    return (

        <>
            {isEmpty && props.isInEditor && <EditorPlaceHolder componentTitle={"DownloadV1"} />}
            {!isEmpty && (
                <div className={computedProps.containerCssCls}>
                    {!!computedProps.title && <DownloadV1HeadingContent {...computedProps} />}
                    {!!computedProps.description && <DownloadV1Description {...computedProps} />}
                    {computedProps.displayProperties && <DownloadV1Properties {...computedProps} />}
                    <a onClick={computedProps.handleOnClick} className={computedProps.baseCssCls + '__action'} href={computedProps.href}>
                        <span className={computedProps.baseCssCls + '__action-text'}>{props.actionText}</span>
                    </a>
                </div>
            )}
        </>
    )
};

DownloadV1.defaultProps = {
    isInEditor: false,
    hidePlaceHolder: false,
    titleType: 'h3',
    displaySize: false,
    displayFormat: false,
    displayFilename: false,
    labels: {}
};

export {DownloadV1}