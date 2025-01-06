
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
      }
    
}
showMenu('nav_toggle','nav_menu')


//active and remove active
const navLink=document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))
function linkAction(){
 navLink.forEach(n=>n.classList.remove('active'))
 this.classList.add('active')  
 const navMenu = document.getElementById('nav_menu')
 navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// htmlcontent
function openCity(evt, tagName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tagName).style.display = "block";
    evt.currentTarget.className += " active";
  }


// //   sticky
// window.onscroll = function(){myFunction()};

// var navbar = document.getElementById("htmlnav");
// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// pageup
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// // responsive tag
// function myFunction() {
//   var x = document.getElementById("myResnav");
//   if (x.className === "resnav") {
//     x.className += " sliding";
//   } else {
//     x.className = "resnav";
//   }
// }



// javascript tabcontent
function tabClick(evt, cityName) {
  var i, tabcontent1, tablinks;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



