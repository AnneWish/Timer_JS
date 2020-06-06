class Timer {

    constructor (durationInput, startButton, pauseButton, callbacks) { //called automatically when we call a new instance of a timer

        this.durationInput = durationInput; //setting up some event handlers on these DOM elements
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.OnComplete = callbacks.OnComplete;
        }

        this.startButton.addEventListener ('click', this.start);
        this.pauseButton.addEventListener ('click', this.pause);

    }



    // start() {
    //     console.log('Time to start the timer!');
    // }


    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50); //because we'd like to share info between methods, we assign it to an instance variable
        
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        // const timeRemaining = parseFloat(this.durationInput.value);
        if (this.timeRemaining <= 0) {
            this.pause;
            if (this.OnComplete) {
                this.OnComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if (this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
        
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value); //getters and setters are new features in Javascript
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }




}