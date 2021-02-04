
function jsonPrettyPrint(document, json) {
  try {
    jsonObj = JSON.parse(json);
    prettyPrint = JSON.stringify(jsonObj, null, 2);
    return prettyPrint;
  } catch(e) {
    document.getElementById("alert").innerText = "Failed to parse the json provided: " + e.message
  }
  return ""
}

function setDecodeJWT(document) {
    input = document.getElementById("input").value;
    // Validate input has contents
    if (input == "") {
      document.getElementById("alert").innerText = "";
      return
    }

    // Validate JWT has 3 parts
    parts = input.split(".")
    if (parts.length != 3) {
      document.getElementById("alert").innerText = "Invalid JWT. JWT should have 3 parts delimited by '.'"
      return
    }

    header = jsonPrettyPrint(document, atob(parts[0]))
    payload = jsonPrettyPrint(document, atob(parts[1]))

    // If we failed to pretty print either of those just stop
    if (header == "" || payload == "") {
      return
    }

    document.getElementById("alert").innerText = "";
    output = header + "\n\n" + payload
    document.getElementById("output").value = output
  }
  
setInterval(function () {
  setDecodeJWT(document)
}, 250);