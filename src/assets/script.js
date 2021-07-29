$(document).ready( function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });

    /* contourner dropdown de bootstrap */
    $(".dropright").hover(
      function() {
        // $(".dropright").find(".dropdown-menu").removeClass("show");
        $(this).children(".dropdown-menu").addClass("show");
        // if( $(this).children(".dropdown-menu").hasClass('hideable')){
        //   $(this).children(".dropdown-menu").removeClass('hideable');
        // }
      },
      function() {
        // $(this).children(".dropdown-menu").addClass("hideable");
        // const selected = $(this);
        // setTimeout( function(){
        //   if( selected.children(".dropdown-menu").hasClass('hideable')){
        //     selected.children(".dropdown-menu").removeClass("show");
        //   }
        // }  , 3000);
      }
    );

    $(".dropdown-item").not('.dropright').hover(function() {
        $(this).siblings(".dropright").children(".dropdown-menu").removeClass("show");
    });

    $(window).click(function() {
      $(".dropright").children(".dropdown-menu").removeClass("show");
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find(".dropdown-menu").removeClass("show");
    });

    // $(".dropdown-item").click(function() {
    //     setTimeout( function(){
    //         $(".dropright").children(".dropdown-menu").removeClass("show");
    //     }  , 100 );
    // });

});
