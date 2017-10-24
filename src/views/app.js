var AppView = Backbone.View.extend({

  el: '#app',
  
  //in our appView instance we need to instantiate new instances of our
  //views - all of them!
  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    
    //this.playerView = new VideoPlayerView();
    //this.videoListView = new VideoListView();
    this.render();  //need this to render page
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView().render();
    new VideoPlayerView().render();
    new VideoListView().render();
    
    return this;
  },
  
  template: templateURL('src/templates/app.html') 

});




