function setEncodeBase64(document) {
    input = document.getElementById("input").value;
    document.getElementById("output").value = btoa(input)
  }
  
setInterval(function () {
  setEncodeBase64(document)
}, 250);