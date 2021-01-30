function setPrettyPrintJson(document) {
  jsonInput = document.getElementById("input").value;
  if (jsonInput != "") {
    try {
      jsonObj = JSON.parse(jsonInput);
      prettyPrint = JSON.stringify(jsonObj, null, 2);
      document.getElementById("output").value = prettyPrint;
      document.getElementById("alert").innerText = "";
    } catch(e) {
      document.getElementById("alert").innerText = "Failed to parse the json provided: " + e.message
    }

  } else {
    document.getElementById("output").value = ""
  }
}

setInterval(function () {
  setPrettyPrintJson(document)
}, 250);