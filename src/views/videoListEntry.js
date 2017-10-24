var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});


//what do we need to do?

//get our video data
  //add the thumbnail
  //add the video title
  //add the video description
  



