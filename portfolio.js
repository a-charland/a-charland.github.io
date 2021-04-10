var currentSlide = 0;

function nextSlide() {
    var slides = document.querySelectorAll(".slide"); //get all slides
    
    if (currentSlide === (slides.length - 1)){ //if at last slide
        slides[currentSlide].classList.remove('showing'); //hide current slide
        currentSlide = 0; //update current slide to first
        slides[currentSlide].classList.add('showing'); //show new current slide
    }
    else {
        slides[currentSlide].classList.remove('showing'); //hide current slide
        currentSlide++; //update current slide to next
        slides[currentSlide].classList.add('showing'); //show new current slide
    }
}

function prevSlide() {
    var slides = document.querySelectorAll(".slide"); //get all slides
    
    if (currentSlide === 0) { //no current slide yet so first slide
        slides[0].classList.remove('showing'); //hide current slide
        currentSlide = slides.length - 1; //update current slide to last
        slides[currentSlide].classList.add('showing'); //show new current slide
    }
    else {
        slides[currentSlide].classList.remove('showing'); //hide current slide
        currentSlide--; //update current slide to next
        slides[currentSlide].classList.add('showing'); //show new current slide
    } 
}

function positionSliderButtons() {
    var slides = document.querySelectorAll(".slide"); //get all slides
    if (slides){
        //height of current slide
        var sliderHeight = slides[currentSlide].getBoundingClientRect().height;
        var buttons = document.getElementsByClassName('slider-button');
        // for each of the buttons
        for (var i = 0; i < buttons.length; i++) {
          // get their height
          var buttonHeight = buttons[i].getBoundingClientRect().height;
          // position them right in the middle of the text,
          buttons[i].style.top = ((sliderHeight - buttonHeight) / 2).toString() + 'px';
        }
    }
  }