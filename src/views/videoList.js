var VideoListView = Backbone.View.extend({
  //initialize our view, then render that view on start
  initialize: function() {
    
    // this.render({el: '.video-list-entry'});
  },
  
  render: function(collection) {
    //should render ALL videos in collection  
    console.log(exampleVideoData.length);
    
    exampleVideoData.forEach(function(value) {
      
      $('src').append(value.snippet.thumbnails.default.url);
      $('.video-list-entry-title').append(value.snippet.title);
      $('.video-list-entry-detail').append(value.snippet.description);
      // this.$el.html(this.template());  
    });
    
    
    this.$el.append(this.template());

  },

  template: templateURL('src/templates/videoList.html')

});




    // return this;
    
    //new VideoListEntryView().render();
    //this.$el.children().detach();
    // this.$el.append(this.template());
    
    // return this;//