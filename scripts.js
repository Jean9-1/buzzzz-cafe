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

// Function to hide all sections except the specified one
function hideAllSections(except) {
    except = except || null;
    try {
        console.log('Hiding all sections except: ' + (except ? except.id : 'none'));

        // Array of all sections to hide
        var sections = [about, aboutBox, flexContainer, container, openingHours, contactUs, myIframe, menu];
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
        var sections = [about, aboutBox, flexContainer, container, openingHours, contactUs, myIframe, bikes];
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
        
        // Ensure the menu and bike section are hidden
        menu.classList.add('hidden');
        bikes.classList.add('hidden');

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

// bike slide for images

let slideIndex = 1; // Initialize slide index (start with the first slide)
showSlides(slideIndex); // Show the first slide by default

// Function to control the slideshow (navigate between slides)
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    // If n is greater than the number of slides, loop back to the first slide
    if (n > slides.length) {
        slideIndex = 1; // Wrap to the first slide
    }

    // If n is less than 1, loop back to the last slide
    if (n < 1) {
        slideIndex = slides.length; // Wrap to the last slide
    }

    // Hide all slides by default
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide each slide
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block"; // Display the current slide
}

// Function to change the slide (next or previous)
function plusSlides(n) {
    slideIndex += n; // Increment or decrement the slideIndex
    showSlides(slideIndex); // Update the slide display based on the new index
}
