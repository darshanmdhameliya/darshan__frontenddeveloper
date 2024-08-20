/* jQuery HTML */

/* get method */
// $(function () {
//   $(".showtext").click(function () {
//     alert($(".heading").text());
//   });
//   $(".showhtml").click(function () {
//     alert($(".heading").html());
//   });
//   $(".showvalue").click(function () {
//     alert($(".input").val());
//   });
// });

/*set method */
// $(function () {
//   $(".settext").click(function () {
//     $(".heading").text("set heading");
//   });
//   $(".sethtml").click(function () {
//     $(".heading").html("<b>Hello world!</b>");
//   });
//   $(".setvalue").click(function () {
//     $(".input").val("darshan");
//   });
// });

/* Add method */

/* append = content pachi, prepend = content pehla , after = tag pachi , before = tag pehla */

// $(function(){
//     $('.append').click(function(){
//         $('.heading').append('hello word')
//     })
// })
// $(function(){
//     $('.after').click(function(){
//         $('.heading').after('hello word')
//     })
// })
// $(function(){
//     $('.prepend').click(function(){
//         $('.heading').prepend('hello word')
//     })
// })
// $(function(){
//     $('.before').click(function(){
//         $('.heading').before('hello word')
//     })
// })

/* Remove() method => badhu j remove kri nakhe tag and content*/

// $(function () {
//   $(".Remove").click(function () {
//     $(".heading").remove();
//   });
// });

/* empty() method => only content j remove kre*/
// $(function () {
//   $(".empty").click(function () {
//     $(".heading").empty();
//   });
// });

/* CSS classes */

// addClass()
// removeClass()
// toggleClass()
// css()

// addClass()
// $(function(){
//     $('.addclass').click(function(){
//         $('#heading').addClass('heading')
//     })
// })

// removeClass()
// $(function(){
//     $('.removeclass').click(function(){
//         $('#heading').removeClass('heading')
//     })
// })

// toggleClass()
// $(function(){
//     $('.toggleclass').click(function(){
//         $('#heading').toggleClass('heading')
//     })
// })

// css()
// $(function () {
//   $(".css").click(function () {
//     $("#heading").css("background-color", "yellow");
//   });
// });
//multiple-css property
// $(function () {
//   $(".css").click(function () {
//     $("#heading").css({
//       "background-color": "yellow",
//       color: "red",
//     });
//   });
// });


// Dimensions

// width()
// height()
// innerWidth()
// innerHeight()
// outerWidth()
// outerHeight()

// width() and height() Methods 
// width() - returns the width of an element.
// height() - returns the height of an element.

// $(function () {
//     $('.btn').click(function () {
//         var txt = "";
//         txt += "Width of div: " + $(".div1").width() + "</br>";
//         txt += "Height of div: " + $(".div1").height();
//         $(".div1").html(txt);
//     })
// })

// innerWidth() and innerHeight() Methods
// innerWidth() - returns the width of an element (includes padding).
// innerHeight() - returns the height of an element (includes padding).

// $(function () {
//     $('.btn').click(function () {
//         var txt = "";
//         txt += "Width of div: " + $(".div1").width() + "</br>";
//         txt += "Height of div: " + $(".div1").height() + "</br>";
//         txt += "inner width of div : " + $(".div1").innerWidth() + "</br>";
//         txt += "inner height of div : " + $(".div1").innerHeight();
//         $(".div1").html(txt);
//     })
// })

// outerWidth() and outerHeight() Methods

// $(function () {
//     $('.btn').click(function () {
//         var txt = "";
//         txt += "outer width of div : " + $(".div1").outerWidth() + "</br>";
//         txt += "outer height of div : " + $(".div1").outerHeight();
//         $(".div1").html(txt);
//     })
// })