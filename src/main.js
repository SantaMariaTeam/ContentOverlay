$.fn.contentOverlay = function(options) {
  options = $.extend(
    {
      overlay: '#overlay'
    },
    options
  );

  var $selector = $(this.selector);
  var $overlay = $(options.overlay);

  $('html').on('click', function(e) {
    $selector.removeClass('content-overlay-outlined');
    $overlay.hide();
  });
  $selector.on('click', function(e) {
      e.stopPropagation();
      $selector.removeClass('content-overlay-outlined');
      $overlay.css($(this).offset()).show();
      $(this).addClass('content-overlay-outlined');
  });
};
