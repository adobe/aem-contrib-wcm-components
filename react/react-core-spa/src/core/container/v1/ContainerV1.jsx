import React from "react";
import {Container, ResponsiveGrid, EditorContext, ComponentMapping} from '@adobe/cq-react-editable-components';

export function ContainerV1IsEmptyFn(props) {
    return props.cqItems == null || props.cqItems.length === 0;
}

export class ContainerV1 extends React.Component {

    mainDiv;

    constructor(props) {
        super(props);
        this.state = {
            componentMapping: this.props.componentMapping || ComponentMapping,
        };
        this.mainDiv = React.createRef();
    }

    componentDidMount() {
        if (this.mainDiv.current) {
            this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
        }

    }

    componentDidUpdate() {
        if (this.mainDiv.current) {
            this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
        }
    }

    get coreContainerProps() {
        return {
            className: 'container responsivegrid'
        };
    }


    render() {
        return (
            <div {...this.coreContainerProps}>
                <div ref={this.mainDiv}
                     id={this.props.id}
                     className="cmp-container">
                    <EditorContext.Consumer>
                        {isInEditor => {
                            if (this.props.layout && this.props.layout === 'simple') {
                                return <Container componentMapping={this.state.componentMapping} isInEditor={isInEditor} {...this.props} />

                            } else {
                                return <ResponsiveGrid componentMapping={this.state.componentMapping} isInEditor={isInEditor} {...this.props} />
                            }
                        }}
                    </EditorContext.Consumer>
                </div>
            </div>
        )
    }

}