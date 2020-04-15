import React, { Component, Children } from 'react';
import { Carousel } from 'react-responsive-carousel';

export class WrappedCarousel extends Carousel{

    renderControls(){
        if (!this.props.showIndicators) {
            return null;
        }

        return (
            <ol className="cmp-carousel__indicators" role="tablist" aria-label="Choose a slide to display" data-cmp-hook-carousel="indicators">
                {Children.map(this.props.children, (item, index) => {
                    return this.props.renderIndicator(
                        this.changeItem,
                        index === this.state.selectedItem,
                        index,
                        this.props.labels.item
                    );
                })}
            </ol>
        );
    }

}