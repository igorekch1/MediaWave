function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "myMenu") {
      x.className += " responsive";
    } else {
      x.className = "myMenu";
    }
  }