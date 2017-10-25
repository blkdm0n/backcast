var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  render: function(collection) {
    exampleVideoData.forEach(function(value) {
      console.log(value.snippet.title);
      $('.video-list-entry-title').html(value.snippet.title);
      
    });
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

//thumbnail = exampleVideoData[i].snippet.thumbnails.default.url
//title = exampleVideoData[i].snippet.title
//description = exampleVideoData



