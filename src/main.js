var contentOverlay = function(settings) {
  this.$content = null;
  this.positions = ['left', 'top'];

  this.settings = $.extend(
    {
      version: '0.1.0',
      targetSelector: null,
      overlay: null,
      selectEvent: 'click', // 'click' or 'mouseover'
      position: 'left',
      offset: {
        top: 5,
        left: 5
      }
    },
    settings
  );

  if (this.settings.overlay) {
    this.$content = $(this.settings.overlay);
    if (this.$content) {
      this.$content.hide();
    };
  };

  this._init();
}

contentOverlay.prototype._init = function() {
    var self = this;

    $(this.settings.targetSelector).on(self.settings.selectEvent, function(e) {
        self.$content.css($(this).offset()).show();
    });
}

var instance = new contentOverlay({
    targetSelector: '.component',
    overlay: '#overlay',
})
