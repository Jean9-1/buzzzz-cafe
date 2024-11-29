/* eslint-env es5 */

// Select elements used across functions
var menu = document.getElementById('menu');
var about = document.querySelector('.about');
var aboutBox = document.getElementById('about-box2');
var flexContainer = document.getElementById('flex-container2');
var container = document.getElementById('social-container');
var footer = document.getElementById('footer');
var openingHours = document.getElementById('hours');
var contactUs = document.getElementById('contact');
var myIframe = document.getElementById('my-iframe');
var bikeButton = document.getElementById('bike-button');
var bikes = document.getElementById('bikes');
var hiking = document.getElementById('hiking'); // Added hiking section

// DOMContentLoaded event to ensure the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.getElementById('home-button');
    
    // Home button event listener
    if (homeButton) {
        homeButton.addEventListener('click', showHome);
    } else {
        console.warn("Home button not found!");
    }

    // Add event listener for the bike button
    var bikeButton = document.getElementById('bike-button');
    if (bikeButton) {
        bikeButton.addEventListener('click', toggleBikes);  
    } else {
        console.warn("Bike button not found!");
    }

    // Menu button event listener
    var menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    } else {
        console.warn("Menu button not found!");
    }

    // Add event listener for the hiking button
    var hikeButton = document.getElementById('hike-button');
    if (hikeButton) {
        hikeButton.addEventListener('click', toggleHiking);  
    } else {
        console.warn("Hike button not found!");
    }
});

// Function to toggle the visibility of the bike section
function toggleBikes() {
    try {
        console.log('Toggling bike visibility...');
        
        // Check if the bike section is currently hidden
        var bikeVisible = !bikes.classList.contains('hidden');

        // Hide all sections except the bike section if it was not already visible
        hideAllSections(bikeVisible ? null : bikes);

        // Toggle the bike section visibility
        toggleVisibility(bikes, !bikeVisible);
        
        console.log('Bike section is now ' + (bikeVisible ? 'hidden' : 'shown') + '.');
    } catch (error) {
        console.error('Error in toggleBikes:', error);
    }
}

// Function to toggle the visibility of the hiking section
function toggleHiking() {
    try {
        console.log('Toggling hiking visibility...');
        
        // Check if the hiking section is currently hidden
        var hikingVisible = !hiking.classList.contains('hidden');

        // Hide all sections except the hiking section if it was not already visible
        hideAllSections(hikingVisible ? null : hiking);

        // Toggle the hiking section visibility
        toggleVisibility(hiking, !hikingVisible);
        
        console.log('Hiking section is now ' + (hikingVisible ? 'hidden' : 'shown') + '.');
    } catch (error) {
        console.error('Error in toggleHiking:', error);
    }
}

// Function to hide all sections except the specified one
function hideAllSections(except) {
    except = except || null;
    try {
        console.log('Hiding all sections except: ' + (except ? except.id : 'none'));

        // Array of all sections to hide
        var sections = [about, aboutBox, flexContainer, container, openingHours, contactUs, myIframe, menu, bikes, hiking];
        sections.forEach(function (section) {
            if (section !== except) {
                console.log('Hiding: ' + (section.id || section.className));
                section.classList.add('hidden');  // Hide section by adding 'hidden' class
            }
        });
    } catch (error) {
        console.error('Error in hideAllSections:', error);
    }
}

// Function to toggle visibility of the menu
function toggleMenu() {
    try {
        console.log('Toggling menu visibility...');
        var menuDiv = document.getElementById('menu');
        var menuVisible = menuDiv.classList.contains('hidden');
        
        // Toggle visibility of the menu
        menuDiv.classList.toggle('hidden', !menuVisible);

        // Hide all sections except the menu
        var sections = [about, aboutBox, flexContainer, container, openingHours, contactUs, myIframe, bikes, hiking];
        sections.forEach(function (section) {
            section.classList.add("hidden");
        });
    } catch (error) {
        console.error('Error in toggleMenu:', error);
    }
}

// Function to show the home content and reset other sections
function showHome() {
    try {
        console.log('Navigating to Home section...');
        
        // Ensure the menu, bike, and hiking sections are hidden
        menu.classList.add('hidden');
        bikes.classList.add('hidden');
        hiking.classList.add('hidden');

        // Show the home section and necessary elements
        var sections = [about, aboutBox, flexContainer, container, openingHours, contactUs, myIframe, footer];
        sections.forEach(function (section) {
            toggleVisibility(section, true);
        });

        console.log('Home section displayed with necessary components.');
    } catch (error) {
        console.error('Error in showHome:', error);
    }
}

// Helper function to toggle visibility of specific elements
function toggleVisibility(element, isVisible) {
    try {
        console.log('Toggling visibility of: ' + (element ? element.className : 'unknown') + ' to ' + isVisible);
        if (isVisible) {
            element.classList.remove('hidden');  // Show the element by removing 'hidden' class
        } else {
            element.classList.add('hidden');  // Hide the element by adding 'hidden' class
        }
    } catch (error) {
        console.error('Error in toggleVisibility:', error);
    }
}

//   slide for images

// Initialize slide states for both carousels
let carouselStates = {
    "bike-carousel": 1,  // Initial slide index for the bike carousel
    "hiking-carousel": 1 // Initial slide index for the hiking carousel
};

// Function to show slides for a specific carousel
function showSlides(n, carouselId) {
    const carousel = document.getElementById(carouselId); // Get the carousel container
    const slides = carousel.getElementsByClassName("mySlides"); // Get all slides in this carousel

    // Wrap around if the slide index is out of bounds
    if (n > slides.length) {
        carouselStates[carouselId] = 1; // Wrap to the first slide
    }
    if (n < 1) {
        carouselStates[carouselId] = slides.length; // Wrap to the last slide
    }

    // Hide all slides in the carousel
    for (let slide of slides) {
        slide.style.display = "none";
    }

    // Show the current slide
    slides[carouselStates[carouselId] - 1].style.display = "block";
}

// Function to navigate slides (next or previous) for a specific carousel
function plusSlides(n, carouselId) {
    carouselStates[carouselId] += n; // Adjust the current slide index
    showSlides(carouselStates[carouselId], carouselId); // Update the slides display
}

// Initialize both carousels on page load
showSlides(1, "bike-carousel");
showSlides(1, "hiking-carousel");
