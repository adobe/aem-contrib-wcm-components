import React from "react";
import {Container} from '@adobe/cq-react-editable-components';

import {WrappedCarousel} from "./WrappedCarousel";

export function CarouselV1IsEmptyFn(props){
    return props.cqItems == null || props.cqItems.length === 0;
}

export class CarouselV1 extends Container {

    renderArrow(onClickHandler, hasPrev, label, type ){
        return(
            <button className={'cmp-carousel__action cmp-carousel__action--' + type} type="button" aria-label={label}
                    onClick={onClickHandler}>
                <span className="cmp-carousel__action-icon"></span>
                <span className="cmp-carousel__action-text">{label}</span>
            </button>
        )
    }

    resolveItem(keyIndex){
        const resolvedIndex = this.props.cqItemsOrder[keyIndex];
        return this.props.cqItems[resolvedIndex];
    }


    renderIndicator (onClickHandler, isSelected, index, label) {

        const item = this.resolveItem(index);
        const ariaControlsCls = 'carousel-4879c671fd-item-0';
        const cssClass = isSelected ? 'cmp-carousel__indicator cmp-carousel__indicator--active' : 'cmp-carousel__indicator';
        return (
            <li className={cssClass}
                onClick={onClickHandler}
                role="tab"
                aria-controls={ariaControlsCls}
                aria-label={item['cq:panelTitle']}
                data-cmp-hook-carousel="indicator"
                aria-selected={isSelected ? 'true' : 'false'}
                tabIndex={isSelected ? '0' : '-1'}>
            </li>
        );
    }
    renderItem (item, { isSelected }) {
        return item;
    }
    renderThumbs(children){
        return children;
    }

    render() {

        return (
            <WrappedCarousel
                renderThumbs={(children) => this.renderThumbs(children)}
                renderItem={(item, opts) => this.renderItem(item,opts)}
                renderIndicator={(onClickHandler, isSelected, index, label) => this.renderIndicator(onClickHandler, isSelected, index, label)}
                renderArrowPrev={(onClickHandler, hasPrev, label) => this.renderArrow(onClickHandler, hasPrev, label, 'previous')}
                renderArrowNext={(onClickHandler, hasNext, label) => this.renderArrow(onClickHandler, hasNext, label, 'next')}
                showThumbs={false}
                infiniteLoop={true}
                {...this.props.carouselProps || {}}
            >
                {
                    this.childComponents.map((childComp, index) => {
                        return (
                            <div>
                                {childComp}
                            </div>
                        );
                    })
                }
            </WrappedCarousel>
        )

    }

}