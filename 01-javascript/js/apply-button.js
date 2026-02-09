const jobsList = document.querySelector(".jobs-listings");

// hwo to use event delegation to handle clicks on dynamically created elements, because that are created after the page load
// the "?" following jobsList is optional chaining to avoid errors if jobsList is null or undefined then the event listener won't be added
jobsList?.addEventListener("click", (e) => {
  e.target.classList.contains("button-apply-job") && applyToJob(e.target);
});

function applyToJob(button) {
  // select h3 from parent element of button that was clicked
  const jobTitle = button.parentElement.querySelector("h3").textContent;
  button.textContent = "Aplicado";
  button.disabled = true;
  alert(`Has aplicado al empleo: ${jobTitle}`);
}
