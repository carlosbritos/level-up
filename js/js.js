var funciones = {

  assambleColorProperties: function(){
    return '<div class="col-6 colorQ">'
    +'<p>Profesional</p>'
    +'<p>Serio</p>'
    +'<p>Integro</p>'
    +'<p>Sincero</p>'  
    +'</div>'
  },

  transicionDeImagenes: function(este){
    $('.active').toggleClass('active').prev().toggleClass('active');


  },
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


  /* SLIDER FOTOS CONSTRUCCION DE LOGO  */

  
  $('.btn-next').on( "click", function(){

    if($('.active').hasClass('first')){
      $('.first, .last').toggleClass('active');
    }
    else{
      $('.active').toggleClass('active').prev().toggleClass('active');
    }

  })

  $('.btn-prev').on( "click", function(){

    if($('.active').hasClass('last')){
      $('.first, .last').toggleClass('active');
    }
    else{
      $('.active').toggleClass('active').next().toggleClass('active');
    }
  })
 









































})