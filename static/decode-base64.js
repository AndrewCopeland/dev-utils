function setDecodeBase64(document) {
    input = document.getElementById("input").value;
    document.getElementById("output").value = atob(input)
  }
  
setInterval(function () {
  setDecodeBase64(document)
}, 250);