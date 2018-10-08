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
    ];

    // make them all equal heights.
    $.each(el, function (index, value) {
      $(value).matchHeight();
    });
  }
})(jQuery);
