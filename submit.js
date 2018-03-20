var submitButton = document.querySelector('#submitButton');

/*When the submit button is clicked an alert will appear which says "Thank you for your inquiry. Have a Happy Day!" */
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert('Thank you for your inquiry. Have a Happy Day!');
})