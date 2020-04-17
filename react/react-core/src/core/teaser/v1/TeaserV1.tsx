import AbstractCoreComponent, {CoreComponentModel, CoreComponentState} from "../../AbstractCoreComponent";
import {ImageV2} from "../../image/v2/ImageV2";
import React from "react";
import {TitleV2} from "../../..";


export function TeaserV1IsEmptyFn(props:TeaserV1Model): boolean{

    return (!props.imagePath && !props.description &&  props.actions.length == 0)

}

export interface TeaserV1Action {
    title: string
    URL: string;
}

export interface TeaserV1Model extends CoreComponentModel{
    pretitle?: string
    title?: string
    description?: string
    titleType: string
    linkURL: string
    actionsEnabled: boolean
    imageLinkHidden: boolean
    titleLinkHidden: boolean
    actions: TeaserV1Action[]
    imagePath: string
}

export class TeaserV1<Model extends TeaserV1Model, State extends CoreComponentState> extends AbstractCoreComponent<Model, State>{

    public static defaultProps = {
        hidePlaceHolder: false,
        isInEditor: false
    };

    isEmpty(): boolean {
        return TeaserV1IsEmptyFn(this.props);
    }

    get image(){
        return this.props.imagePath && (
            <div className="cmp-teaser__image">
                <ImageV2 isInEditor={this.props.isInEditor} src={this.props.imagePath} alt={"temporary image"}/>
            </div>
        );
    }

    get pretitle(){
        return this.props.pretitle && <div className="cmp-teaser__pretitle">{this.props.pretitle}</div>

    }

    get title(){
        return this.props.title && (
            <TitleV2 type={this.props.titleType}
                     isInEditor={this.props.isInEditor}
                     linkDisabled={false}
                     text={this.props.title}
                     linkURL={this.props.linkURL}/>
            )
    }

    get description(){
        const text:string = this.props.description as string;
        return this.props.description && (
           <div className="cmp-teaser__description" dangerouslySetInnerHTML={{__html: text}}></div>
        )
    }

    get actions(){
        const hasActions:boolean = this.props.actions.length > 0;
        return this.props.actionsEnabled && hasActions && (
            <div className="cmp-teaser__action-container">
                {
                    this.props.actions.map((action, index) => {
                        <a className="cmp-teaser__action-link" href={action.URL}>${action.title}</a>
                    })
                }
            </div>
        )
    }

    renderComponent(): JSX.Element {

        const cssClass = 'cmp-teaser' + (this.props.isInEditor) ? ' cq-dd-image' : '';
        return (
            <div className={cssClass}>
                {this.image}
                <div className="cmp-teaser__content">
                    {this.pretitle}
                    {this.title}
                    {this.description}
                    {this.actions}
                </div>
            </div>
        )
    }

}
