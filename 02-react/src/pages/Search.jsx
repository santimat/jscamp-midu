// is possible add an alias to an import
// import { Header as Head } from "@components/Header.jsx";

import { useState } from "react";

// Is important have the file's extension because improve packaging performance and its also a good practice
import { SearchFormSection } from "@/components/SearchFormSection.jsx";
import { JobListings } from "@components/JobListings.jsx";
import { Pagination } from "@components/Pagination.jsx";

export function SearchPage() {
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
