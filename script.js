// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});

// Uzmemo sve slike iz galerije
var galleryItems = document.querySelectorAll('.gallery-item img');

// Modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Dodamo event listener za svaku sliku
galleryItems.forEach(function(item) {
  item.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Zatvaranje modala kada se klikne na "x"
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
