import styles from "@components/css/SearchFormSection.module.css";
import { useSearchForm } from "@/hooks/useSearchForm.jsx";
import { useId } from "react";

export function SearchFormSection({ onFilter }) {
  // useId is used on forms, to create unique ids for each name attribute
  const idText = useId();
  const idTech = useId();
  const idLocation = useId();
  const idExpLevel = useId();

  const {handleSubmit } = useSearchForm({idText, idTech, idLocation, idExpLevel, onFilter})

  return (
    <section className={styles.jobsSearch}>
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      {/* each time that one value inside the form changes, onChange event is lunch */}
      <form onChange={handleSubmit} role="search">
        <div className={styles.searchBar}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            name={idText}
            id="jobs-search-input"
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
          />
        </div>

        <div className={styles.searchFilters}>
          <select name={idTech} id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="node">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remote">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={idExpLevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
    </section>
  );
}
