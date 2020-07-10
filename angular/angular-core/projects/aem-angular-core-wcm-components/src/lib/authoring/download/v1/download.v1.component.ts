/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import {Component, Input, Output, EventEmitter, HostBinding} from '@angular/core';
import {AbstractCoreComponent} from "../../../AbstractCoreComponent";

export interface DownloadV1LabelsModel {
    filename?: string
    filesize?: string;
    fileformat?: string;
}

export interface DownloadV1Model{
    url?: string
    title: string
    description?: string
    actionText?: string
    filename?: string
    format?: string
    size?: string
    extension: string
    displayFilename: boolean
    displaySize: boolean
    displayFormat: boolean
    labels: DownloadV1LabelsModel
}

@Component({
    selector: 'core-download-v1',
    templateUrl: './download.v1.component.html',
})
export class DownloadV1Component extends AbstractCoreComponent implements DownloadV1Model{

    @HostBinding('class') class = 'cmp-download';

    @Input() titleType = 'h3';
    @Input() text?;
    @Input() url?;
    @Input() title;
    @Input() description?;
    @Input() actionText?;
    @Input() filename?;
    @Input() format?;
    @Input() size?;
    @Input() extension;

    @Input() displayFilename = false;
    @Input() displaySize = false;
    @Input() displayFormat = false;
    @Input() labels: DownloadV1LabelsModel = {
        filename: "File name",
        filesize: "Size",
        fileformat: "Format"
    };

    clickRequest = new EventEmitter();

    onClick() {
        this.clickRequest.emit();
    }

    get containerCssClass():string {
        return this.class + (this.isInEditor) ? ' cq-dd-file' : ''
    }

    get isDisplayingDescription(): boolean{
        return this.description !== null && this.description.trim().length > 0;
    }
    get isDisplayingProperties(): boolean{
        return this.isDisplayingFileformat || this.isDisplayingFilename || this.isDisplayingFilesize;
    }

    get isDisplayingFilesize(): boolean {
        return this.displaySize === true && this.displaySize != null && this.size.trim().length > 0;
    }

    get isDisplayingFileformat(): boolean {
        return this.displayFormat === true && this.format != null && this.format.trim().length > 0;
    }

    get isDisplayingFilename(): boolean {
        return this.displayFilename === true && this.filename != null && this.filename.trim().length > 0;
    }

    get isDisplayingDownloadButton(): boolean {
        return (!!this.url && this.url.trim().length > 0) &&  this.url && (!!this.actionText && this.actionText.trim().length > 0);
    }

    get isEmpty(): boolean {
        return DownloadV1IsEmptyFn(this);
    }

}

export function DownloadV1IsEmptyFn(props:DownloadV1Model): boolean{
    return props.url == null || props.url.trim().length === 0;
}