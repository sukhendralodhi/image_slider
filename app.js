// variable 
let slideIndex = 1;

const plusSlides = (n) => {
    showSlide(slideIndex += n);
}


const currentSlide = (n) => {
    showSlide(slideIndex = n);
}


// function show slide 
const showSlide = (n) => {
    let i;
    let mySlides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if(n > mySlides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = mySlides.length;
    }
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none';        
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    mySlides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += "active";
}

showSlide(slideIndex);