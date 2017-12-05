//function submit button adds from form to list
var current = 0;
var trash = "./img/trashcan.png";
var classTrash = "trash";

// var storedItems = [];
// for(var i in localStorage) {
//     console.log(localStorage[i]);
//     storedItems.push(localStorage[i]);
// }

$(".submit-button").click(function() {
	newItem = $(".input-to-do").val();
	$("ul").append("<li>" + newItem + "<img src=" + trash + " class=" + classTrash + "></li>");

	$(".input-to-do").val("");

	document.getElementsByTagName("img")[current].addEventListener("click", function() {
		$(this).parent().remove();
	})

	document.getElementsByTagName("li")[current].addEventListener("click", function() {
	 	$(this).wrap("<strike></strike>");
	});
	current++;

	// localStorage.setItem("test"+current, newItem);
	// for(var i in localStorage) {
	//     console.log(localStorage[i]);
	//	}
});

 $(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
 } );

// $(function() {
// 	$("li").sortable();
// 	$("li").disableSelection();
// });
