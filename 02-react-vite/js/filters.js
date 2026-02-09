// const filterLocation = document.querySelector("#filter-location");

// filterLocation.addEventListener("change", (e) => {
//   // get all the job listing cards, get the jobs here because those are created dynamically after fetching the data

//   // get the value of the selected option
//   const selectedLocation = e.target.value;

//   // jobs.forEach((job) => {
//   //   // get the location of the job from data attribute
//   //   // const { modalidad } = job.dataset;
//   //   // other way to get data attribute
//   //   const modalidad = job.getAttribute("data-modalidad");

//   //   // determine if the job should be hidden
//   //   // if there is a location selected and it doesn't match the job's location, we hide it
//   //   const isHidden = selectedLocation !== "" && selectedLocation !== modalidad;

//   //   // toggle the hidden class based on the isHidden variable
//   //   // first value is the class to toggle, second is a boolean to add or remove the class
//   //   // if job is shown is true, we remove the hidden class, if false we add it
//   //   job.classList.toggle("is-hidden", isHidden);
//   // });
// });

// select all filters
const selectFilters = document.querySelectorAll(".search-filters select");

// create an object to save the filters
let selectedFilters = {};

selectFilters?.forEach((filter) => {
  // create the keys dynamicly
  selectedFilters[filter.name] = "";

  // add the event to listen for change select value
  filter.addEventListener("change", (e) => {
    // get jobs inside addEventListener because these are render dynamically
    const jobs = document.querySelectorAll(".job-listing-card");

    // get name attribute and value from targeted select element
    const { name, value } = e.target;

    // fill the filter object with the data
    selectedFilters[name] = value;

    // get the active filters, it means those that aren't empty
    const activeFilters = Object.keys(selectedFilters).filter(
      (k) => selectedFilters[k] !== "",
    );

    // iterate jobs
    jobs?.forEach((j) => {
      // create a variable with the boolean for visible or not
      const isVisible = activeFilters.every((key) => {
        // get attribute value to can compare each filter with our value saved on selectedFilters object
        const dataset = j.dataset[key];
        const filterValue = selectedFilters[key];

        // return true or false depending if dataset value matchs with the filter value
        return dataset.includes(filterValue);
      });

      // if job shouldn't be visible hide it
      j.classList.toggle("is-hidden", !isVisible);
    });
  });
});

// ---------------------------------------------------------------------

// examples of events most used
// const searchInput = document.querySelector("#empleos-search-input");

// input event is triggered every time the value of the input changes
// searchInput.addEventListener("input", (e) => {
//   console.log("input event:", e.target.value);
// });

// blur is when the input loses focus
// searchInput.addEventListener("blur", (e) => {
//   console.log("blur event:", e.target.value);
// });

// focus is when the input gains focus
// searchInput.addEventListener("focus", (e) => {
//   console.log("focus event:", e.target.value);
// });

// an event that is import is when we submit a form
// const searchForm = document.querySelector("#empleos-search-form");
// searchForm.addEventListener("submit", (e) => {
//   // prevent the default behavior of the form, which is to reload the page
//   e.preventDefault();
//   console.log("form submitted with value:", searchInput.value);
// });

// another event which is useful is keydown and keyup
// searchInput.addEventListener("keydown", (e) => {
//   // now what key we pressed
//   console.log("keydown event:", e.key);
//   // now if the ctrl, alt or shift is pressed when we press the key
//   // all return true or false
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
//   console.log(e.altKey);
// });

const searchInput = document.querySelector("#empleos-search-input");
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  // get jobs from DOM
  const jobs = document.querySelectorAll(".job-listing-card");

  jobs.forEach((job) => {
    const title = job.querySelector("h3").textContent.trim().toLowerCase();
    const isMatch = title.includes(searchTerm);
    // if not match with the search term it will be hidden
    job.classList.toggle("is-hidden", !isMatch);
  });
});
