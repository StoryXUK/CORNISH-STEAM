// Get the modal element and form iframe
var modal = document.getElementById("modal");
var formIframe = document.getElementById("form-iframe");

// Get the modal button and close button
var modalButton = document.getElementById("modal-button");
var closeButton = document.getElementsByClassName("close")[0];

// Set the form iframe source when the modal button is clicked
modalButton.addEventListener("click", function() {
  formIframe.src = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAADHoRQNUOEJPTjQ4NzlXUkZIWUFLUjIzOUtWUkc1RS4u&embed=true";
  modal.style.display = "block"; // Show the modal
});

// Close the modal when the close button is clicked or outside the modal content is clicked
closeButton.addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Hide the modal
  }
});