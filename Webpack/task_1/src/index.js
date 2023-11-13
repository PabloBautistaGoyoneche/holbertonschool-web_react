// Import the jQuery library using the '$' symbol.
import $ from 'jquery';

// Import the lodash library using the '_' symbol.
import _ from 'lodash';

// Import the './js/dashboard_main.js' module.
import './js/dashboard_main.js';

// Execute the following code when the document is ready.
$(function() {
  // Append a paragraph element with a text to the body of the HTML document using jQuery.
  $('body').append('<p>Hello, Webpack!</p>');

  // Use lodash to join the array ['Hello', 'Lodash'] with a space and log it to the console.
  console.log(_.join(['Hello', 'Lodash'], ' '));
});
