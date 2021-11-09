$(function () {
  $("#load").click(function () {
    $.get("students.txt", function (response) {
      $("#result").empty();
      $("#result").append(response);
    });
  });
});
var variable_ = 1;
function doBindings() {
  document.getElementById("mySelect").onchange = function () {
    // if (variable_ == 1) {
    let index = document.getElementById("mySelect").selectedIndex;

    if (index == 1) {
      var values = ["Java", "Cpp", "ICT", "ML"];
    } else if (index == 2) {
      var values = ["OS", "AI", "web Technology", "DIP"];
    }
    var select = document.createElement("select");
    select.name = "Subject";
    select.id = "Subject";

    for (const val of values) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
    }

    var label = document.createElement("container");
    label.innerHTML = "Choose your Subject: ";
    label.htmlFor = "Subject";
    if (variable_ == 1) {
      document
        .getElementById("container")
        .appendChild(label)
        .appendChild(select);
    } else if (variable_ >= 2) {
        // document.getElementById("container").appendChild(label).appendChild(select);
        document.getElementById("container").removeChild(label).removeChild(select);
        document
          .getElementById("container")
          .appendChild(label)
          .appendChild(select);
    }
    variable_ = variable_ + 1;
    // }
  };
}
function addCourse() {
  alert("course Added");
}
function stringMethods() {
  // alert('In Function')
  let F_name = document.getElementById("firstName").value;
  let L_name = document.getElementById("lastName").value;
  let output;

  if (F_name == L_name) {
    output = "first name cannot be equal to last name";
    alert(output);
  }
}
window.onload = function () {
  //do all bindings here
  var btn = document.getElementById("mySelect");
  btn.onclick = doBindings();
};
