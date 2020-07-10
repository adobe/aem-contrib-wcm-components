import {ContainerProperties} from "../../../common";
import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {AbstractContainerComponent} from "../../AbstractContainerComponent";

export interface CarouselV1PropertiesAccessibility {
    play: string;
    pause: string;
    next: string;
    previous: string;
    slide: string;
    indicator: string;
    indicators:string;
}

const formatFn = (value:string, args:any[]) => {
    var content = value;
    for (var i = 0; i < args.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, args[i]);
    }
    return content;
};

export interface CarouselV1Properties extends ContainerProperties{
    id:string;
    autopauseDisabled:boolean
    accessibility:CarouselV1PropertiesAccessibility
}

@Component({
    selector: 'core-carousel-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath'
    },
    templateUrl: './carousel.v1.component.html'
})
export class CarouselV1Component extends AbstractContainerComponent implements CarouselV1Properties,OnInit{

    @Input() id = "carousel";
    @Input() autoplay: false;
    @Input() accessibilityLabel = 'Carousel';
    @Input() autopauseDisabled: false;
    @Input() activeIndex: number = 0;
    @Input() delay: number = 0;
    @HostBinding('class') class = 'cmp-carousel';


    @Input() accessibility = {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous',
        slide: 'Slide {0} of {1}',
        indicator: 'Slide {0}',
        indicators: 'Choose a slide to display'
    };

    interval;

    ngOnInit(): void {
        if (this.autoplay && !this.isInEditor) {
            this.__autoPlay();
        }
    }

    handleOnMouseEnter(){
        if(!this.autopauseDisabled && this.autoplay){
            this.clearAutoPlay();
        }
    }

    handleOnMouseLeave(){
        if(!this.autopauseDisabled && this.autoplay){
            this.__autoPlay();
        }
    }

    getAriaControlsId(index:number){
        return `${this.id}-item-${index}`;
    }

    getIndicatorAriaLabel(index:number){
        return formatFn(this.accessibility.indicator, [index + 1]);
    }

    getSlideAriaLabel(index:number){
        return formatFn(this.accessibility.slide, [index + 1, this.cqItemsOrder.length]);
    }

    getSlideCssClass(index:number){
        return (this.activeIndex === index) ? `${this.class}__item ${this.class}__item--active` :  `${this.class}__item`;
    }

    getIndicatorCssClass(index:number){
        return (this.activeIndex === index) ? `${this.class}__indicator ${this.class}__indicator--active` : `${this.class}__indicator`;
    }

    handleOnButtonPrev(){
        this.prevSlide();
    }

    handleOnButtonNext(){
        this.nextSlide();
    }

    handleIndicatorClick(index){
        this.activeIndex = index;
    }

    __autoPlay(){
        this.interval = setInterval(() => {
            this.autoPlayTick();
        }, this.delay);
    }

    autoPlayTick() {

        if (!this.autoplay || this.cqItemsOrder.length <= 1) {
            return;
        }

        this.nextSlide();
    };

    clearAutoPlay = () => {
        clearInterval(this.interval);
    };

    toggleAutoPlay(toggle){
        this.autoplay = toggle;
    }

    nextSlide(){

        const activeIndex = this.__getActiveIndex();

        if(activeIndex=== (this.cqItemsOrder.length-1)){

            this.__setSlide(0);
        }else{
            this.__setSlide(activeIndex + 1);
        }
    }

    prevSlide(){
        const activeIndex = this.__getActiveIndex();
        if(activeIndex === 0){

            this.__setSlide(this.cqItemsOrder.length - 1);
        }else{
            this.__setSlide(activeIndex - 1);
        }
    }

    __getActiveIndex(){
        return this.activeIndex;
    }

    __setSlide(index){
        this.activeIndex = index;
    }
}