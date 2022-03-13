export class Observer extends IntersectionObserver{
    /**
    * @param {KeyFrame[]} keyframes name of animation
    * @param {KeyframeAnimationOptions} options effect duration
    */
    constructor(keyframes, options){
        super(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        entry.target.animate(keyframes, options);
                        console.log(entry.target.id);
                    }
                    console.log("aaaaa");
                    }
                )
            }
        );

    }

    observeIDs(indices) {
        for(let id of indices){
            var element = document.getElementById(id);
            if(element)
                this.observe(element);
        }
            
        
    }

}