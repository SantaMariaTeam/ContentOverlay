$.fn.contentOverlay = function(options) {
  options = $.extend(
    {
      overlay: '#content-overlay'
    },
    options
  );

  var $selector = $(this.selector);
  var $overlay = $(options.overlay);

  function disable_overlay() {
    var content_overlayed = $('.content-overlay-wrapper > *:first-child').first();
    if (content_overlayed) {
      $selector.removeClass('content-overlay-outlined');
      $(content_overlayed).unwrap();
      $overlay.hide();
      $overlay.appendTo('body');
      $(content_overlayed).trigger(e = $.Event('hide', content_overlayed[0]));
    }
  }

  $('html').on('click', disable_overlay);

  $selector.on('click', function(e) {
    e.stopPropagation();
    disable_overlay();
    var $this = $(this);
    $this.wrap('<div class="content-overlay-wrapper"></div>');
    $overlay.insertAfter(this);
    $overlay.show();
    $this.addClass('content-overlay-outlined');
    $this.trigger(e = $.Event('show', this));
  });
  return this;
};
