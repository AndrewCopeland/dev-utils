function setEncodeUrl(document) {
    input = document.getElementById("input").value;
    document.getElementById("output").value = encodeURI(input)
  }
  
setInterval(function () {
  setEncodeUrl(document)
}, 250);