import React from 'react';
import {Container,ComponentMapping,withEditorContext} from '@adobe/cq-react-editable-components';
import {sprintf} from 'sprintf';

export function CarouselV1IsEmptyFn(props){
    return props.cqItems == null || props.cqItems.length === 0;
}

class Carousel extends Container {

    interval;

    static defaultProps = {
        isInEditor: false,
        autoplay: false,
        cqItems: {},
        cqItemsOrder: [],
        accessibilityLabel: 'Carousel',
        accessibility: {
            play: 'Play',
            pause: 'Pause',
            next: 'Next',
            previous: 'Previous',
            slide: 'Slide %1$u of %2$u',
            indicator: 'Slide %1$u',
            indicators: 'Choose a slide to display'
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            isMouseEntered: false,
            autoPlay: this.props.autoplay,
            componentMapping: this.props.componentMapping || ComponentMapping
        };

        this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
        this.handleOnButtonPrev   = this.handleOnButtonPrev.bind(this);
        this.handleOnButtonNext   = this.handleOnButtonNext.bind(this);
        this.handleOnMouseEnter   = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave   = this.handleOnMouseLeave.bind(this);

        if( this.props.autoplay && !this.props.isInEditor){
            this.autoPlay();
        }

    }

    handleOnButtonPrev(){
        this.prevSlide();
    }

    handleOnButtonNext(){
        this.nextSlide();
    }

    handleOnMouseEnter(){
        if(!this.props.autopauseDisabled && this.props.autoplay){
            this.clearAutoPlay();
        }
    }

    handleOnMouseLeave(){
        if(!this.props.autopauseDisabled && this.props.autoplay){
            this.autoPlay();
        }
    }

    handleOnButtonPrev(){
        this.prevSlide();
    }

    handleOnButtonNext(){
        this.nextSlide();
    }


    handleIndicatorClick(index){

        if(this.state.activeIndex !== index){

            this.setState({
                activeIndex: index
            });
        }
    }

    autoPlay(){
        this.interval = setInterval(() => {
            this.autoPlayTick();
        }, this.props.delay);
    }

    autoPlayTick() {

        if (!this.state.autoPlay || this.props.cqItemsOrder.length <= 1) {
            return;
        }

        this.nextSlide();
    };

    clearAutoPlay = () => {
        clearInterval(this.interval);
    };

    toggleAutoPlay(toggle){
        this.setState({
            autoPlay: toggle
        })
    }

    nextSlide(){

        const activeIndex = this.__getActiveIndex();

        if(activeIndex=== (this.props.cqItemsOrder.length-1)){

            this.__setSlide(0);
        }else{
            this.__setSlide(activeIndex + 1);
        }
    }

    prevSlide(){
        const activeIndex = this.__getActiveIndex();
        if(activeIndex === 0){

            this.__setSlide(this.props.cqItemsOrder.length - 1);
        }else{
            this.__setSlide(activeIndex - 1);
        }
    }

    __getActiveIndex(){

        return this.state.activeIndex;
    }

    __setSlide(index){

        this.setState({
            activeIndex: index
        });
    }


    render() {

        const isEmpty = CarouselV1IsEmptyFn(this.props);
        return (
            <div className="cmp-carousel"
                 role="group"
                 aria-label={this.props.accessibilityLabel}
                 aria-roledescription="carousel">
                {
                    !isEmpty && this.renderCarousel()
                }
                {

                    this.placeHolderComponent}
            </div>
        )

    }

    displayItem(item, index){

        const isActive = index === this.state.activeIndex;
        //we display the item if active is true, or if we are in the author mode. we need to always display the item for the author mode to work properly.
        const display = !!(isActive || this.props.isInEditor);

        const cssClass = isActive ? 'cmp-carousel__item cmp-carousel__item--active' : 'cmp-carousel__item';
        const ariaLabel = sprintf(this.props.accessibility.slide, (index + 1), this.props.cqItemsOrder.length);

        return (
            <div key={'item-' + index}
                       className={cssClass}
                       role="tabpanel"
                       aria-label={ariaLabel}
                       data-cmp-hook-carousel="item">
                {display && item}
            </div>
        )
    }

    renderCarousel(){
        return (

            <div className="cmp-carousel__content" onMouseEnter={()=>this.handleOnMouseEnter()} onMouseLeave={()=>this.handleOnMouseLeave()} >
                {
                    this.childComponents.map((childComponent, index) => this.displayItem(childComponent,index))
                }
                {this.renderCarouselActions()}
                {this.renderCarouselIndicators()}
            </div>
        )
    }

    renderCarouselIndicators(){
        return (
            <ol className="cmp-carousel__indicators"
                role="tablist"
                aria-label={this.props.accessibility.indicators}>
                {

                    this.props.cqItemsOrder.map((key, index) => {

                        const item = this.props.cqItems[key];

                        const cssClass = (index === this.state.activeIndex) ? 'cmp-carousel__indicator cmp-carousel__indicator--active' : 'cmp-carousel__indicator';
                        const ariaLabelItem = sprintf(this.props.accessibility.indicator, (index + 1));
                        return (
                            <li
                                key={'item-' + index}
                                onClick={()=>this.handleIndicatorClick(index)}
                                className={cssClass}
                                role="tab"
                                aria-label={ariaLabelItem}>{item.title}</li>
                        )
                    })
                }

            </ol>
        );
    }
    renderCarouselActions(){
        return (
            <div className="cmp-carousel__actions">
                <button onClick={()=>this.handleOnButtonPrev()}
                        className="cmp-carousel__action cmp-carousel__action--previous"
                        type="button"
                        aria-label={this.props.accessibility.previous}>
                    <span className="cmp-carousel__action-icon"></span>
                    <span className="cmp-carousel__action-text">{this.props.accessibility.previous}</span>
                </button>
                <button onClick={()=>this.handleOnButtonNext()}
                        className="cmp-carousel__action cmp-carousel__action--next"
                        type="button"
                        aria-label={this.props.accessibility.next}>
                    <span className="cmp-carousel__action-icon"></span>
                    <span className="cmp-carousel__action-text">{this.props.accessibility.next}</span>
                </button>
                {
                    this.props.autoplay &&
                    <>
                        <button className={'cmp-carousel__action cmp-carousel__action--pause' + (!this.state.autoPlay ? ' cmp-carousel__action--disabled' : '')}
                                type="button"
                                aria-label={this.props.accessibility.pause}
                                onClick={()=>this.toggleAutoPlay(false)}>
                            <span className="cmp-carousel__action-icon"></span>
                            <span className="cmp-carousel__action-text">{this.props.accessibility.pause}</span>
                        </button>
                        <button className={'cmp-carousel__action cmp-carousel__action--play' + (this.state.autoPlay ? ' cmp-carousel__action--disabled' : '')}
                                type="button"
                                aria-label={this.props.accessibility.play}
                                onClick={()=>this.toggleAutoPlay(true)}
                        >
                            <span className="cmp-carousel__action-icon"></span>
                            <span className="cmp-carousel__action-text">{this.props.accessibility.play}</span>
                        </button>
                    </>
                }

            </div>
        )
    }

}

const CarouselWrapped = withEditorContext(Carousel);
export {CarouselWrapped as CarouselV1};