var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// var sounds = [
//     new Audio("./sounds/tom-1.mp3"),
//     new Audio("./sounds/tom-2.mp3"),
//     new Audio("./sounds/tom-3.mp3"), 
//     new Audio("./sounds/tom-4.mp3"),
//     new Audio("./sounds/crash.mp3"),
//     new Audio("./sounds/kick-bass.mp3"),
//     new Audio("./sounds/snare.mp3")
// ];
for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { 

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key){

        switch(key) {
            case "q":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "w":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "e":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "r":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            case "t":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case "y":
                var kickBase = new Audio("./sounds/kick-bass.mp3");
                kickBase.play();
                break;
            case "u":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            default: console.log(this.innerHTML);
            }
    }
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey)
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed")
        }, 100);

    }




// for(var i = 0; i < numberOfDrumButtons; i++) {
//     (function(index) {
//         document.querySelectorAll(".drum")[index].addEventListener("click", function() {
//             console.log(sounds);
//             sounds[index].play();
//         });
//     })(i);

// }

