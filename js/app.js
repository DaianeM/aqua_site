$('[data-group').each(function(){
  var $allTarget = $(this).find('[data-target'),
      $allClick = $(this).find('[data-click]'),
      activeClass = 'active';

  $allTarget.first().addClass(activeClass);
  $allClick.first().addClass(activeClass);

  $allClick.click(function(e) {
    e.preventDefault();

    var id = $(this).data('click'),
        $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $target.addClass(activeClass);
    $(this).addClass(activeClass);

  })
});


//ANIMANDO O SCROLL
$('.menu-nav a[href^="#"]').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      menuHeight = $('.menu').innerHeight(),
      targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);
});

//VOLTAR PARA O TOPO QUANDO CLICAR NA LOGO
$('.logo').click(function(e){
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 500);
});


//SCROLL SUAVE LINK ATIVO
$('section').each(function(){
  var height = $(this).height(),
      offsetTop = $(this).offset().top,
      menuHeight = $('.menu').innerHeight(),
      id = $(this).attr('id'),
      $itemMenu = $('a[href="#' + id +'"]');

  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop){
      $itemMenu.addClass('active');
    } else {
      $itemMenu.removeClass('active');
    }
  })
})





// $(document).ready(function () {
//   var classActive = "active";

//   $(".animais .tab-menu a").first().addClass(classActive);
//   $(".animais .item").first().addClass(classActive);

//   $(".animais .tab-menu a").click(function (e) {
//     e.preventDefault();
//     var itemId = $(this).attr("href");

//     $(".animais .tab-menu a, .animais .item").removeClass(classActive);
//     $(this).addClass(classActive);
//     $(itemId).addClass(classActive);
//   });

//   $(".ecossistema .tab-menu a").first().addClass(classActive);
//   $(".ecossistema .item").first().addClass(classActive);

//   $(".ecossistema .tab-menu a").click(function (e) {
//     e.preventDefault();
//     var itemId = $(this).attr("href");

//     $(".ecossistema .tab-menu a, .ecossistema .item").removeClass(classActive);
//     $(this).addClass(classActive);
//     $(itemId).addClass(classActive);
//   });
// });
