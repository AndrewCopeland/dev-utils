function setMinifyJson(document) {
    jsonInput = document.getElementById("input").value;
    if (jsonInput != "") {
      try {
        jsonObj = JSON.parse(jsonInput);
        jsonString = JSON.stringify(jsonObj);
        document.getElementById("output").value = jsonString;
        document.getElementById("alert").innerText = "";
      } catch(e) {
        document.getElementById("alert").innerText = "Failed to parse the json provided: " + e.message
      }
    } else {
      document.getElementById("output").value = ""
    }
  }
  
setInterval(function () {
    setMinifyJson(document)
}, 250);