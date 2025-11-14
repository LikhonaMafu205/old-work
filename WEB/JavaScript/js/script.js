//to declare a new method, we use the function keyword
function translateText(){
// create a new variable to hold our <p> element (getElement Lets us call it by its name)
const textToTranslate = document.getElementById('randomText');
// then we can update the text (.textContent specifies all the text inside <p> </p>)
textToTranslate.style.fontFamily = "Wingdings"
}
// we attach the methodto our button (.addEventListener allows us to attach something to an event)
//when we "click" something something happens
function lightMode(){
// we update the CSS when a button is pressed
//.body lets us access all of the content, and, style specifications that we want to change the CSS
// from there, we call my CSS property we want, from colour, to size, to show
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
}

function darkMode (){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

document.getElementById('lightMode').addEventListener('click', lightMode);
document.getElementById('darkMode').addEventListener('click', darkMode);

function getRandomColor() {
    // this line builds us a random coloer mose
    // it starts off by adding the #
    // it then takes a random number between 0 and the max number an interger can store
    //so now its #123123211223 (for example)
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

// const CANT change, let CAN change
let interval = null;
document.getElementById('discoMode').addEventListener('click', () => {
    // if already in disco ode
    if (interval) {
        // turn off the timer
        clearInterval(interval);
        // set it to null
        interval = null;
        // and change the button text to let the user know they can start it again
        document.getElementById('discoMode').textContent = "Start Disco";
        // otherwise if it is not already running
    } else{
        // create a new interval (timer), that will run instructions every time a certain amount of time passes
        interval = setInterval(() => {
            // here we change the colou, using the method we made to get a random colour
            document.body.style.backgroundColor = getRandomColor();
            // and we specify we want the timer (interval) to trigger every second
        }, 5000);
        // and we update the button text to let the user know they can turn it off
        document.getElementById('discoMode').textContent = "Stop Disco";
    }
}) 