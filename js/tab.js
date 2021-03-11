function openItem(evt, itemName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" colored", "");
    }
    document.getElementById(itemName).style.display = "block";
    evt.currentTarget.className += " colored";
  }