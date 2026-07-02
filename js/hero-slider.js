const images = [

    "images/hiro/h1.png",
    "images/hiro/h2.png",
    "images/hiro/h3.png",
    "images/hiro/h4.png"

];


let current = 0;


const heroImage = document.getElementById("heroImage");



function changeSlide(index){


    current = index;


    // fade effect

    heroImage.style.opacity = 0;



    setTimeout(()=>{


        heroImage.src = images[current];


        heroImage.style.opacity = 1;



        restartAnimation();



    },500);



}





function nextSlide(){


    current++;


    if(current >= images.length){

        current = 0;

    }


    changeSlide(current);


}




function prevSlide(){


    current--;


    if(current < 0){

        current = images.length - 1;

    }


    changeSlide(current);


}




function restartAnimation(){


    heroImage.classList.remove("hero-zoom");


    void heroImage.offsetWidth;


    heroImage.classList.add("hero-zoom");


}



// automatic slider

setInterval(()=>{


    nextSlide();


},8000);