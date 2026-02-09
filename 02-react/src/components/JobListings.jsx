import { JobCard } from "@components/JobCard.jsx";
import styles from "@components/css/JobListings.module.css";

export function JobListings({ jobs }) {
  return (
    // react has something called Fragment an element that is useful to wrap content without render a parent element
    // it is used because the components must return only one element
    <>
      <h2>Resultados de búsqueda</h2>
      <div className={styles.jobsListings}>
        {/* .map() is used because is necessary return an element */}
        {jobs.map((j) => (
          <JobCard job={j} key={j.id} />
        ))}
      </div>
    </>
  );
}
