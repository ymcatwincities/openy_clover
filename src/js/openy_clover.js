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
      '.simple-block .block-description--text > .block-heading',
      '.block-description--3 .media.media-image',
      '.prev-next-body'
    ];

    // make them all equal heights.
    $.each(el, function (index, value) {
      $(value).matchHeight();
    });
  }

  Drupal.behaviors.openyRemoveIndentComponent = {
    attach: function (context, settings) {
      var twoCol = $('.block-description--2');
      var twoColParent = twoCol.parent().parent();
      var nextItem = twoColParent.next();
      if(nextItem.hasClass('subprogram-listing-item')) {
        twoCol.addClass('pb-0');
      }
    }
  };

})(jQuery);
