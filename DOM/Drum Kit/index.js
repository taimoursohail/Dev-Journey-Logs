var handler = document.querySelectorAll('.drum');

// addeventlistener is a method that takes two arguments, the event and the function that will be executed.
// The first argument is the event that will trigger the function, in this case, the click event.
// The second argument is the function that will be executed when the event is triggered.

for (let i = 0; i < handler.length ; i++) {
   
    handler[i].addEventListener('click', function() {

        //Since there is no identifier key exist so I must create one

        var buttonLabel = this.innerHTML; // this will store the value of the clicked element
        
        makeSound(buttonLabel);

        anim(buttonLabel);

        //so now time to utilise which button should work with specific element by targeting:

        //applying the switch statement above:        

        // switch (buttonLabel) {
        //     case "w":
        //         new Audio("./sounds/tom-1.mp3").play();
        //     break;
        //     case "a":
        //         new Audio("./sounds/tom-2.mp3").play();
        //     break;
        //     case "s":
        //         new Audio("./sounds/tom-3.mp3").play();
        //     break;
        //     case "d":
        //         new Audio("./sounds/tom-4.mp3").play();
        //     break;
        //     case "j":
        //         new Audio("./sounds/snare.mp3").play();
        //     break;
        //     case "k":
        //         new Audio("./sounds/crash.mp3").play();
        //     break;
        //     case "l":
        //         new Audio("./sounds/kick-bass.mp3").play();
        //     break;

            
        //     default:
        //         alert("Invalid key pressed. Please press a valid drum key (w, a, s, d, j, k, l).")
        //         break;
        // }
   
    });

}

// The above code will play the sound when the button is clicked.

// Now I will add the keypress event to play the sound when the key is pressed.

// Keyup trigger means when you relase the button. 
// Key down trigger means when push the button.

document.addEventListener("keyup", function (taimour) {
    
    var pressedKey = taimour.key;
    
    makeSound(pressedKey); // Global function applied. Basically it pickup the key from above line and apply on the global object.
    
    anim(pressedKey);


    // switch (pressedKey) {
    //     case "w":

    //         // below is the short example of "method".
    //         var tom1 = new Audio("./sounds/tom-1.mp3");
    //         tom1.play();

    //     break;

    //     case "a":
    //         new Audio("./sounds/tom-2.mp3").play();
    //     break;
        
    //     case "s":
    //         new Audio("./sounds/tom-3.mp3").play();
    //     break;
        
    //     case "d":
    //         new Audio("./sounds/tom-4.mp3").play();
    //     break;
        
    //     case "j":
    //         new Audio("./sounds/snare.mp3").play();
    //     break;
        
    //     case "k":
    //         new Audio("./sounds/crash.mp3").play();
    //     break;
        
    //     case "l":
    //         new Audio("./sounds/kick-bass.mp3").play();
    //     break;

    //     default:
    //         alert("Invalid key pressed. Please press a valid drum key (W, A, S, D, J, K, L).")
    //         break;
   
    //  }

});

//instead of passing 2 times why not to make global function and use the function name everywhere.

function makeSound(unBundShund) {
   
    switch (unBundShund) {
        case "w":

            // below is the short example of "method".
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();

        break;

        case "a":
            new Audio("./sounds/tom-2.mp3").play();
        break;
        
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
        break;
        
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
        break;
        
        case "j":
            new Audio("./sounds/snare.mp3").play();
        break;
        
        case "k":
            new Audio("./sounds/crash.mp3").play();
        break;
        
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
        break;

        default:
            alert("Invalid key pressed. Please press a valid drum key (W, A, S, D, J, K, L).")
            break;
   
     }

}


function anim(event) {
   
    var b;
    
    if (event.type === "click") {
        b = event.target.innerHTML;  
    } else if (event.type === "keydown") {
        b = event.key;  
    }

    if (["w", "a", "s", "d", "j", "k", "l"].includes(b)) {
        var getElement = document.querySelector("." + b);
        if (getElement) {
            getElement.classList.add("pressed");
            setTimeout(function () {
                getElement.classList.remove("pressed");
            }, 100);
        }
    }
}

document.addEventListener("click", anim);
document.addEventListener("keydown", anim);
