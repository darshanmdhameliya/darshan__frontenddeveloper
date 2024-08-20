/* Syntax of jQuery */

// $(document).ready(function(){
//     $('#id').click(function(){
//         $('.class').hide()
//     })
// })

/* Syntax of jQuery shortcut */

// $(function(){
//     $('#id').click(function(){
//         $('.class').hide()
//     })
// })

/* method */

// Hide /show/toggle Method

// $(function(){
//     $('#hide').click(function(){
//         $('#firstHeading').hide()
//     })
// })

// $(function(){
//     $('#show').click(function(){
//         $('#firstHeading').show()
//     })
// })
// $(function(){
//     $('#Toggle').click(function(){
//         $('#firstHeading').toggle()
//     })
// })

//  fadeIn , fadeOut ,fadetoggle method

// $(function(){
//     $('#fadeIn').click(function(){
//         $('#div1').fadeIn()
//         $('#div2').fadeIn(200)
//         $('#div3').fadeIn(4000)
//     })
// })
// $(function(){
//     $('#fadeOut').click(function(){
//         $('#div1').fadeOut(4000)
//         $('#div2').fadeOut(3000)
//         $('#div3').fadeOut()
//     })
// })
// $(function(){
//     $('#fadeToggle').click(function(){
//         $('#div1').fadeToggle()
//         $('#div2').fadeToggle()
//         $('#div3').fadeToggle()
//     })
// })

//  slideDown ,slideUp ,slideToggle method

// $(function(){
//     $('#click1').click(function(){
//         $('#para1').slideDown('slow')
//     })
// })
// $(function(){
//     $('#click2').click(function(){
//         $('#para2').slideUp('slow')
//     })
// })
// $(function(){
//     $('#click3').click(function(){
//         $('#para3').slideToggle('slow')
//     })
// })

// animate method

// $(function(){
//     $('button').click(function(){
//         $('div').animate({left:'250px'},'slow')
//         $('div').animate({top:'50px'},'slow')
//         $('div').animate({height:'50px'},'slow')
//         $('div').animate({top:'40px'},'slow')
//         $('div').animate({height:'20px'},'slow')
//         $('div').animate({top:'30px'},'slow')
//         $('div').animate({height:'20px'},'slow')
//         $('div').animate({top:'20px'},'slow')
//         $('div').animate({height:'10px'},'slow')
//     })
// })
// $(function(){
//     $('button').click(function(){
//         $('div').animate({width:'50px'},'slow')
//         $('div').animate({width:'100px'},'slow')
//         $('div').animate({width:'200px'},'slow')
//         $('div').animate({width:'300px'},'slow')
//         $('div').animate({width:'400px'},'slow')
//         $('div').animate({width:'500px'},'slow')
//         $('div').animate({width:'550px'},'slow')
//         $('div').animate({width:'300px'},'slow')
//         $('div').animate({width:'500px'},'slow')
//         $('div').animate({width:'200px'},'slow')
//         $('div').animate({width:'300px'},'slow')
//         $('div').animate({width:'500px'},'slow')
//         $('div').animate({width:'600px'},'slow')
//         $('div').animate({width:'550px'},'slow')
//         $('div').animate({width:'300px'},'slow')
//         $('div').animate({width:'500px'},'slow')
//         $('div').animate({width:'200px'},'slow')
//         $('div').animate({width:'300px'},'slow')
//         $('div').animate({width:'500px'},'slow')
//         $('div').animate({width:'600px'},'slow')
//         $('div').animate({width:'400px'},'slow')
//         $('div').animate({width:'700px'},'slow')
//         $('div').animate({width:'800px'},'slow')
//         $('div').animate({width:'900px'},'slow')
//         $('div').animate({width:'1000px'},'slow')
//     })
// })

// stop() method

// $(function(){
//     $('.slide').click(function(){
//         $('.slide-panel').slideDown(5000);
//     });
//     $('.stop-button').click(function(){
//         $('.slide-panel').stop();
//     });
// });

//  callback effects

// $(function(){
//     $('.hide').click(function(){
//         $('.para').hide('slow',function(){
//             alert('para is now hide')
//         })
//     })
// })

// chainnig

$(function () {
  $(".hide").click(function () {
    $(".para").css("color", "red").slideUp(2000).slideDown(2000);
  });
});
