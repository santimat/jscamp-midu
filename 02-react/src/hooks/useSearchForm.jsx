export function useSearchForm({idText,idTech,idLocation,idExpLevel, onFilter}){
  function handleSubmit(e) {
    e.preventDefault();

    // get the data from the form
    // event.terget -> element that receive the event
    // event.currentTarget -> element that listens the event
    const formData = new FormData(e.currentTarget);

    const filters = {
      // get the value from every filter with .get(name's attribute)
      text: formData.get(idText),
      technology: formData.get(idTech),
      modality: formData.get(idLocation),
      level: formData.get(idExpLevel),
    };

    onFilter(filters);
  }


  return {handleSubmit}

}