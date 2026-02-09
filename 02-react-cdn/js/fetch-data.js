// fetch is a browser API that allows us to make HTTP requests and get information from files too
// we can get the jobs from data.json using fetch and then render them in the DOM
// is possible prevent fetching data from someurl's to for security reasons (CORS policy)
// the fetch's response are asyncronic operations that return a promise that we must resolve with .then() or using await inside an async function

// example of fetching data from an API
// const apiURL = "https://dragonball-api.com/api/characters";
// resolve the promise to parse to JSON and then using await to get the data
// const { items } = await fetch(apiURL).then((res) => res.json());
// console.table(items);

// get the jobs from data.json and render them in the DOM
// parse to json with .then() and await the result
const jobs = await fetch("./data.json").then((res) => res.json());

const jobsContainer = document.querySelector(".jobs-listings");
const jobsTemplate = document.getElementById("job-listing-card-template");

const JOBS_PER_PAGE = 3;

// get the total pages, dividing the jobs by 3 per page
// with .ceil() with round up the result
const totalPages = Math.ceil(jobs.length / 3);

// for default we want to start with the first page
const currentPage = +new URLSearchParams(location.search).get("p");

const pagination = document.querySelector(".pagination");

// add a <a> link for each page
for (let i = 1; i < totalPages; i++) {
  const a = document.createElement("A");
  a.href = `/empleos.html?p=${i}`;
  a.textContent = i;
  a.classList.toggle("is-active", i === currentPage);

  pagination.insertBefore(a, pagination.querySelector("a:last-of-type"));
}

// example, page 1 we want that the jobs are rendered starting at 0 to 3
// then we substract 1 to current page
// on page 2 we want render jobs which start at 3 (1 (current_page - 1) * 3 (jobs_per_page)) to 6 ( 3 (jobs_per_page) + 3 (offset that we calculate previously))
const offset = (currentPage - 1) * currentPage;
// limit is jobs_per_page + offset, because we want show the next three jobs starting at offset
const limit = JOBS_PER_PAGE + offset;
const paginatedJobs = jobs.slice(offset, limit);

paginatedJobs.forEach((job) => {
  const {
    id,
    titulo,
    empresa,
    ubicacion,
    descripcion,
    data: { nivel: level, technology, modalidad: modality },
  } = job;

  // clon the template with the elements inside for each job
  const jobElement = jobsTemplate.content.cloneNode(true);

  const article = jobElement.querySelector("article");
  article.setAttribute("data-location", modality);
  article.setAttribute("data-level", level);
  article.setAttribute("data-technology", technology.join(","));

  const title = jobElement.querySelector("h3 a");
  title.textContent = titulo;
  title.href = `./detalles.html?j=${id}`;

  const companyElement = jobElement.querySelector("small");
  companyElement.textContent = `${empresa} - ${ubicacion}`;

  const descriptionElement = jobElement.querySelector("p");
  descriptionElement.textContent = descripcion;

  jobsContainer.appendChild(jobElement);
});
