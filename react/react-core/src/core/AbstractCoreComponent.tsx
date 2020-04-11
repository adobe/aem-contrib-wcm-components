import React from "react";
import PlaceHolder from "./common/placeholder";

export interface CoreComponent {
    hidePlaceHolder: boolean
}

export abstract class AbstractCoreComponent<Model extends CoreComponent> extends React.Component<Model> {

    public static defaultProps = {
        hidePlaceHolder: false,
    };

    abstract isEmpty():boolean;

    __hidePlaceHolder():boolean{
        return this.props.hidePlaceHolder;
    }

    __renderPlaceHolder(title?:string, emptyText?:string):JSX.Element{
        return(
            <PlaceHolder
                emptyTextAppend={emptyText}
                hidePlaceHolder={this.__hidePlaceHolder()}
                isEmpty={this.isEmpty()}
                componentTitle={title}
            />
        )
    }



}