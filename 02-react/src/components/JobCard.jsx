import { useState } from "react";

import styles from "@components/css/JobCard.module.css";
// styles destructuration

// exporting in this way is a good practice because it forces to use the same name in everywhere
export function JobCard({ job }) {
  const { title, company, location, description } = job;

  const [isApplied, setIsApplied] = useState(false);

  function handleClick() {
    setIsApplied(!isApplied);
  }

  const btnClasses = `${styles.buttonApplyJob} ${isApplied ? styles.isApplied : ""}`;

  const btnText = isApplied ? "Aplicado" : "Aplicar";

  return (
    <article className={styles.jobListingCard}>
      <div>
        <h3>{title}</h3>
        <small>
          {company} - {location}
        </small>
        <p>{description}</p>
      </div>
      <button onClick={handleClick} className={btnClasses}>
        {btnText}
      </button>
    </article>
  );
}
