var owl;


jQuery(function($) {

  owl = $(".gallery.owl-carousel");

  owl.owlCarousel({
    navigation: true,
    navigationText : ['<span class="glyphicon glyphicon-chevron-left"></span>', '<span class="glyphicon glyphicon-chevron-right"></span>'],
    singleItem : true,
    autoHeight : true,
    //afterInit: afterOWLinit
  });

  /* Uncomment for Thumbnails
  function afterOWLinit() {
      // adding A to div.owl-page
      $('.owl-controls .owl-page').append('<a class="item-link" href="#"/>');

      var paginationLinks = thumbnails = $('.owl-controls .item-link');
      $.each(this.owl.userItems, function (i) {

          $(paginationLinks[i]).css({
              'background': 'url(' + $(this).find('img').attr('src') + ') center center no-repeat',
              '-webkit-background-size': 'cover',
              '-moz-background-size': 'cover',
              '-o-background-size': 'cover',
              'background-size': 'cover'
          }).click(function (e) {
              e.preventDefault();
              owl.trigger('owl.goTo', i);
          });

      });

      // add Custom PREV NEXT controls
      $('.owl-pagination').prepend('<a href="#prev" class="prev-owl"><span class="glyphicon glyphicon-chevron-left"></span></a>');
      $('.owl-pagination').append('<a href="#next" class="next-owl"><span class="glyphicon glyphicon-chevron-right"></span></a>');


      // set Custom event for NEXT custom control
      $(".next-owl").click(function () {
          owl.trigger('owl.next');
      });

      // set Custom event for PREV custom control
      $(".prev-owl").click(function () {
          owl.trigger('owl.prev');
      });
  }
  */

});
