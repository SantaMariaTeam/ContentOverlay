$.fn.contentOverlay = function(options) {
  var $selector = this;
  if (options == 'hide') {
    disable_overlay();
    return
  }

  options = $.extend(
    {
      overlay: '#content-overlay'
    },
    options
  );

  var $overlay = $(options.overlay);

  function disable_overlay() {
    var $content_overlayed = $('.content-overlay-wrapper > *:first-child').first();
    if ($content_overlayed.length > 0) {
      $overlay = $content_overlayed.data('overlay');
      $content_overlayed
        .removeClass('content-overlay-outlined')
        .unwrap();

      $overlay
        .hide()
        .appendTo('body');

      $content_overlayed.trigger(e = $.Event('hide', $content_overlayed[0]));
    }
  }

  $('html').on('click', disable_overlay);

  $selector.on('click', function(e) {
    e.stopPropagation();
    disable_overlay();
    var $this = $(this);
    $this.wrap('<div class="content-overlay-wrapper"></div>');
    
    $overlay
      .insertAfter(this)
      .show();

    $this
      .data('overlay', $overlay)
      .addClass('content-overlay-outlined')
      .trigger(e = $.Event('show', this));
  });
  return this;
};
