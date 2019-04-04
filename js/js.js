var funciones = {

  assambleColorProperties: function(){
    return '<div class="col-6 colorQ">'
    +'<p>Profesional</p>'
    +'<p>Serio</p>'
    +'<p>Integro</p>'
    +'<p>Sincero</p>'  
    +'</div>'
  }
}

$(document).ready(function(){

  $('.slideValores').owlCarousel({
    
    loop:true,
    margin:0,
    nav:false,
    center:true,
    dots:false,
    autoplay:true,
    items:1,



    /* responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:3
        }
    } */
  })


  $('.letras').owlCarousel({
    
    loop:true,
    margin:0,
    nav:false,
    center:true,
    dots:false,
    autoplay:false,
    items:30,



    /* responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:3
        }
    } */
  })


  $('.colorClick').on( "click", function(){
    $('.colorClick').toggleClass("colorNoActive");
    $(this).toggleClass("colorActive colorNoActive");
    if($(this).hasClass("comp1")){
      $(this).toggleClass("col-6 col-12");
    }
    else if($(this).hasClass("comp2")){
      $(this).toggleClass("col-6 col-12");
    }
    else{
      if($(this).hasClass("colorActive")){
        $('.principal').append(funciones.assambleColorProperties());
      }
      else{
        $('.colorQ').remove();
        // $('.principal').remove(funciones.assambleColorProperties());
      }
    }
  })

  $('.contImages').on( "click", function(){
    if($(this).hasClass("ult")){
      $('.contImages').css("visibility","visible","opacity","1");
    }
    else{
      $(this).css("visibility","hidden","opacity","0");
    }
  })









































})