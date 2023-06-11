// Modal
 
  // Get the modal element
  var modal = document.getElementById('surveyModal');

  // Get the button that opens the modal
  var button = document.querySelector('.survey-button');

  // When the button is clicked, open the modal
  button.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
