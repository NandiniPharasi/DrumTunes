    //button press
    for(var i=0; i< document.querySelectorAll(".drum").length; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function()
        {
        //for mouse click
        var playe=this.innerHTML;
        makeSound(playe);
        animate(playe);
            
        });
        
    }
   //for keyboard
    document.addEventListener("keydown", function(event) {
        makeSound(event.key);
        animate(event.key);

      });
    //dono me se kuch bhi press toh ye work krega
    function makeSound(key) {

        switch (key) {
            case "w":
                    var tom1 = new Audio('tom-1.mp3');
                    tom1.play();
                    break;
            case "a":
                    var tom3 = new Audio('tom-3.mp3');
                    tom3.play();
                    break;
            case "s":
                    var crash = new Audio('crash.mp3');
                    crash.play();
                    break;
            case "d":
                    var kick = new Audio('kick-bass.mp3');
                    kick.play();
                    break;        
            case "j":
                    var snare = new Audio('snare.mp3');
                    snare.play();
                    break;
            case "k":
                    var tom4 = new Audio('tom-4.mp3');
                    tom4.play();
                    break;
            case "l":
                    var tom2 = new Audio('tom-2.mp3');
                    tom2.play();
                    break;   
            default:console.log(key);
        }
    }
    function animate(cur){
        var activekey= document.querySelector("."+ cur);
        activekey.classList.add("pressed");
        setTimeout (function(){
            activekey.classList.remove("pressed");
        }, 300);
    }