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
import {CoreComponentModel, CoreComponentState} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface DownloadV1Model extends CoreComponentModel{
    url?: string
    title: string
    titleType: string
    description?: string
    actionText?: string
    filename?: string
    displaySize: boolean
    displayFilename: boolean
    displayFormat: boolean
    format?: string
    size?: string
    extension?: string
    handleOnClick?(event: MouseEvent): void
}

export function DownloadV1IsEmptyFn(props:DownloadV1Model): boolean{
    return (props.url == null || props.url.length === 0) && props.handleOnClick == null;
}

export class DownloadV1<Model extends DownloadV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State> {

    displayFileName:boolean;
    displaySize: boolean;
    displayFormat: boolean;

    public static defaultProps = {
        isInEditor: false,
        hidePlaceHolder: false,
        titleType: 'h3',
        displaySize: false,
        displayFormat: false,
        displayFilename: false
    };

    constructor(props:Model) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.displayFileName = props.displayFilename && !!props.filename;
        this.displaySize = props.displaySize && !!props.size;
        this.displayFormat = props.displayFormat && !!props.format;
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Download V1';
    }

    handleOnClick(event:MouseEvent){
        if(this.props.handleOnClick){
            this.props.handleOnClick(event);
        }
    }

    isEmpty(): boolean{
        return DownloadV1IsEmptyFn(this.props);
    }

    renderHeadingContent(){
        return (
            <>
                {!!this.props.url || !!this.props.handleOnClick && (
                    <a onClick={this.handleOnClick}
                       className="cmp-download__title-link"
                       href={this.getHref()}>
                        {this.props.title}
                    </a>
                )}
                {!this.props.url && ( <> {this.props.title} </>)}
            </>
        )
    }

    renderHeading(){
        return (
            React.createElement(
                `${this.props.titleType}`,
                {
                    className: 'cmp-download__title"',
                },
                this.renderHeadingContent()
            )
        )
    }

    renderDetails(){
        return (
            <dl className="cmp-download__properties">
                {this.displayFileName && this.renderProperty('Filename', this.props.filename, 'filename')}
                {this.displaySize     && this.renderProperty('Size',     this.props.size,     'size')}
                {this.displayFormat   && this.renderProperty('Format',   this.props.format,   'format')}
            </dl>
        )
    }
    renderComponent(){

        const cssClass = 'cmp-download' + ( this.props.isInEditor  ? ' cq-dd-file' : '');
        return (
            <div className={cssClass}>
                {!!this.props.title && this.renderHeading()}
                {!!this.props.description && this.renderDescription()}
                {(this.displayFileName || this.displaySize || this.displayFormat) && this.renderDetails()}
                {this.renderDownloadLink()}

            </div>
        )
    }

    renderDescription() {
        const html:string = String(this.props.description) || '';
        return (
            <div className="cmp-download__description" dangerouslySetInnerHTML={{__html: html}}></div>
        )
    }

    renderDownloadLink() {


        return (
            <a onClick={this.handleOnClick} className="cmp-download__action" href={this.getHref()}>
                <span className="cmp-download__action-text">{this.props.actionText}</span>
            </a>
        )
    }

    renderProperty(label: string, content: string|undefined, cssClassModifier: string) {
        const cssClass = 'cmp-download__property cmp-download__property--' + cssClassModifier;
        return (
            <div className={cssClass}>
                <dt className="cmp-download__property-label">{label}</dt>
                <dd className="cmp-download__property-content">{content}</dd>
            </div>
        );
    }

    getHref(){
        return (!!this.props.url && this.props.url.length > 0) ? this.props.url : '#';
    }
}