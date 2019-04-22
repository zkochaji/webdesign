$(document).ready(function() {
    carGuess();
});

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

function carGuess() {
    var carArray = ["Toyota","Honda","Audi","Subaru","Dodge","Tesla","Bmw","Mercedes","Ferrari","Mazda","Mitsubishi","Citreon"];
    var randomNumber = Math.floor(Math.random() * carArray.length);
    var stripped = carArray[randomNumber].toLowerCase();
    console.log(carArray[randomNumber]);
    console.log(stripped);
    $('#image').css('background-color', carArray[randomNumber]);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == carArray[randomNumber]) {
            $('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' is wrong');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}
