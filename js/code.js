//function submit button adds from form to list
var current = 0;
var trash = "./img/trashcan.png";
var classTrash = "trash";

//puts local storage back in
console.log(localStorage.getItem("current"));
for(var i = 0; i < localStorage.getItem("current"); i++) {
	var newItem = localStorage.getItem("todo" + (i + 1));
	console.log();
	//adds trash can
	$("ul").append("<li>" + newItem + "<img src=" + trash + " class=" + classTrash + "></li>");
	//adds ability to remove to trash can
	document.getElementsByTagName("img")[i].addEventListener("click", function() {
		$(this).parent().remove();
		var findThisCurrent = function() {
			var i = 0;
			for(i = 0; $("li")[i].textContent != $(this).textContent; i++)
				;
			return i;
		}
		localStorage.removeItem("todo" + findThisCurrent());//need to remove item associated with 
		current--;
	})
	//adds ability to cross item off of list
	document.getElementsByTagName("li")[i].addEventListener("click", function() {
	 	$(this).wrap("<strike></strike>");
	});
}

var addToDo = function() {
	//deals with empty strings
	if($(".input-to-do").val() === "")
		return false;

	var newItem = $(".input-to-do").val();
	//adds trash can
	$("ul").append("<li>" + newItem + "<img src=" + trash + " class=" + classTrash + "></li>");
	//empties text-box
	$(".input-to-do").val("");
	//adds ability to remove to trash can
	document.getElementsByTagName("img")[current].addEventListener("click", function() {
		var i = 0;
		for(i = 0; $("li")[i].textContent != $(this).parent().text(); i++)
			;
		console.log(i);
		console.log($(this).parent().text());
		localStorage.removeItem("todo" + (i + 1));//need to remove item associated with 
		for(i += 2; i < 10; i++) {
			var temp = localStorage.getItem("todo"+i);
			console.log(temp);
			localStorage.setItem("todo" + (i - 1), temp);
		}
		$(this).parent().remove();
		current--;
		localStorage.setItem("current", current);
	})
	//adds ability to cross item off of list
	document.getElementsByTagName("li")[current].addEventListener("click", function() {
	 	$(this).wrap("<strike></strike>");
	});
	current++;
	//adds item to local storage
	localStorage.setItem("todo"+current, newItem);
	for(var i in localStorage) {
	     console.log(localStorage[i]);
	}
	//updates current in local storage
	localStorage.setItem("current", current);
	$(".input-to-do").focus();
}

$(".submit-button").click(addToDo);

//makes list sortable
 $(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
 } );

//on enter add to list
$(".input-to-do").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".submit-button").click();
    }
});