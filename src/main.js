var contentOverlay = function(settings) {
  this.$content = null;
  this.positions = ['left', 'top'];

  var defaults = {
    version: '0.1.0',
    targetSelector: null,
    contentSelector: null,
    position: 'left',
    offset: {
      top: 5,
      left: 5
    }
  }
  this.settings = $.extend(defaults, settings)

  if (this.settings.contentSelector) {
    this.$content = $(this.settings.contentSelector);
    if (this.$content) {
      this.$content.hide();
    };
  };

  this._init();
}

contentOverlay.prototype._init = function() {
    var _this = this;
    var targets =

    $(this.settings.targetSelector).each(function(i, t) {
        $t = $(this);
        $t.mouseover(function(e) {

          // $(this).css('position', 'relative');
          // _this.$content.show();
          // _this.$content.detach().appendTo($t);

          _this.$content.css({
              top: $t.offset().top,
              left: ($t.offset().left - _this.$content.outerWidth())
          })
          .show();

        })
    })
}

var instance = new contentOverlay({
    targetSelector: '.component',
    contentSelector: '#content',
})
