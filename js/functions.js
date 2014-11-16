var $el = $('.writer'),
    txt = $el.text(),
    txtLen = txt.length,
    timeOut,
    char = 0;

$el.text('|');

(function typeIt() {
    var humanize = Math.round(150) + 30;
    timeOut = setTimeout(function() {
        char++;
        var type = txt.substring(0, char);
        $el.text(type + '|');
        typeIt();

        if (char == txtLen) {
            $el.text($el.text().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);
        }

    }, humanize);
}());
$('#example-basic').waypoint(function(direction) {
  if(direction == 'down'){
      document.getElementById("example-basic1").style.position = "fixed";
      document.getElementById("example-basic1").style.display = "block";
      document.getElementById("example-basic1").style.top = "0px";
  }
  if(direction == 'up'){
      document.getElementById("example-basic1").style.display = "none";

  }
});
