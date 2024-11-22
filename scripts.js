/* eslint-env es5 */  // Ensure compatibility with ES5 (instead of ES6 or later)

// Select elements used across functions (no change here)
var menu = document.getElementById('menu');
var about = document.querySelector('.about');
var aboutBox = document.getElementById('about-box2');
var flexContainer = document.getElementById('flex-container2');
var container = document.getElementById('social-container');
var footer = document.getElementById('footer');
var openingHours = document.getElementById('hours');
var contactUs = document.getElementById('contact');
var myIframe = document.getElementById('my-iframe');

// DOMContentLoaded event to ensure the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.getElementById('home-button');
    
    // Home button event listener
    if (homeButton) {
        homeButton.addEventListener('click', showHome);
    } else {
        console.warn("Home button not found!");  // Changed to warn instead of error
    }

    // You can add other event listeners or logic below as needed
});

// Helper function to hide all sections except the specified one
function hideAllSections(except) {
    except = except || null;  // Default to null if except is not provided
    try {
        console.log('Hiding all sections except: ' + (except ? except.id : 'none'));

        // Array of all sections to hide
        var sections = [about, aboutBox, flexContainer, container, openingHours, contactUs, myIframe];
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

// Function to toggle the visibility of the menu
function toggleMenu() {
    try {
        console.log('Toggling menu visibility...');
        var menuDiv = document.getElementById('menu');
        var menuVisible = menuDiv.classList.contains('hidden');
        
        // Toggle visibility of the menu
        menuDiv.classList.toggle('hidden', !menuVisible);  // Use toggle for cleaner logic

        // Hide all sections except the menu
        var sections = [about, aboutBox, flexContainer, container, openingHours, contactUs, myIframe];
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
        
        // Ensure the menu is hidden
        menu.classList.add('hidden');

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

// Helper function to toggle visibility of specific elements (used in showHome)
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



// Function to toggle visibility of the "About" section (if you want to use this elsewhere)
function toggleAbout() {
    try {
        console.log('Toggling About section...');
        if (about) {
            about.classList.toggle('hidden');  // Toggle visibility of the About section
        } else {
            console.error('About section not found!');
        }
    } catch (error) {
        console.error('Error in toggleAbout:', error);
    }
}

// Handle window resize - Removed since it's not needed with media queries
// window.addEventListener('resize', function() {
//     try {
//         console.log('Window resized');
//         // Handle layout changes here (optional, not needed now with media queries)
//     } catch (error) {
//         console.error('Error in window resize handler:', error);
//     }
// });
