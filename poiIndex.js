/************* Filter list script ******************/
function funcGetFilteredList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("_userInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("_mainUL");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
	if (li[i].id == "_primaryli") {
	//console.log(li.length);
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
	console.log(txtValue);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
	}
  }
}
/************* Filter list script ******************/
/************* font size change script *************/
$('#_biggify').on('click', function() {
  var fontSize = $('.container').css('font-size');
  var newFontSize = parseInt(fontSize)+5;
  
  $('.container').css('font-size', newFontSize+'px')
})
$('#_smallify').on('click', function() {
  var fontSize = $('.container').css('font-size');
  var newFontSize = parseInt(fontSize)-5;
  
  $('.container').css('font-size', newFontSize+'px')
})
$('#_reset').on('click', function() {
  $('.container').css('font-size', '16px')
})
/************* font size change script *************/