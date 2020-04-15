import React from 'react';
import {Container} from '@adobe/cq-react-editable-components';

export function CarouselV1IsEmptyFn(props:any){
    return props.cqItems == null || props.cqItems.length === 0;
}

export class CarouselV1 extends Container {

    renderNavigation(onClickHandler:any, hasPrev:boolean, label:string, type:string ){
        return(
            <button className={'cmp-carousel__action cmp-carousel__action--' + type} type="button" aria-label={label}
                    onClick={onClickHandler}>
                <span className="cmp-carousel__action-icon"></span>
                <span className="cmp-carousel__action-text">{label}</span>
            </button>
        )
    }


    resolveItem(keyIndex:any){
        // @ts-ignore
        const resolvedIndex = this.props.cqItemsOrder[keyIndex];
        // @ts-ignore
        return this.props.cqItems[resolvedIndex];
    }


    render() {

        //@ts-ignore
        const isEmpty = CarouselV1IsEmptyFn(this.props);
        return (
            <div className="cmp-carousel"
                 role="group"
                //@ts-ignore
                 aria-label={this.props.accessibilityLabel}
                 aria-roledescription="carousel">
                {
                    !isEmpty && this.renderCarousel()
                }
               {
                   //@ts-ignore
                   this.placeHolderComponent}
            </div>
        )

    }

    renderCarousel(){
        return (
            <div className="cmp-carousel__content">
                {
                    this.childComponents.map((childComponent, index) => {
                        const cssClass = (index === 0) ? 'cmp-carousel__item cmp-carousel__item--active' : 'cmp-carousel__item';
                        const ariaLabel = '${\'Slide {0} of {1}\' @ format=[itemList.count, carousel.items.size], i18n}';
                        return (
                            <div className={cssClass}
                                 role="tabpanel"
                                 aria-label={ariaLabel}
                                 data-cmp-hook-carousel="item">
                                {childComponent}
                            </div>
                        )
                    })
                }
                {this.renderCarouselActions()}
                {this.renderCarouselIndicators()}
            </div>
        )
    }

    renderCarouselIndicators(){
        const ariaLabelIndicators = 'Choose a slide to display';

        return (
            <ol className="cmp-carousel__indicators"
                    role="tablist"
                    aria-label={ariaLabelIndicators}>
                {
                    //@ts-ignore
                    this.props.cqItemsOrder.map((key:string, index:number) => {
                        //@ts-ignore
                        const item = this.props.cqItems[key];
                        const cssClass = (index === 0) ? 'cmp-carousel__indicator cmp-carousel__indicator--active' : 'cmp-carousel__indicator';
                        const ariaLabelItem = '';
                        return (
                            <li
                                className={cssClass}
                                role="tab"
                                aria-label={ariaLabelItem}
                                data-cmp-hook-carousel="indicator">{item.title}</li>
                        )
                    })
                }

                </ol>
        );
    }
    renderCarouselActions(){
        return (
            <div className="cmp-carousel__actions">
                <button className="cmp-carousel__action cmp-carousel__action--previous"
                        type="button"
                        aria-label="Previous">
                    <span className="cmp-carousel__action-icon"></span>
                    <span className="cmp-carousel__action-text">Previous</span>
                </button>
                <button className="cmp-carousel__action cmp-carousel__action--next"
                        type="button"
                        aria-label="$Next"
                        data-cmp-hook-carousel="next">
                    <span className="cmp-carousel__action-icon"></span>
                    <span className="cmp-carousel__action-text">Next</span>
                </button>
                {
                    //@ts-ignore
                    this.props.autoplay &&
                    <>
                        <button className="cmp-carousel__action cmp-carousel__action--pause"
                                type="button"
                                aria-label="Pause"
                                data-cmp-hook-carousel="pause">
                            <span className="cmp-carousel__action-icon"></span>
                            <span className="cmp-carousel__action-text">Pause</span>
                        </button>
                        <button className="cmp-carousel__action cmp-carousel__action--play cmp-carousel__action--disabled"
                                type="button"
                                aria-label={'Play'}
                                data-cmp-hook-carousel="play">
                            <span className="cmp-carousel__action-icon"></span>
                            <span className="cmp-carousel__action-text">Play</span>
                        </button>
                    </>
                }

            </div>
        )
    }

}