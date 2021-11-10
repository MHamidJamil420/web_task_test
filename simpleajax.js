let courses_from_file;
// $(function() {
//   $("#addcourse").click(function () {
//     $.get("students.txt", function (response) {
//       $("#result").empty();
//       $("#result").append(response);
//       // if (index == 1) {
//       //   $.get("CS.txt", function (response) {
//       //     courses_from_file = response;
//       //     $("#result").empty();
//       //     $("#result").append(response);
//       //   });
//       // } else if (index == 2) {
//       //   $.get("SC.txt", function (response) {
//       //     courses_from_file = response;
//       //     $("#result").empty();
//       //     $("#result").append(response);
//       //   });
//       // }
//     });
//   });
// });
var variable_ = 1;
function doBinding_2() {
  //   $("#courses_added").on("click", "li", add_and_remove);
  $("#courses_to_be_added").on("click", "li", add_and_remove);
  document.getElementById("mySelect").onchange = function () {
    if (variable_ == 1) {
      document.getElementById("b1").innerHTML = "Click to Add";
      document.getElementById("b2").innerHTML = "Added";
    }
    let index = document.getElementById("mySelect").selectedIndex;
    // grabing courses from file
    // sleep(2000);
    // if (index == 1) {
    //   $.get("CS.txt", function (response) {
    //     courses_from_file = response;
    //     $("#result").empty();
    //     $("#result").append(response);
    //     // sleep(500);
    //   });
    // } else if (index == 2) {
    //   $.get("SC.txt", function (response) {
    //     courses_from_file = response;
    //     $("#result").empty();
    //     $("#result").append(response);
    //     // sleep(500);
    //   });
    // }
    // sleep(2000);
    // getcourse(index);
    // console.log(courses_from_file);
    // console.log(document.getElementById("result").innerHTML);

    //courses will be grabed in a String
    assignCourses(index);
    // }
    // var newTodo = document.getElementById("newToDo").value;
    // var todos = document.getElementById("todos");
    // var newTodoText = document.createTextNode(newTodo);
    // var newLi = document.createElement("li");
    // newLi.appendChild(newTodoText);
    // todos.appendChild(newLi);
  };
}
function assignCourses(index) {
  if (index == 1 && variable_ == 1) {
    //   var values = ["Java", "Cpp", "ICT", "ML"];
    // console.log(document.getElementById("result").innerHTML);
    $.get("CS.txt", function (response) {
      console.log(response);
      $("#courses_to_be_added").append("<li id=firstRow >" + "Java" + "</li>");
      $("#courses_to_be_added").append("<li id=secondRow>" + "CPP" + "</li>");
      $("#courses_to_be_added").append("<li id=thirdRow>" + "ICT" + "</li>");
      $("#courses_to_be_added").append("<li id=fourthRow >" + "ML" + "</li>");
      variable_++;
    });
  } else if (index == 2 && variable_ == 1) {
    //   var values = ["OS", "AI", "web Technology", "DIP"];
    // console.log(document.getElementById("result").innerHTML);
    $.get("SC.txt", function (response) {
      console.log(response);
      $("#courses_to_be_added").append("<li id=firstRow >" + "OS" + "</li>");
      $("#courses_to_be_added").append("<li id=secondRow>" + "AI" + "</li>");
      $("#courses_to_be_added").append("<li id=thirdRow>" + "DAA" + "</li>");
      $("#courses_to_be_added").append("<li id=fourthRow >" + "DIP" + "</li>");
      variable_++;
    });
  } else if (index == 1 && variable_ > 1) {
    // console.log(document.getElementById("result").innerHTML);
    $.get("CS.txt", function (response) {
      console.log(response);
      document.getElementById("firstRow").innerHTML = "JAVA";
      document.getElementById("secondRow").innerHTML = "CPP";
      document.getElementById("thirdRow").innerHTML = "ICT";
      document.getElementById("fourthRow").innerHTML = "ML";
    });
  } else if (index == 2 && variable_ > 1) {
    // console.log(document.getElementById("result").innerHTML);
    $.get("SC.txt", function (response) {
      console.log(response);
      document.getElementById("firstRow").innerHTML = "OS";
      document.getElementById("secondRow").innerHTML = "AI";
      document.getElementById("thirdRow").innerHTML = "DAA";
      document.getElementById("fourthRow").innerHTML = "DIP";
    });
  }
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
function doBinding_1() {
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
      document
        .getElementById("container")
        .removeChild(label)
        .removeChild(select);
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
  // alert("course Added");
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
function handleDelete(e) {
  var tag = e.target;
  var li = tag.parentNode;
  li.parentNode.removeChild(li);
}
window.onload = function () {
  //do all bindings here
  var btn = document.getElementById("mySelect");
  var done_btn = document.getElementById("addcourse");
  //   btn.onclick = doBinding_1();
  btn.onclick = doBinding_2();
  done_btn = addCourse();
};
// code from lecture 9
// $(function() {
//     //jq eill execute this function after page load
//     // so do your bindings here
//     // $("#addButton").click(manage_courses);
//     $("#mySelect").click(manage_courses);
//     //   $("#todos li").click(add_and_remove);
//     $("#todos").on("click", "li", add_and_remove);
//   });
//   function manage_courses() {
//     var index = $("#index").val();
//     if (index == 1) {
//         // var values = ["Java", "Cpp", "ICT", "ML"];
//         $("#courses_to_be_added").append("<li>" + "Java" + "</li>");
//         $("#courses_to_be_added").append("<li>" + "CPP" + "</li>");
//         $("#courses_to_be_added").append("<li>" + "ICT" + "</li>");
//         $("#courses_to_be_added").append("<li>" + 'ML' + "</li>");
//     } else if (index == 2) {
//         // var values = ["OS", "AI", "web Technology", "DIP"];
//         $("#courses_added").append("<li>" + "OS" + "</li>");
//         $("#courses_added").append("<li>" + "AI" + "</li>");
//         $("#courses_added").append("<li>" + "web tech" + "</li>");
//         $("#courses_added").append("<li>" + "DIP" + "</li>");
//       }
//     // $("#newTodo").removeClass("error");
//     // $("#newTodo").val("");
//     // $("#todos").append("<li>" + newTodo + "</li>");
//     //   $("#todos li").click(add_and_remove);
//   }
var target_string = 1;
let str1 = "identity_";
function add_and_remove() {
  let number_to_str = target_string.toString();
  let indexer = str1.concat(number_to_str);
  let targetedID = $(this).attr("id");
  console.log(targetedID);
  let course = document.getElementById(targetedID).innerHTML;
  console.log(course);

  $("#courses_added").append("<li id= indexer >" + course + "</li>");
  $(this).fadeOut();
  target_string++;
  // .remove();
}
