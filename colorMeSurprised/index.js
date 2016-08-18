$( function() {
  $( "#sortable").sortable();
  $( "#sortable" ).disableSelection();
} );

var liHeight = 100;
var iconSize = 20;

function changeButtonSize() {
  var count = $("li").length;
  iconSize = 20/count;
  $(".fa-times-circle").css("font-size", "" + iconSize + "em");
}

function changeHeight() {
  var count = $("li").length;
  var liHeight = 100 / count;
  $("li").css("height", "" + liHeight + "%");
}

$("#colorButton").click(function() {
  var color = $("#colorInput").val();
  var $newli = $("<li class='ui-state-default'><i class='fa fa-times-circle' aria-hidden='true'></i></li>");
  $newli.css("background-color", color);
  $("ul").append($newli);
  changeHeight();
  changeButtonSize();
  console.log(color);
});
  
$("ul").on("click", "i", function() {
  $(this).parent().remove();
  changeHeight();
  changeButtonSize();
});

$("ul").on("mouseover", "li", function() {
  var color = $(this).css("background-color");
  $("#currentColor").text(color).css("color", color);
});
