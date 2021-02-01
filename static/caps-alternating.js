function setAlternatingCaps(document) {
    input = document.getElementById("input").value;
    var chars = input.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }

    document.getElementById("output").value = chars.join("")
  }
  
setInterval(function () {
    setAlternatingCaps(document)
}, 250);