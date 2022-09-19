export default {
  methods: {
    formToGoogleSheet(scriptURL, formName) {
      fetch(scriptURL, { method: "POST", body: new FormData(document.forms[formName]) })
        .then(response => console.log("Success - form to Google sheet"))
        .catch(error => console.error("Error - form to Google sheet", error.message));
    }
  }
}