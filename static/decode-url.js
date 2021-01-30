function setDecodeUrl(document) {
    input = document.getElementById("input").value;
    document.getElementById("output").value = decodeURIComponent(input)
  }
  
setInterval(function () {
  setDecodeUrl(document)
}, 250);