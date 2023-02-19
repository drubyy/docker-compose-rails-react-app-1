const ClearFormErrors = (form) => {
  form.getFieldsError().forEach(element => {
    form.setFields([{
      name: element.name,
      errors: []
    }])
  });
}

export default ClearFormErrors