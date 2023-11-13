// Import jQuery, lodash, and the associated CSS for the body
import $ from 'jquery';
import _ from 'lodash';
import './body.css';

// Execute the following code when the DOM is ready
$(function() {
    // Append a button and a paragraph with an id of 'count' to the body
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    
    // Define a closure function 'updateCounter' to track button clicks
    function updateCounter() {
        // Initialize a count variable
        let count = 0;
        
        // Return an inner function that updates the count and displays it
        return function() {
            count += 1;
            $('#count').text(`${count} clicks on the button`);
        };
    }

    // Attach a debounced click event handler to the button using lodash
    $('button').on('click', _.debounce(updateCounter(), 500));
});
