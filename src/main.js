var contentOverlay = function(settings) {
  this.$content = null;
  this.positions = ['left', 'top'];

  this.settings = $.extend(
    {
      version: '0.1.0',
      targetSelector: null,
      contentSelector: null,
      position: 'left',
      offset: {
        top: 5,
        left: 5
      }
    },
    settings
  );

  if (this.settings.contentSelector) {
    this.$content = $(this.settings.contentSelector);
    if (this.$content) {
      this.$content.hide();
    };
  };

  this._init();
}

contentOverlay.prototype._init = function() {
    var self = this;

    $(this.settings.targetSelector).on('mouseover', function(e) {
        self.$content.css($(this).position()).show();
    });
}

var instance = new contentOverlay({
    targetSelector: '.component',
    contentSelector: '#content',
})
