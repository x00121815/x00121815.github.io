function rotateText() {
  let rtText = ["a Team Player.", "a Quick Learner.", "a Designer.", "a Developer."];
  let tt = $("#rotate").data("txt") || 0;
  $("#rotate").data("txt", tt == rtText.length - 1 ? 0 : tt + 1).text(rtText[tt]).fadeIn()
    .delay(900).fadeOut(300, rotateText);
}
$(rotateText);

// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = () => {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.key === 27) {
    if (modal1.style.display = "block") {
      modal1.style.display = "none";
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.key === 27) {
    if (modal2.style.display = "block") {
      modal2.style.display = "none";
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.key === 27) {
    if (modal3.style.display = "block") {
      modal3.style.display = "none";
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc' || e.key === 27) {
    if (modal4.style.display = "block") {
      modal4.style.display = "none";
    }
  }
});

$(".projHoverButton").click(function() {
  if ($('.modal').hasClass('animated fadeIn')) {
    $('.modal').removeClass('animated fadeIn');
    $('.modal').addClass('animated fadeIn');
  } else {
    $('.modal').addClass('animated fadeIn');
  }
});
