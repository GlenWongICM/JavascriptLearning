

//$('h1').css('font-size', '3rem');

$('#stu').css('font-size', '6rem');
$('#stu').css('color', 'black');
$('#stu').addClass("big-title margin-50");
$('#stu').removeClass("big-title");
$('#stu').hasClass("margin-50");
$('#stu').text("modified string");
$('.big-title').addClass("margin-50");

$('button').text("Submit");
$('button').html("<em>hey</em>");

$("a").attr("href", "https://www.baidu.com");

console.log($('img').attr('src'));

console.log($('#stu').css('color'));


console.log($('h1').attr('class')); // get what value for class


$('h1').click(function() {
    $('h1').css('color', "purple");
})

//for (var i = 0; i < 5; i++) {
//    document.querySelectorAll("button")[i].addEventListener("click", function() {
//        //document.querySelector("h1").style.color = "white";
//        document.querySelectorAll("h1").forEach((h1) => {
//            h1.style.color = "blue";
//        })
//
//    });
//}

$('button').click(function() {
    $('h1').css('color', 'blue');
})


$('input').keypress(function(e) {
    console.log(e.key);
})

$(document).keypress(function(e) {
    $('.big-title').text(e.key);
    //console.log($('.big-title').text);
    console.log(e.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color","blue");
})

$("h1").on("click", function() {
    $("h1").css("color", "black");
})


$('h1').before("<button>New</button>"); //Add the button before the selecting tag of h1
$('h1').after("<button>After</button>"); //Add the button after the selecting tag of h1

$('h1').prepend("<button>prepend</button>"); //Add the button before the content of h1
$('h1').append("<button>append</button>"); //Add the button after the content of h1


//$('button').remove(); //remove all the button elements;

$('img').on('click', function() {
    $('h1').slideToggle();  //  hide(); display:none; will be added into style
                       //  toggle();
                       //  fadeOut(); disappear topwardly
                       //  fadeIn(); appear again
                       //  fadeToggle();  toggle fadeOut and fadeIn
                       //  slideUp()  and slideDown() => slideToggle

});

$('button').on('click', function() {
    $('h1').slideUp().slideDown().animate({ width: "20%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em", 
    borderWidth: "10px"}, 1000);
});


// wait until the jquery loading and execute the call back function.

//$(document).ready(function() {
//    
//
//
//
// 
//    // Get a reference to the <body> element
//    var bodyElement = $('body');
//
//    // Create 100 buttons and append them to the body
//    for (var i = 1; i <= 10; i++) {
//        var button = $('<button>', {
//            text: 'Button ' + i,
//            id: 'button-' + i
//        });
//        bodyElement.append(button);
//    }
//
//    $('h1').css('font-size', '');
//    $('h1').text('Bye');  // change its text content.
//    $('h1').css('color', 'green');
//    $('body').css('background-color', 'pink');
//    $('button').css('background-color', 'grey');
//    $('button').text("'Don\'t click me");
//    $('button').html("<em>Hey</em>");
//    $('h1').addClass("margin-50");
//    console.log($('h1').hasClass("big-title"));
//    console.log($('h1').css('color'));
//    console.log($('body').css('background-color'));
//    console.log($('h1').css('font-size')); // if you have a single value in css method, it is using get method.
//    // if you have two property value in the css method, it is setting method.
//
//});



































