var VideoPlayerView = Backbone.View.extend({

  model: Video,
  render: function() {
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
