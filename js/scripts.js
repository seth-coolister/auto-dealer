import {reviews} from './reviews.js';

// menu toggle
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const menu = document.getElementById("hamburger");
 
menu.addEventListener("click", toggleMenu); // end menu stuff

// create reviews
const reviewList = document.querySelector('#reviewList');

reviews.forEach(review => {
    const reviewSection = document.createElement('section');

    const reviewName = document.createElement('h3');
    reviewName.textContent = review.name;

    const reviewRating = document.createElement('div');
    const reviewStars = document.createElement('img');
    reviewStars.src = '../images/star.svg';

    for (let i = 0; i < review.rating; i++) {
        const star = document.createElement('img');
        star.src = '../images/star.svg';
        reviewRating.appendChild(star);
    }

    const reviewText = document.createElement('p');
    reviewText.textContent = review.text;



    reviewSection.appendChild(reviewName);
    reviewSection.appendChild(reviewRating);
    reviewSection.appendChild(reviewText);

    reviewList.appendChild(reviewSection);
}); // end reviews stuff

// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear(); // end footer stuff