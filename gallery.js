/* Name: Ethan EG */
/* Date: 2024-10-09 */
/* File: gallery.js */

let currentIndex = 0;  
const images = document.querySelectorAll('.gallery-images');  

//displays images based on current index
function showImages(index) {
    images.forEach((image, i) => {
        if (i >= index && i < index + 3) {
            image.style.display = 'block'; 
        } else {
            image.style.display = 'none';
        }
    });
}

//Next image
function nextImages() {
    if (currentIndex + 3 < images.length) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    showImages(currentIndex);
}

//Previous image
function prevImages() {
    if (currentIndex - 1 >= 0) {
        currentIndex -= 1;
    } else {
        currentIndex = Math.max(images.length - 3, 0); 
    }
    showImages(currentIndex);
}

//Initial images
document.addEventListener("DOMContentLoaded", function() {
    showImages(currentIndex);
});