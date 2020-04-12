import React from "react";
import PlaceHolder from "./common/placeholder";

export interface CoreComponent {
    hidePlaceHolder: boolean
}

/**
 * AbstractCoreComponent - provides abstraction and helper methods to show a placeholder if the component is empty and author mode is on.
 */
abstract class AbstractCoreComponent<Model extends CoreComponent, State> extends React.Component<Model,State> {

    public static defaultProps = {
        hidePlaceHolder: false,
    };

    abstract isEmpty():boolean;

    abstract renderComponent():JSX.Element;

    getEmptyPlaceHolderText():string{
        return '';
    }

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

    render(){
        const isEmpty:boolean = this.isEmpty();

        return (
            <>
                { !isEmpty &&
                    this.renderComponent()
                }
                {
                    this.__renderPlaceHolder(this.getEmptyPlaceHolderText())
                }
            </>
        )
    }


}

export default AbstractCoreComponent;