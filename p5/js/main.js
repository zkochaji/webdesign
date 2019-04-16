$(document).ready(function() {
  var list = $("ul li").toArray();
  var length = list.length;
   $('#button').click(function(){
     var randomnum = Math.floor(Math.random()*length);
     var i;
     for (i = 0; i < length; i++) {
     $('#img' + i).css("display", "none");
     console.log(length);
     }
   var randomitem = 'img'+randomnum;
   $("#" + randomitem).css("display", "block");
   console.log(randomitem);
  });
});
