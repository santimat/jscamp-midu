const jobs = await fetch("../data.json").then((res) => res.json());

// get job id from url search params
const id = new URLSearchParams(window.location.search).get("j");

const job = jobs.find((job) => job.id === id);
const breadCrumbItem = document
  .querySelector(".breadcrumb")
  .querySelector("li:last-child");

if (!job) {
  breadCrumbItem.textContent = "Empleo no encontrado";
  document.querySelector(".result").innerHTML =
    "<h2>Lo sentimos, el empleo que buscas no existe.</h2>";
} else {
  breadCrumbItem.textContent = job.titulo;

  // get the template from the DOM
  const jobsDetailsMold = document.querySelector("#job-details");

  // clone the template content (.cloneNode(true) is to clone also the childrens)
  const clon = jobsDetailsMold.content.cloneNode(true);

  // select the elements to fill with data
  clon.querySelector("h1").textContent = job.titulo;
  clon.querySelector("span").textContent = `${job.empresa} - ${job.ubicacion}`;
  clon.querySelector(".job-description p").textContent = job.descripcion;

  // get the responsabilities ul, is better to get it once to avoid querying the DOM multiple times into the loop
  const responsabilitiesUl = clon.querySelector(".job-responsabilities ul");

  // for each responsabilities add a li to the ul
  job.responsabilidades.forEach((responsibility) => {
    const li = document.createElement("li");
    li.textContent = responsibility;
    responsabilitiesUl.appendChild(li);
  });

  // the same for requeriments that is in responsabilities section
  const requerimentsUl = clon.querySelector(".job-requeriments ul");

  job.requerimientos.forEach((requirement) => {
    const li = document.createElement("li");
    li.textContent = requirement;
    requerimentsUl.appendChild(li);
  });

  clon.querySelector(".job-about p").textContent = job.about;

  // Add the template to the DOM
  document.querySelector("main").appendChild(clon);
}
