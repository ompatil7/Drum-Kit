var numberOfDrums = document.querySelectorAll(".drum").length;


for (var i=0; i < numberOfDrums ; i++) 
{
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

//For mpuse click
function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    makeSound(buttonInnerHTML);
}

//for keyboard
document.addEventListener("keypress", function(event) {
    buttonAnimation(event.key);
        makeSound(event.key);
});

 function makeSound(keyPress) 
 {
        var buttonInnerHTML = keyPress;
        switch (keyPress) {
            case "w":
                var beat = new Audio ('sounds/tom-1.mp3');
                beat.play();
                break;
            case "a":
                var beat = new Audio ('sounds/tom-2.mp3');
                beat.play();
                break;
            case "s":
                var beat = new Audio ('sounds/tom-3.mp3');
                beat.play();
                break;
            case "d":
                var beat = new Audio ('sounds/tom-4.mp3');
                beat.play();
                break;
            case "j":
                var beat = new Audio ('sounds/crash.mp3');
                beat.play();
                break;
            case "k":
                var beat = new Audio ('sounds/kick-bass.mp3');
                beat.play();
                break;
            case "l":
                var beat = new Audio ('sounds/snare.mp3');
                beat.play();
                break;
            
        
            default:
                break;
        }
        console.log(keyPress.style.color = "white");
    }

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100);
}