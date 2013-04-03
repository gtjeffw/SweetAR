$(document).ready(function() 
{
    //set whatever content you want to put into the new page
    var content_string = 'TEST text';

    //append the new page onto the end of the body
    $('#page_body').append('<div data-role="page" id="flowerContainer"><div data-role="content">' + content_string + '</div></div>');
    $.mobile.changePage($('#flowerContainer'));
});