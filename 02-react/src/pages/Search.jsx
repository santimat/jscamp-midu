// is possible add an alias to an import
// import { Header as Head } from "@components/Header.jsx";

import { useState } from "react";

// Is important have the file's extension because improve packaging performance and its also a good practice
import { SearchFormSection } from "@/components/SearchFormSection.jsx";
import { JobListings } from "@components/JobListings.jsx";
import { Pagination } from "@components/Pagination.jsx";

import jobs from "@/data.json" with { type: "json" };

const JOBS_PER_PAGE = 3;
const INITIAL_STATE_FILTERS = {
  text: "",
  technology: "",
  location: "",
  level: "",
};

export function SearchPage() {
  const [filters, setFilters] = useState(INITIAL_STATE_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);

  // method for access to page clicked
  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleFilters(filters) {
    setFilters(filters);
    setCurrentPage(1);
  }

  // get the filters that have a value
  const activeFilters = Object.keys(filters).filter((k) => filters[k]);

  const filteredJobs =
    // if there is not active filters
    !activeFilters.length
      ? jobs
      : // if there is filters, filter the jobs
        jobs.filter((job) => {
          // if there is a filter compare it, if not return true as skip it
          return activeFilters.every((filter) => {
            const filterValue = filters[filter].trim().toLowerCase();

            // if filter is empty return true to skip it
            if (!filterValue) return true;

            if (filter === "text") {
              const { title, description } = job;
              return (
                // search by title or description
                title.toLowerCase().includes(filterValue) ||
                description.toLowerCase().includes(filterValue)
              );
            }

            const jobValue = job[filter];

            // check if filter's value is included on job's value
            return jobValue.includes(filterValue);
          });
        });

  // round up to prevent let some result outs
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const offset = JOBS_PER_PAGE * (currentPage - 1);
  const limit = JOBS_PER_PAGE + offset;
  const paginatedJobs = filteredJobs.slice(offset, limit);

  return (
    <>
      <main>
        <SearchFormSection onFilter={handleFilters} />

        <section>
          <JobListings
            currentPage={currentPage}
            jobs={paginatedJobs}
            jobsPerPage={JOBS_PER_PAGE}
          />
          <Pagination
            onPageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </section>
      </main>
    </>
  );
}
