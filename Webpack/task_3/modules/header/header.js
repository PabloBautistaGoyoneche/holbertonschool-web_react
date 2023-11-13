// Import the jQuery library and the associated CSS for the header
import $ from 'jquery';
import './header.css';

// Execute the following code when the DOM is ready
$(function() {
    // Append a logo div and an H1 element to the body
    $('body').append("<div id='logo'><div>");
    $('body').append('<h1>Holberton Dashboard</h1>');

    // Log an initialization message for the header to the console
    console.log('Init header');
});
