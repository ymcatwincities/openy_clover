/**
 * @file
 * OpenY Clover JS.
 */
(function ($) {

  /**
   * Match Heights
   */
  Drupal.behaviors.openyMatchHeight = {
    attach: function (context, settings) {
      matchAllHeight();
    }
  };

  Drupal.behaviors.openyMobileBackground = {
    attach: function (context, settings) {
      var sidebar = $('#sidebar');
      var $target = $('.layout-container');
      var $body = $('body');

      sidebar.on('show.bs.collapse', function () {
        $('<div class="overlay">&nbsp;</div>').prependTo($target);
        $body.addClass('content-mobile-fixed');
      });

      sidebar.on('hide.bs.collapse', function () {
        $('.overlay').remove();
        $body.removeClass('content-mobile-fixed');
      });
    }
  };

  function matchAllHeight() {
    var el = [
      '.viewport .page-head__main-menu .nav-level-3 > a',
      '.blog-up',
      '.blog-heading',
      '.inner-wrapper',
      '.card',
      '.card-body',
      '.card h3',
      '.card .node__content',
      '.table-class',
      '.featured-highlights .block-description--text > .field-sb-body',
      '.block-description--3 .media.media-image'
    ];

    // make them all equal heights.
    $.each(el, function (index, value) {
      $(value).matchHeight();
    });
  }
})(jQuery);
