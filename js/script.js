document.querySelector('.navbar-brand').addEventListener('click', function() {
    this.blur(); // Remove focus from the navbar brand when clicked
});

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal")

    for(var i=0; i< reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("reveal-active")
        }
    }
}

window.addEventListener("scroll", reveal_edu);

function reveal_edu(){
    var reveals_edu = document.querySelectorAll(".reveal-edu")

    for(var i=0; i< reveals_edu.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals_edu[i].getBoundingClientRect().top;
        var revealpoint = 50;
        
        if(revealtop < windowheight - revealpoint){
            reveals_edu[i].classList.add("reveal-active")
        }
    }
}



/*const words = ["Web Developer", "Software Developer", "Data Scientist", "ML Engineer"];
const textElement = document.getElementById('typewriter-text');
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        textElement.textContent = currentWord.slice(0, ++letterIndex);
        if (letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
            return;
        }
    } else {
        textElement.textContent = currentWord.slice(0, --letterIndex);
        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 150);
}

type();*/