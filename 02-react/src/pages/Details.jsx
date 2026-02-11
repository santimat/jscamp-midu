import styles from "@components/css/JobDetails.module.css";

export function Details() {
  const exampleJob = {
    id: "7a4d1d8b-1e45-4d8c-9f1a-8c2f9a9121a4",
    title: "Senior Software Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    description:
      "We are looking for a software engineer with experience in web development and knowledge of JavaScript, React and Node.js. The ideal candidate should be able to work in a team and have good communication skills.",
    responsibilities: [
      "Design and implement scalable software solutions",
      "Mentor junior developers on the team",
      "Perform code reviews and ensure quality",
      "Participate in systems architecture",
      "Solve complex technical problems",
    ],
    requirements: [
      "5+ years of web development experience",
      "Mastery of JavaScript, React and Node.js",
      "Experience in systems architecture",
      "Excellent communication skills",
      "Leadership and mentoring ability",
    ],
    technology: ["react", "node", "javascript"],
    modality: "remote",
    level: "senior",
    about:
      "This position is ideal for a professional passionate about technology and software development, seeking a collaborative and challenging environment.",
  };

  const {
    title,
    company,
    description,
    responsibilities,
    location,
    requirements,
    about,
  } = exampleJob;

  return (
    <div className={styles.jobDetails}>
      <ol className={styles.breadcrumb}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">{title}</a>
        </li>
      </ol>
      <article className={styles.jobDetailsArticle}>
        <header>
          <div>
            <h1>{title}</h1>
            <small>
              {company} - {location}
            </small>
          </div>
          <button>Apply</button>
        </header>
        <main>
          <section className={styles.description}>
            <h2>Descripción</h2>
            <p>{description}</p>
          </section>
          <section className={styles.responsabilities}>
            <h2>Responsabilidades</h2>
            <ul>
              {responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Requisitos</h2>
            <ul>
              {requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Acerca de la empresa</h2>
            <p>{about}</p>
          </section>
        </main>
      </article>
    </div>
  );
}
