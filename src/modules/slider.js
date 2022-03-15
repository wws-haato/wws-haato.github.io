import "../css/slider.css";

export default class Slider{
    constructor(){
        this.items = [];
    }

    append(item){
        this.items.push(item);
    }

    get(){
        return(
            <div class="slideshow-container">
                <div class="mySlides">
                <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
                <p class="author">- John Keats</p>
                </div>

                <div class="mySlides">
                <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
                <p class="author">- Ernest Hemingway</p>
                </div>

                <div class="mySlides">
                <q>I have not failed. I've just found 10,000 ways that won't work.</q>
                <p class="author">- Thomas A. Edison</p>
            </div></div>
        );
    }
}