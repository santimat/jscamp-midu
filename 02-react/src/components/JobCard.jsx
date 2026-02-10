import { useState } from "react";

import styles from "@components/css/JobCard.module.css";
import { useRouter } from "@/hooks/useRouter.jsx";

// exporting in this way is a good practice because it forces to use the same name in everywhere
export function JobCard({ job }) {
  const [isApplied, setIsApplied] = useState(false);
  const { navigateTo } = useRouter();

  const { id, title, company, location, description } = job;
  const btnClasses = `${styles.buttonApplyJob} ${isApplied ? styles.isApplied : ""}`;
  const btnText = isApplied ? "Aplicado" : "Aplicar";
  function handleClick() {
    setIsApplied(!isApplied);
  }

  function handleNavigation(event) {
    event.preventDefault();
    const url = `/details?j=${id}`;
    navigateTo(url);
  }

  return (
    <article className={styles.jobListingCard}>
      <div>
        <a href="#" onClick={handleNavigation}>
          <h3>{title}</h3>
        </a>
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
