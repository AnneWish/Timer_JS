// console.log('Hi there!');

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        // console.log('Timer started');
        duration = totalDuration;
    },

    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter);
        
    },

    OnComplete() {
        console.log('Timer is completed');
    } 
}); //new instance of the timer
// timer.start();

// console.log(this);
// const printThis = () =>
//  {
//     console.log(this);
// }

// const colors = {
//     printColor() {
//         console.log (this);

//     }

// };

// const randomObject = {
//     a: 1;
// };


// // const printThis = function() {
// //     console.log(this);
// // } 


// printThis.call({ color: 'red' });