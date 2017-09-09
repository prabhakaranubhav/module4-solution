(function () {
  var names = ["anubhav","sonia","john","abhinay","jim","James","krishna"];
  for (var i = 0; i < names.length; i++) {
    var chosenName = names[i];
    var firstLetter = chosenName.charAt(0).toLowerCase();
    if (firstLetter == "j") {
      bye.speak(chosenName);
    } else {
      hello.speak(chosenName);
    }
  }
})();