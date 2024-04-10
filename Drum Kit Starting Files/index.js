
const numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        let buttonInnerHTML = this.innerHTML;
        console.log(event);
        makeSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    });
}

// var btn = document.getElementById('w');
// btn.addEventListener("keypress", function(event) {
//     console.log(this.id);
//     this.classList.forEach(className => console.log(className)); // Log each class name individually
//     makeSound(event.key);
//     animateButton(event.key);
// });


document.addEventListener("keypress", function(event) {
    console.log(event);
    // console.log(this.classList);
    // this.classList.forEach(c => console.log(c) );
    makeSound(event.key);
    animateButton(event.key);
});

function makeSound(buttonInnerHTML) {
    let track;
        
        switch(buttonInnerHTML) {
            case "w":
                track = "./sounds/tom-1.mp3";
                break;
            case "a":
                track = "./sounds/tom-2.mp3";
                break;
            case "s":
                track = "./sounds/tom-3.mp3";
                break;
            case "d":
                track = "./sounds/tom-4.mp3";
                break;
            case "j":
                track = "./sounds/snare.mp3";
                break;
            case "k":
                track = "./sounds/crash.mp3";
                break;
            case "l":
                track = "./sounds/kick-bass.mp3";
                break;
            default:
                track = "";
                break;
        }
        
        var audio = new Audio(track);
        audio.play();
}

function animateButton(buttonInnerHTML) {
    var activeButton = document.querySelector("."+buttonInnerHTML);
    
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}