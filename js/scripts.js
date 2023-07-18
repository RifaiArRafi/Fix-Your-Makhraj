
    // Get all elements with the class "myLink"
    var links = document.getElementsByClassName("nav-link");

    function removeActiveClass() {
        for (var i = 0; i < links.length; i++) {
          if (links[i] !== this) {
            links[i].classList.remove("active");
          }
        }
      }

    // Add an event listener to each element
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        // Add the "active" class to the clicked element
        this.classList.add("active");
        removeActiveClass.call(this);
      });
    }

    function playAudio(audioName) {
      let audio = new Audio(audioName);
      audio.play();
    }
    
    function troubleshoot() {
      console.log("anjay");
    }

    var buttons = document.querySelectorAll('.button-penjelasan');
    var penjelasans = document.querySelectorAll('.mt-0');

    // buttons.forEach(function(button) {
    //   button.addEventListener('click', function() {
    //     // var target = button.getAttribute('data-target');
    //     // var div = document.getElementById(target);
        
    //     // if (div.style.display === 'none') {
    //     //   div.style.display = 'block';
    //     // } else {
    //     //   div.style.display = 'none';
    //     // }
    //     console.log("anjay1")
    //   });
    // });

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(){
        if (penjelasans[i].style.display === 'none') {
          penjelasans[i].style.display = 'block';
        } else {
          penjelasans[i].style.display = 'none';
        }
      })
    }

    
    
    
    
    
    
    
    

