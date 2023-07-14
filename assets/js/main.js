let menuIcon = document.getElementById("menuIcon")
menuIcon.onclick = function(){
menuIcon.classList.toggle("open-menu");
}
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block";
    }
});
}
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName")

input.addEventListener("change", ()=>{
    let inputImage = document.querySelector("input[type=file]").files[0];

    imageName.innerText = ["Use"] + [" "] + inputImage.name;
})
let inputs = document.getElementById("inputTag");
let imageNames = document.getElementById("imageNames")

inputs.addEventListener("change", ()=>{
    let inputImage = document.querySelector("input[type=file]").files[0];

    imageNames.innerText = ["Upload"] + [" "] + inputImage.name;
})
function myPassword1(){
  var myInput = document.getElementById("myPass1");
  var show4 = document.getElementById("show4");
  var hide4 = document.getElementById("hide4");

  if(myInput.type === 'password'){
      myInput.type = "text";
      show4.style.display = "block";
      hide4.style.display = "none";
  }
  else{
      myInput.type = "password";
      show4.style.display = "none";
      hide4.style.display = " block";
  }
}
function myPassword2(){
  var myBox = document.getElementById("myPass2");
  var show5 = document.getElementById("show5");
  var hide5 = document.getElementById("hide5");

  if(myBox.type === 'password'){
      myBox.type = "text";
      show5.style.display = "block";
      hide5.style.display = "none";
  }
  else{
      myBox.type = "password";
      show5.style.display = "none";
      hide5.style.display = " block";
  }
}
function myFunctions(){
  var myInput = document.getElementById("myInput");
  var show = document.getElementById("show");
  var hide = document.getElementById("hide");

  if(myInput.type === 'password'){
      myInput.type = "text";
      show.style.display = "block";
      hide.style.display = "none";
  }
  else{
      myInput.type = "password";
      show.style.display = "none";
      hide.style.display = " block";
  }
}
function myFunction1(){
  var myInput = document.getElementById("myInput2");
  var show = document.getElementById("show");
  var hide = document.getElementById("hide");

  if(myInput.type === 'password'){
      myInput.type = "text";
      show.style.display = "block";
      hide.style.display = "none";
  }
  else{
      myInput.type = "password";
      show.style.display = "none";
      hide.style.display = " block";
  }
  }
  function myFunctions12(){
      var myInputs = document.getElementById("myInput3");
      var show1 = document.getElementById("show1");
      var hide1 = document.getElementById("hide1");

      if(myInputs.type === 'password'){
          myInputs.type = "text";
          show1.style.display = "block";
          hide1.style.display = "none";
      }
      else{
          myInputs.type = "password";
          show1.style.display = "none";
          hide1.style.display = " block";
      }
  }

$(document).ready(function(){
    $('#action_menu_btn').click(function(){
            $('.action_menu').toggle();
    });
});


var x = document.getElementById("monthly")
var y = document.getElementById("annually")
var z = document.getElementById("btn")

function annually (){
        x.style.left = "-420px";
        y.style.left = "20px";
        z.style.left = "110px";
        if(screen.width <= 350){
            z.style.left = "100px";
        } else {
            z.style.left = "110px";
        }
}

function monthly(){
    x.style.left = "20px";
    y.style.left = "420px";
    z.style.left = "0";
}
